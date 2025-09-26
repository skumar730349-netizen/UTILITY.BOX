import React, { useState } from 'react';
import { analyzeContentGap } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface Opportunity {
  keyword: string;
  description: string;
}

const ContentGapAnalysis: React.FC = () => {
  const [myDomain, setMyDomain] = useState('');
  const [competitorDomain, setCompetitorDomain] = useState('');
  const [result, setResult] = useState<Opportunity[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Content Gap Analysis',
        query: `${myDomain} vs ${competitorDomain}`,
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!myDomain.trim() || !competitorDomain.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await analyzeContentGap(myDomain, competitorDomain);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to perform content gap analysis. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMyDomain('');
    setCompetitorDomain('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Content Gap Analysis</h1>
                    <p className="text-gray-600 dark:text-gray-400">Find keywords your competitors rank for that you don't.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Content Gap Analysis" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={myDomain}
                        onChange={(e) => setMyDomain(e.target.value)}
                        placeholder="Your Domain (e.g., mywebsite.com)"
                        className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                        disabled={loading}
                        required
                    />
                    <input
                        type="text"
                        value={competitorDomain}
                        onChange={(e) => setCompetitorDomain(e.target.value)}
                        placeholder="Competitor's Domain (e.g., competitor.com)"
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
                        {loading ? 'Analyzing...' : 'Find Gaps'}
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
                <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">Content Opportunities</h2>
                <div className="space-y-4">
                    {result.map((opp, index) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h3 className="font-semibold text-primary">{opp.keyword}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">{opp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  );
};

export default ContentGapAnalysis;