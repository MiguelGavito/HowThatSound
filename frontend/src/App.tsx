import { WordLookup } from './components/WordLookup';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Word Phonetics Lookup
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <WordLookup />
      </main>
    </div>
  );
}

export default App; 