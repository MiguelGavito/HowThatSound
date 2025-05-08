import React, { useState } from 'react';
import './App.css';
import EndpointTester from './components/EndpointTester';

function App() {
  const [baseUrl, setBaseUrl] = useState('http://localhost:3001');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <h1 className="text-xl font-bold text-gray-800">API Endpoint Tester</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Base URL Configuration */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
            <div className="flex gap-4 items-center">
              <label className="font-medium">Base URL:</label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-lg"
                placeholder="http://localhost:3001"
              />
            </div>
          </div>

          {/* Endpoint Tester */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Test Endpoints</h2>
            <EndpointTester baseUrl={baseUrl} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
