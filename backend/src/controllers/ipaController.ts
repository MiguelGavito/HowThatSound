import { Request, Response } from 'express';
import { IpaService } from '../services/ipaService';

export class IpaController {
  private ipaService: IpaService;

  constructor() {
    this.ipaService = new IpaService();
  }

  getWordPhonetics = async (req: Request, res: Response): Promise<void> => {
    try {
      const { word } = req.params;
      
      if (!word) {
        res.status(400).json({ error: 'Word parameter is required' });
        return;
      }

      const result = await this.ipaService.getWordPhonetics(word);
      
      if (!result) {
        res.status(404).json({ error: 'Word not found' });
        return;
      }

      res.json(result);
    } catch (error) {
      console.error('Error in getWordPhonetics:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  findSimilarPhonetics = async (req: Request, res: Response): Promise<void> => {
    try {
      const { phonetic } = req.params;
      
      if (!phonetic) {
        res.status(400).json({ error: 'Phonetic parameter is required' });
        return;
      }

      const similarWords = await this.ipaService.findSimilarPhonetics(phonetic);
      res.json({ similarWords });
    } catch (error) {
      console.error('Error in findSimilarPhonetics:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
} 