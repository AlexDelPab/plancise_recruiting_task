import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecturer } from 'src/lecturers/entities/lecturer.entity';
import { Student } from 'src/students/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>,
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Lecturer) private lecturerRepository: Repository<Lecturer>
  ){};

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOneBy({ id });
  }

  async addLecturer(courseId: number, lecturerId: number): Promise<Course> {
    const lecturer = await this.lecturerRepository.findOneBy({ id: lecturerId });
    const course = await this.courseRepository.findOneBy({ id: courseId });
    course.lecturer = lecturer;
    return this.courseRepository.save(course);
  }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  async remove(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
