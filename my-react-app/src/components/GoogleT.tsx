import React, { useState } from "react";
import IconSwap from "../Icons/IconSwap";

const languages = [
  { code: "es", label: "Español" },
  { code: "en", label: "Inglés" },
  { code: "fr", label: "Francés" },
  { code: "de", label: "Alemán" },
];

const GoogleStyleTranslator: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [sourceLang, setSourceLang] = useState("es");
  const [targetLang, setTargetLang] = useState("en");

  const handleTranslate = () => {
    setOutputText(inputText.split("").reverse().join("")); // Demo : texto al reves
  };

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(outputText);
    setOutputText(inputText);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justicy-center px-4">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
        {/*Idiomas*/}
        <div className="flex jusity-between gap-4 mb-4">
          <div className="flex-1">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <button 
            onClick={handleSwap}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            title="Intercambiar"
          >
            <IconSwap />
          </button>
          <div className="flex-1">
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cuadros de texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Entrada */}
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-60 border rounded-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe aquí..."
          />

          {/* Salida */}
          <textarea
            value={outputText}
            readOnly
            className="w-full h-60 border rounded-md p-4 bg-gray-50 text-gray-700 resize-none"
            placeholder="Traducción..."
          />
        </div>

        {/* Botón traducir */}
        <div className="mt-6 text-center">
          <button
            onClick={handleTranslate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
          >
            Traducir
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleStyleTranslator;