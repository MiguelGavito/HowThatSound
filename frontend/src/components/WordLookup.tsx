import { useState } from 'react';
import { getWordPhonetics, getSimilarPhonetics } from '../services/api';

interface PhoneticResult {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
}

export const WordLookup = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState<PhoneticResult | null>(null);
  const [similarWords, setSimilarWords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!word.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const phoneticResult = await getWordPhonetics(word);
      setResult(phoneticResult);
      
      if (phoneticResult.phonetic) {
        const similar = await getSimilarPhonetics(phoneticResult.phonetic);
        setSimilarWords(similar);
      }
    } catch (err) {
      setError('Error looking up word. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const playAudio = (audioUrl?: string) => {
    if (!audioUrl) return;
    new Audio(audioUrl).play();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a word..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Look up'}
          </button>
        </div>
      </form>

      {error && (
        <div className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {result && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{result.word}</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Phonetics:</h3>
            {result.phonetics.map((phonetic, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <span className="font-mono">{phonetic.text}</span>
                {phonetic.audio && (
                  <button
                    onClick={() => playAudio(phonetic.audio)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    🔊 Play
                  </button>
                )}
              </div>
            ))}
          </div>

          {similarWords.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Similar Words:</h3>
              <div className="flex flex-wrap gap-2">
                {similarWords.map((word, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 