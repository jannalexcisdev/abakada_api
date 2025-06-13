import { DataSource, DataSourceOptions } from 'typeorm';
import { UserModel } from '../models/user.model';
import { DATABASE_CONFIG } from '../app.constants';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: DATABASE_CONFIG.HOST,
  port: DATABASE_CONFIG.PORT,
  username: DATABASE_CONFIG.USERNAME,
  password: DATABASE_CONFIG.PASSWORD,
  database: DATABASE_CONFIG.DATABASE_NAME,

  entities: [
    UserModel,
  ],
};

const dataSource = new DataSource({ ...dataSourceOptions, migrations: ['./migrations/*.ts'] });
export default dataSource;