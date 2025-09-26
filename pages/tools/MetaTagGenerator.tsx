import React, { useState } from 'react';
import { generateMetaTags } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

interface Result {
  title: string;
  description: string;
}

const MetaTagGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [result, setResult] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Meta Tag Generator',
        query: topic,
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await generateMetaTags(topic, keywords);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to generate meta tags. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setTopic('');
    setKeywords('');
    setResult(null);
    setError(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Meta Tag Generator</h1>
                    <p className="text-gray-600 dark:text-gray-400">Generate SEO-friendly title tags and meta descriptions for your web pages.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Meta Tag Generator" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Topic</label>
                    <input
                        type="text"
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., 'Benefits of Yoga'"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                        disabled={loading}
                    />
                </div>
                <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Keywords (comma separated)</label>
                    <input
                        type="text"
                        id="keywords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="e.g., yoga, meditation, health"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                        disabled={loading}
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        disabled={loading}
                    >
                        {loading ? 'Generating...' : 'Generate Tags'}
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
                <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">Generated Meta Tags</h2>
                <div className="space-y-6">
                    {result.map((tag, index) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                            <h3 className="font-semibold text-primary">Option {index + 1}</h3>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Title:</p>
                                    <pre className="p-2 bg-white dark:bg-gray-600 rounded text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{tag.title}</pre>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Description:</p>
                                    <pre className="p-2 bg-white dark:bg-gray-600 rounded text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{tag.description}</pre>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  );
};

export default MetaTagGenerator;