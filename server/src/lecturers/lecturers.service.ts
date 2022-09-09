import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { Lecturer } from './entities/lecturer.entity';

@Injectable()
export class LecturersService {
  constructor(@InjectRepository(Lecturer) private lecturerRepository: Repository<Lecturer>){};

  create(createLecturerDto: CreateLecturerDto) {
    const lecturer = this.lecturerRepository.create(createLecturerDto);
    return this.lecturerRepository.save(lecturer);
  }

  findAll() {
    return `This action returns all lecturers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturer`;
  }

  update(id: number, updateLecturerDto: UpdateLecturerDto) {
    return `This action updates a #${id} lecturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }

  populate() {
    const lecturers = ['Professor Sokolov', 'Professor Rakitic', 'Professor Muller'];
    lecturers.forEach(l => this.create({name: l}));
  }
}
