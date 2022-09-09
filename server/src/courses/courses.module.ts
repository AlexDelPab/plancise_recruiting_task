import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import { Lecturer } from 'src/lecturers/entities/lecturer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Student, Lecturer])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
