import cors from 'cors';
import bodyParser from 'body-parser';

const expressLoader = ({ app }) => {
  try {
    // set middleware
    app.use(cors({ origin: '*' }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

export default expressLoader;
