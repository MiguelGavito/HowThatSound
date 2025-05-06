import express from 'express';
import bodyParser from 'body-parser';
import { setPronunciationRoutes } from './routes/pronunciationRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setPronunciationRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});