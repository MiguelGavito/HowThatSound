export class PronunciationController {
    constructor(private pronunciationService: PronunciationService) {}

    async getPronunciation(req: Request, res: Response): Promise<void> {
        const { word, language } = req.body;
        try {
            const pronunciation = await this.pronunciationService.fetchPronunciation(word, language);
            res.status(200).json(pronunciation);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching pronunciation' });
        }
    }

    async getSimilarWords(req: Request, res: Response): Promise<void> {
        const { phoneme } = req.body;
        try {
            const similarWords = await this.pronunciationService.findSimilarWords(phoneme);
            res.status(200).json(similarWords);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching similar words' });
        }
    }
}