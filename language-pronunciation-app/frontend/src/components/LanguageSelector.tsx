import React from 'react';

const LanguageSelector: React.FC<{ onLanguageChange: (sourceLang: string, targetLang: string) => void }> = ({ onLanguageChange }) => {
    const [sourceLanguage, setSourceLanguage] = React.useState<string>('English');
    const [targetLanguage, setTargetLanguage] = React.useState<string>('Spanish');

    const handleSourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSourceLanguage(event.target.value);
        onLanguageChange(event.target.value, targetLanguage);
    };

    const handleTargetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTargetLanguage(event.target.value);
        onLanguageChange(sourceLanguage, event.target.value);
    };

    return (
        <div>
            <label>
                Source Language:
                <select value={sourceLanguage} onChange={handleSourceChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    {/* Add more languages as needed */}
                </select>
            </label>
            <label>
                Target Language:
                <select value={targetLanguage} onChange={handleTargetChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    {/* Add more languages as needed */}
                </select>
            </label>
        </div>
    );
};

export default LanguageSelector;