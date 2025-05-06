export class PronunciationService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://api.example.com/pronunciation'; // Replace with the actual API URL
    }

    async fetchPronunciation(word: string, language: string): Promise<string> {
        const response = await fetch(`${this.apiUrl}?word=${word}&language=${language}`);
        if (!response.ok) {
            throw new Error('Failed to fetch pronunciation');
        }
        const data = await response.json();
        return data.pronunciation; // Adjust based on the actual API response structure
    }

    async findSimilarWords(phoneme: string): Promise<string[]> {
        const response = await fetch(`${this.apiUrl}/similar?phoneme=${phoneme}`);
        if (!response.ok) {
            throw new Error('Failed to fetch similar words');
        }
        const data = await response.json();
        return data.similarWords; // Adjust based on the actual API response structure
    }
}