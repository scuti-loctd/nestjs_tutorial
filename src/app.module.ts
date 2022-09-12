import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { ConfigModule } from '@nestjs/config';
import {NestDatabaseModule} from "./database/nest/nest-database.module";

@Module({
  imports: [ConfigModule.forRoot(), UserModule, NestDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
