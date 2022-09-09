import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "plancise",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
