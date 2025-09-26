import React, { useState } from 'react';
import { analyzeBrokenLinks } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface BrokenLink {
  url: string;
  reason: string;
}

const BrokenLinkChecker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<BrokenLink[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Broken Link Checker',
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
      const response = await analyzeBrokenLinks(url);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to check for broken links. Please try again.');
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

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Broken Link Checker</h1>
                    <p className="text-gray-600 dark:text-gray-400">Enter a URL to perform a predictive scan for potentially broken links.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Broken Link Checker" />
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
                    {loading ? 'Scanning...' : 'Find Broken Links'}
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
                <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">Scan Results</h2>
                {result.length > 0 ? (
                    <div className="space-y-3">
                        {result.map((link, index) => (
                            <div key={index} className="p-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-md">
                                <p className="font-semibold text-red-800 dark:text-red-300 break-all">{link.url}</p>
                                <p className="text-sm text-red-600 dark:text-red-400 mt-1">{link.reason}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-700 dark:text-gray-300 p-4 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 rounded-md">No potentially broken links were found.</p>
                )}
            </div>
        )}
    </div>
  );
};

export default BrokenLinkChecker;