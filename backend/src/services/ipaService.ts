import axios from 'axios';

interface PhoneticResponse {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
}

interface DictionaryApiResponse {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
}

export class IpaService {
  private readonly baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  async getWordPhonetics(word: string): Promise<PhoneticResponse | null> {
    try {
      const response = await axios.get<DictionaryApiResponse[]>(`${this.baseUrl}/${word}`);
      const data = response.data[0];
      
      return {
        word: data.word,
        phonetic: data.phonetic,
        phonetics: data.phonetics
      };
    } catch (error) {
      console.error(`Error fetching phonetics for word "${word}":`, error);
      return null;
    }
  }

  async findSimilarPhonetics(phonetic: string): Promise<string[]> {
    try {
      // This is a placeholder - in a real implementation, you might want to:
      // 1. Store words and their phonetics in your database
      // 2. Implement a phonetic matching algorithm
      // 3. Use a phonetic similarity library
      return [];
    } catch (error) {
      console.error('Error finding similar phonetics:', error);
      return [];
    }
  }
} 