import db from '../config/sequelize';

const databaseLoader = async () => {
    try {
        // connect to database
        await db.authenticate();

        // model sync
        await db.sync();

        console.log(`Database connected`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export default databaseLoader;
