import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import {NestDatabaseModule} from "../../database/nest/nest-database.module";

@Module({
  imports: [NestDatabaseModule ,TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
