import { Injectable } from '@nestjs/common';
import { Note, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.services';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  async note(id: number): Promise<Note | null> {
    return this.prisma.note.findUnique({ where: { id } });
  }

  async notes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.NoteWhereUniqueInput;
    where?: Prisma.NoteWhereInput;
    orderBy?: Prisma.NoteOrderByWithRelationInput;
  }): Promise<Note[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.note.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createNote(data: Prisma.NoteCreateInput): Promise<Note> {
    return this.prisma.note.create({ data });
  }

  async updateNote(params: {
    where: Prisma.NoteWhereUniqueInput;
    data: Prisma.NoteUpdateInput;
  }): Promise<Note> {
    const { where, data } = params;
    return this.prisma.note.update({ data, where });
  }

  async deleteNote(where: Prisma.NoteWhereUniqueInput): Promise<Note> {
    return this.prisma.note.delete({ where });
  }
}