import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    NoteModule,
    ThrottlerModule.forRoot({
      //@ts-ignore
      ttl: 60000, // time to live for the records in seconds
      limit: 10, // maximum number of requests within TTL
    }),
  ],
})
export class AppModule {}
