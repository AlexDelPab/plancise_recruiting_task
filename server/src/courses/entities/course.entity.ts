import { Lecturer } from "src/lecturers/entities/lecturer.entity";
import { Student } from "src/students/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  appointments: string;

  @ManyToOne(type => Lecturer, lecturer => lecturer.id)
  @JoinColumn()
  lecturer: Lecturer;

  @ManyToMany(type => Student, student => student.id)
  @JoinColumn()
  students: Student[];
}
