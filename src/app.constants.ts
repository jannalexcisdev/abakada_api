import * as dotenv from 'dotenv'

dotenv.config();

export enum USER_TYPE {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export const DATABASE_CONFIG = {
    HOST: process.env.DB_HOST,
    PORT: +process.env.DB_PORT!,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE_NAME: process.env.DB_NAME,
}
