import express from 'express';
import loaders from './loaders';

const startServer = async () => {
    const app = express();

    await loaders({ app });

    app.listen(5000, () => {
        console.log(`Server is running on port 5000`);
    });
};

startServer();
