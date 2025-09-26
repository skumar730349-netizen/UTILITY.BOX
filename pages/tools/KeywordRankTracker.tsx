import React, { useState } from 'react';
import { analyzeKeywordRankPotential } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface Result {
  rankPotentialScore: number;
  analysis: string;
  suggestions: string[];
}

const KeywordRankTracker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Keyword Rank Tracker',
        query: `${keyword} @ ${url}`,
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !keyword.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await analyzeKeywordRankPotential(url, keyword);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to analyze rank potential. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClear = () => {
    setUrl('');
    setKeyword('');
    setResult(null);
    setError(null);
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
    if (score >= 40) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
    return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Keyword Rank Potential</h1>
                    <p className="text-gray-600 dark:text-gray-400">Analyze a URL's potential to rank for a specific keyword. Note: This is a simulation, not a live rank tracker.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Keyword Rank Tracker" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                        disabled={loading}
                        required
                    />
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Enter Keyword"
                        className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                        disabled={loading}
                        required
                    />
                </div>
                 <div className="flex flex-col sm:flex-row gap-2">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        disabled={loading}
                    >
                        {loading ? 'Analyzing...' : 'Analyze Potential'}
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="w-full sm:w-auto px-8 py-3 bg-gray-200 dark:bg-gray-600 text-dark dark:text-light font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        disabled={loading}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>

        {error && <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md" role="alert">{error}</div>}
        
        {result && (
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                <div className="text-center mb-6">
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rank Potential Score</h2>
                    <p className={`mt-1 text-6xl font-extrabold inline-block px-6 py-3 rounded-lg ${getScoreColor(result.rankPotentialScore)}`}>
                        {result.rankPotentialScore}<span className="text-3xl font-medium">/100</span>
                    </p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Analysis</h3>
                        <p className="text-gray-700 dark:text-gray-300">{result.analysis}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Suggestions for Improvement</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {result.suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default KeywordRankTracker;