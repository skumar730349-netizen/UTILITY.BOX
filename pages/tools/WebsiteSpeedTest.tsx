import React, { useState } from 'react';
import { analyzeWebsiteSpeed } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface Recommendation {
  area: string;
  suggestion: string;
}
interface Result {
  performanceScore: number;
  analysis: string;
  recommendations: Recommendation[];
}

const WebsiteSpeedTest: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Website Speed Test',
        query: url,
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await analyzeWebsiteSpeed(url);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to analyze website speed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClear = () => {
    setUrl('');
    setResult(null);
    setError(null);
  };
  
   const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
    return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Website Speed Test</h1>
                    <p className="text-gray-600 dark:text-gray-400">Get a simulated performance analysis and optimization tips for your website.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Website Speed Test" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="e.g., 'https://example.com'"
                    className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                    disabled={loading}
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Testing...' : 'Test Speed'}
                </button>
                <button
                    type="button"
                    onClick={handleClear}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-600 text-dark dark:text-light font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                    disabled={loading}
                >
                    Clear
                </button>
            </form>
        </div>

        {error && <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md" role="alert">{error}</div>}
        
        {result && (
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                <div className="text-center mb-6">
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Simulated Performance Score</h2>
                    <p className={`mt-1 text-6xl font-extrabold inline-block px-6 py-3 rounded-lg ${getScoreColor(result.performanceScore)}`}>
                        {result.performanceScore}<span className="text-3xl font-medium">/100</span>
                    </p>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Key Recommendations</h3>
                    <div className="space-y-3">
                        {result.recommendations.map((rec, index) => (
                            <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-md">
                                <h4 className="font-semibold text-primary">{rec.area}</h4>
                                <p className="text-gray-700 dark:text-gray-300">{rec.suggestion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default WebsiteSpeedTest;