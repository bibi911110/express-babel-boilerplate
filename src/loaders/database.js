import db from '../config/sequelize';
import User from '../models/user';

const databaseLoader = async () => {
  try {
    await db.authenticate();

    // model sync
    await User.sync();

    console.log(`[Loader]: Database connected`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default databaseLoader;
