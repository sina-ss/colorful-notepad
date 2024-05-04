import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note as NoteModel } from '@prisma/client';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
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
    return this.noteService.note(Number(id));
  }

  @Put(':id')
  async updateNote(
    @Param('id') id: string,
    @Body() noteData: NoteModel,
  ): Promise<NoteModel> {
    return this.noteService.updateNote({
      where: { id: Number(id) },
      data: noteData,
    });
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string): Promise<NoteModel> {
    return this.noteService.deleteNote({ id: Number(id) });
  }
}
