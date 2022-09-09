import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { LecturersModule } from './lecturers/lecturers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "plancise",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    CoursesModule,
    StudentsModule,
    LecturersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
