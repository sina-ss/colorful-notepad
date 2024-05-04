import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { PrismaService } from 'prisma/prisma.services';

@Module({
  providers: [NoteService, PrismaService],
  controllers: [NoteController],
})
export class NoteModule {}