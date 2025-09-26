import React, { useState } from 'react';
import { analyzeOnPageSeo } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';
import AdBanner from '../../components/AdBanner';

interface Recommendation {
  area: string;
  suggestion: string;
}

interface Analysis {
  title: string;
  metaDescription: string;
  headings: string;
  images: string;
}
interface Result {
  url: string;
  overallScore: number;
  analysis: Analysis;
  recommendations: Recommendation[];
}

const OnPageSeoAnalyzer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'On-Page SEO Analyzer',
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
      const response = await analyzeOnPageSeo(url);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to analyze URL. Please check the URL and try again.');
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
    if (score >= 80) return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50';
    return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/50';
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">On-Page SEO Analyzer</h1>
                    <p className="text-gray-600 dark:text-gray-400">Enter a URL to get a complete on-page SEO analysis and recommendations.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="On-Page SEO Analyzer" />
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
                <div className="text-center mb-8">
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Overall SEO Score for {result.url}</h2>
                    <p className={`mt-1 text-6xl font-extrabold inline-block px-6 py-3 rounded-lg ${getScoreColor(result.overallScore)}`}>
                        {result.overallScore}
                        <span className="text-3xl font-medium">/100</span>
                    </p>
                </div>

                <div className="my-8">
                    <AdBanner
                        adKey="12b5c70be37524ca621454f728dc6df7"
                        format="iframe"
                        height={60}
                        width={468}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                        <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">Analysis</h3>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                           <li><strong>Title Tag:</strong> {result.analysis.title}</li>
                           <li><strong>Meta Description:</strong> {result.analysis.metaDescription}</li>
                           <li><strong>Headings:</strong> {result.analysis.headings}</li>
                           <li><strong>Images:</strong> {result.analysis.images}</li>
                        </ul>
                    </div>
                     <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                        <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">Recommendations</h3>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                           {result.recommendations.map((rec, index) => (
                               <li key={index}><strong>{rec.area}:</strong> {rec.suggestion}</li>
                           ))}
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default OnPageSeoAnalyzer;