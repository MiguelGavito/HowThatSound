import React, { useState } from 'react';

interface EndpointTesterProps {
  baseUrl: string;
}

const EndpointTester: React.FC<EndpointTesterProps> = ({ baseUrl }) => {
  const [endpoint, setEndpoint] = useState('');
  const [method, setMethod] = useState('GET');
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (method !== 'GET' && requestBody) {
        options.body = requestBody;
      }

      const response = await fetch(`${baseUrl}${endpoint}`, options);
      const data = await response.json();

      setResponse({
        status: response.status,
        data: data
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            placeholder="/api/endpoint"
            className="flex-1 px-3 py-2 border rounded-lg"
          />
        </div>

        {(method === 'POST' || method === 'PUT') && (
          <textarea
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            placeholder="Request body (JSON)"
            className="w-full px-3 py-2 border rounded-lg h-32"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Testing...' : 'Test Endpoint'}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          Error: {error}
        </div>
      )}

      {response && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Response:</h3>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="mb-2">
              <span className="font-medium">Status: </span>
              <span className={response.status >= 400 ? 'text-red-600' : 'text-green-600'}>
                {response.status}
              </span>
            </div>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default EndpointTester; 