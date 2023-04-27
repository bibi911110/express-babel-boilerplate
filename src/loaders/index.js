import expressLoader from './express';
import databaseLoader from './database';

export default async ({ app }) => {
    await expressLoader({ app });
    await databaseLoader();
};
