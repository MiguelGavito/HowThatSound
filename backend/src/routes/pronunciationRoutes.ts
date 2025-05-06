import { Router } from 'express';
import PronunciationController from '../controllers/pronunciationController';

const router = Router();
const pronunciationController = new PronunciationController();

export const setPronunciationRoutes = () => {
    router.post('/pronunciation', pronunciationController.getPronunciation);
    router.post('/similar-words', pronunciationController.getSimilarWords);
    return router;
};