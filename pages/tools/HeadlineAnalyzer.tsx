import React, { useState } from 'react';
import { analyzeHeadline } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface Result {
  headline: string;
  overallScore: number;
  analysis: string;
  suggestions: string[];
}

const HeadlineAnalyzer: React.FC = () => {
  const [headline, setHeadline] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Headline Analyzer',
        query: headline,
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!headline.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await analyzeHeadline(headline);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to analyze headline. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setHeadline('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Headline Analyzer</h1>
                    <p className="text-gray-600 dark:text-gray-400">Get a score and feedback on your headline to improve click-through rates.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Headline Analyzer" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-center">
                <textarea
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="Enter your headline here..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                    rows={2}
                    disabled={loading}
                />
                <div className="flex flex-col sm:flex-row justify-center gap-2">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        disabled={loading}
                    >
                        {loading ? 'Analyzing...' : 'Analyze Headline'}
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
                <div className="text-center">
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Overall Score</h2>
                    <p className="mt-1 text-6xl font-extrabold text-primary">{result.overallScore}</p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Analysis</h3>
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{result.analysis}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Suggestions for Improvement</h3>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {result.suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default HeadlineAnalyzer;