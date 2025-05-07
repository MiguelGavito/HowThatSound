import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

interface PhoneticResponse {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
}

export const getWordPhonetics = async (word: string): Promise<PhoneticResponse> => {
  const response = await axios.get(`${API_BASE_URL}/ipa/word/${word}`);
  return response.data;
};

export const getSimilarPhonetics = async (phonetic: string): Promise<string[]> => {
  const response = await axios.get(`${API_BASE_URL}/ipa/similar/${phonetic}`);
  return response.data.similarWords;
}; 