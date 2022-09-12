import { DataSource } from 'typeorm';
import { userTable1662977083246 } from "../migrations/nest/1662977083246-user-table"

export const NestDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'nest',
    synchronize: false,
    migrations: [userTable1662977083246],
});