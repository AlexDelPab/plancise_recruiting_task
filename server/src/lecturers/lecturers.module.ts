import { Module } from '@nestjs/common';
import { LecturersService } from './lecturers.service';
import { LecturersController } from './lecturers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecturer } from './entities/lecturer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lecturer])],
  controllers: [LecturersController],
  providers: [LecturersService]
})
export class LecturersModule {}
