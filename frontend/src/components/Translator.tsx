import React, { useState } from 'react';

const languages = [
  { code: "es", label: "Español" },
  { code: "en", label: "Inglés" },
  { code: "fr", label: "Francés" },
];

const Translator: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [sourceLang, setSourceLang] = useState<string>("es");
  const [targetLang, setTargetLang] = useState<string>("en");

  const handleTranslate = () => {
    // Lógica de traducción (ejemplo simple)
    setOutputText(inputText.toUpperCase());
  };
  
const handleSwapLanguages = () => {
  setSourceLang(targetLang);
  setTargetLang(sourceLang);
  setInputText(outputText);
  setOutputText(inputText);
};

return (
  <div className="max-w-4xl mx-auto p-4">
    {/* Selectores de idioma */}
    <div className="flex justify-between gap-4 mb-4">
      <select
        className="p-2 border rounded-md w-full"
        value={sourceLang}
        onChange={(e) => setSourceLang(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      <select
        className="p-2 border rounded-md w-full"
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>

    {/* Intercambiar */}
    <div className="flex justify-center my-2">
      <button
        onClick={handleSwapLanguages}
        className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition-all"
        title="Intercambiar idiomas"
      >
        🔁
      </button>
    </div>

    {/* Textareas */}
    <div className="grid gap-4 md:grid-cols-2">
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Texto original</label>
        <textarea
          className="p-3 border rounded-lg resize-none h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe aquí..."
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Traducción</label>
        <textarea
          className="p-3 border rounded-lg resize-none h-40 bg-gray-100 text-gray-700"
          value={outputText}
          readOnly
          placeholder="Traducción..."
        />
      </div>
    </div>

    {/* Botón traducir */}
    <div className="flex justify-center mt-4">
      <button
        onClick={handleTranslate}
        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition-all"
      >
        Traducir
      </button>
    </div>
  </div>
);
};

export default Translator;