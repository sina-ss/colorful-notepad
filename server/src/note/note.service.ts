import { Injectable, NotFoundException } from '@nestjs/common';
import { Note, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.services';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  async note(id: number): Promise<Note | null> {
    const note = await this.prisma.note.findUnique({ where: { id } });
    if (!note) throw new NotFoundException(`Note with ID ${id} not found`);
    return note;
  }

  async notes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.NoteWhereUniqueInput;
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithRelationInput;
  }): Promise<Note[]> {
    return this.prisma.note.findMany({ ...params });
  }

  async createNote(data: Prisma.NoteCreateInput): Promise<Note> {
    return this.prisma.note.create({ data });
  }

  async updateNote(params: {
    where: Prisma.NoteWhereUniqueInput;
    data: Prisma.NoteUpdateInput;
  }): Promise<Note> {
    const existingNote = await this.prisma.note.findUnique({
      where: { id: params.where.id },
    });
    if (!existingNote)
      throw new NotFoundException(`Note with ID ${params.where.id} not found`);
    return this.prisma.note.update({ data: params.data, where: params.where });
  }

  async deleteNote(id: number): Promise<Note> {
    const note = await this.prisma.note.findUnique({ where: { id } });
    if (!note) throw new NotFoundException(`Note with ID ${id} not found`);
    return this.prisma.note.delete({ where: { id } });
  }
}