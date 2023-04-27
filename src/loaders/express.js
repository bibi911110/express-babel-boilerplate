import cors from 'cors';
import bodyParser from 'body-parser';

const expressLoader = ({ app }) => {
    try {
        // set middleware
        app.use(cors({ origin: '*' }));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        console.log(`[Loader]: Express config loaded`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default expressLoader;
