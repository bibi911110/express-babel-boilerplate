import { Sequelize } from 'sequelize';
import config from './index';

const db = new Sequelize(config.database.name, config.database.user, config.database.password, {
    host: config.database.host,
    port: config.database.port,
    dialect: config.database.type,
    logging: false,
});

export default db;
