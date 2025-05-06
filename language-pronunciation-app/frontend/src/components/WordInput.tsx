import React, { useState } from 'react';

const WordInput: React.FC = () => {
    const [word, setWord] = useState('');
    const [language, setLanguage] = useState('');
    const [motherTongue, setMotherTongue] = useState('');

    const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };

    const handleMotherTongueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMotherTongue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Logic to fetch pronunciation and similar words goes here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={word}
                onChange={handleWordChange}
                placeholder="Enter a word"
                required
            />
            <select value={language} onChange={handleLanguageChange} required>
                <option value="">Select Language</option>
                {/* Add language options here */}
            </select>
            <select value={motherTongue} onChange={handleMotherTongueChange} required>
                <option value="">Select Mother Tongue</option>
                {/* Add mother tongue options here */}
            </select>
            <button type="submit">Get Pronunciation</button>
        </form>
    );
};

export default WordInput;