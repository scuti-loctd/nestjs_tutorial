import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "../../module/user/entities/user.entity";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_LOCAL,
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            synchronize: false,
            entities: [User],
        }),
    ],
})
export class NestDatabaseModule {}