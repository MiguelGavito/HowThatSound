import React from 'react';

interface PhonemeDisplayProps {
    pronunciation: string;
    similarWords: string[];
}

const PhonemeDisplay: React.FC<PhonemeDisplayProps> = ({ pronunciation, similarWords }) => {
    return (
        <div>
            <h2>Pronunciation</h2>
            <p>{pronunciation}</p>
            <h3>Similar Words</h3>
            <ul>
                {similarWords.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
};

export default PhonemeDisplay;