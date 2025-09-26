import React, { useState } from 'react';
import { checkPlagiarism } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface Source {
  url: string;
  similarity: number;
}
interface Result {
  originalityScore: number;
  analysis: string;
  potentialSources: Source[];
}

const PlagiarismChecker: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Plagiarism Checker',
        query: text.substring(0, 50) + '...', // Store a snippet
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || text.trim().split(/\s+/).length < 10) {
        setError("Please enter at least 10 words to check for plagiarism.");
        return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await checkPlagiarism(text);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to check for plagiarism. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClear = () => {
    setText('');
    setResult(null);
    setError(null);
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
    return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Plagiarism Checker</h1>
                    <p className="text-gray-600 dark:text-gray-400">Paste your content to check for originality against online sources.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Plagiarism Checker" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste your text here (minimum 10 words)..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                    rows={8}
                    disabled={loading}
                />
                <div className="flex flex-col sm:flex-row gap-2">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        disabled={loading}
                    >
                        {loading ? 'Checking...' : 'Check Originality'}
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
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Originality Score</h2>
                    <p className={`mt-1 text-6xl font-extrabold inline-block px-6 py-3 rounded-lg ${getScoreColor(result.originalityScore)}`}>
                        {result.originalityScore}%
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Analysis</h3>
                        <p className="text-gray-700 dark:text-gray-300">{result.analysis}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">Potential Sources Found</h3>
                        {result.potentialSources && result.potentialSources.length > 0 ? (
                            <ul className="space-y-3">
                                {result.potentialSources.map((source, index) => (
                                    <li key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md border dark:border-gray-600">
                                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium break-all">{source.url}</a>
                                        <p className="text-sm text-red-600 font-semibold">{source.similarity}% Similarity</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                             <p className="text-gray-700 dark:text-gray-300 p-3 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 rounded-md">No potential matches found. The content appears to be original.</p>
                        )}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default PlagiarismChecker;