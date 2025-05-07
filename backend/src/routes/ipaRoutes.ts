import { Router } from 'express';
import { IpaController } from '../controllers/ipaController';

const router = Router();
const ipaController = new IpaController();

// Get IPA phonetics for a word
router.get('/word/:word', ipaController.getWordPhonetics);

// Find words with similar phonetics
router.get('/similar/:phonetic', ipaController.findSimilarPhonetics);

export default router; 