import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note as NoteModel } from '@prisma/client';
import { Throttle } from '@nestjs/throttler';

//@ts-ignore
@Throttle(10, 60) // 60 seconds as per NestJS Throttler docs
@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createNote(@Body() noteData: NoteModel): Promise<NoteModel> {
    return this.noteService.createNote(noteData);
  }

  @Get()
  async getAllNotes(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
  ): Promise<NoteModel[]> {
    return this.noteService.notes({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
    });
  }

  @Get(':id')
  async getNoteById(@Param('id') id: string): Promise<NoteModel> {
    const note = await this.noteService.note(Number(id));
    if (!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    return note;
  }

  @Put(':id')
  async updateNote(
    @Param('id') id: string,
    @Body() noteData: NoteModel,
  ): Promise<NoteModel> {
    try {
      return await this.noteService.updateNote({
        where: { id: Number(id) },
        data: noteData,
      });
    } catch (error) {
      throw new HttpException('Note update failed', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string): Promise<NoteModel> {
    try {
      return await this.noteService.deleteNote(Number(id));
    } catch (error) {
      if (error.response?.statusCode === HttpStatus.NOT_FOUND) {
        throw new HttpException(error.response, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Failed to delete the note',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}