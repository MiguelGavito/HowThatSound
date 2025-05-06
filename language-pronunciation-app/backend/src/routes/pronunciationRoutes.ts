import { Router } from 'express';
import PronunciationController from '../controllers/pronunciationController';

const router = Router();
const pronunciationController = new PronunciationController();

export const setPronunciationRoutes = () => {
    router.get('/pronunciation', pronunciationController.getPronunciation);
    router.get('/similar-words', pronunciationController.getSimilarWords);
    return router;
};