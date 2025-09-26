import React, { useState } from 'react';
import { analyzeKeywordDifficulty } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface Result {
  keyword: string;
  difficultyScore: number;
  analysis: string;
  searchIntent: string;
  relatedKeywords: string[];
}

const KeywordDifficultyChecker: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Keyword Difficulty Checker',
        query: keyword,
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await analyzeKeywordDifficulty(keyword);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to analyze keyword. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClear = () => {
    setKeyword('');
    setResult(null);
    setError(null);
  };

  const getDifficultyColor = (score: number) => {
    if (score <= 30) return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
    if (score <= 60) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
    return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Keyword Difficulty Checker</h1>
                    <p className="text-gray-600 dark:text-gray-400">Enter a keyword to analyze its SEO ranking difficulty.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Keyword Difficulty Checker" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="e.g., 'best react frameworks'"
                    className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Analyzing...' : 'Analyze'}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Keyword</h3>
                        <p className="mt-1 text-2xl font-semibold text-dark dark:text-light">{result.keyword}</p>
                    </div>
                     <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Search Intent</h3>
                        <p className="mt-1 text-2xl font-semibold text-dark dark:text-light">{result.searchIntent}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Difficulty Score</h3>
                        <p className={`mt-1 text-4xl font-bold inline-block px-4 py-2 rounded-lg ${getDifficultyColor(result.difficultyScore)}`}>
                            {result.difficultyScore}
                            <span className="text-xl font-medium">/100</span>
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Analysis</h3>
                    <p className="text-gray-700 dark:text-gray-300">{result.analysis}</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Related Keywords</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {result.relatedKeywords.map((kw, index) => <li key={index}>{kw}</li>)}
                    </ul>
                </div>
            </div>
        )}
    </div>
  );
};

export default KeywordDifficultyChecker;