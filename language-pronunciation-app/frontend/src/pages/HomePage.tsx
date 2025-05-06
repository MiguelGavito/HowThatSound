import React, { useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import WordInput from '../components/WordInput';
import PhonemeDisplay from '../components/PhonemeDisplay';

const HomePage: React.FC = () => {
    const [word, setWord] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [pronunciation, setPronunciation] = useState('');

    const handleWordChange = (newWord: string) => {
        setWord(newWord);
        // Fetch pronunciation and similar words here
    };

    const handleSourceLanguageChange = (language: string) => {
        setSourceLanguage(language);
    };

    const handleTargetLanguageChange = (language: string) => {
        setTargetLanguage(language);
    };

    return (
        <div>
            <h1>Language Pronunciation App</h1>
            <LanguageSelector 
                onSourceLanguageChange={handleSourceLanguageChange} 
                onTargetLanguageChange={handleTargetLanguageChange} 
            />
            <WordInput 
                word={word} 
                onWordChange={handleWordChange} 
            />
            <PhonemeDisplay 
                pronunciation={pronunciation} 
            />
        </div>
    );
};

export default HomePage;