import React, { useState } from 'react';
import { generateContentBrief } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';
import AdBanner from '../../components/AdBanner';

interface ArticleStructure {
  heading: string;
  talkingPoints: string[];
}

interface Result {
  topic: string;
  targetAudience: string;

  primaryKeyword: string;
  secondaryKeywords: string[];
  suggestedHeadlines: string[];
  estimatedWordCount: string;
  articleStructure: ArticleStructure[];
  questionsToAnswer: string[];
  peopleAlsoAsk: string[];
}

const ContentBriefGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      reports.unshift({
        id: Date.now(),
        toolName: 'Content Brief Generator',
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
      const response = await generateContentBrief(topic);
      const parsedResult = JSON.parse(response.text);
      setResult(parsedResult);
      saveReport(parsedResult);
    } catch (err) {
      setError('Failed to generate content brief. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setTopic('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Content Brief Generator</h1>
                    <p className="text-gray-600 dark:text-gray-400">Enter a topic to generate a detailed content brief for your writers.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Content Brief Generator" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., 'The Future of AI in Marketing'"
                    className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Generate Brief'}
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
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-dark dark:text-light">Content Brief for: <span className="text-primary">{result.topic}</span></h2>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                    <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">Core Details</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li><strong>Target Audience:</strong> {result.targetAudience}</li>
                        <li><strong>Primary Keyword:</strong> {result.primaryKeyword}</li>
                        <li><strong>Secondary Keywords:</strong> {result.secondaryKeywords.join(', ')}</li>
                        <li><strong>Estimated Word Count:</strong> {result.estimatedWordCount}</li>
                    </ul>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                    <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">Suggested Headlines</h3>
                    <ul className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {result.suggestedHeadlines.map((headline, index) => <li key={index}>{headline}</li>)}
                    </ul>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                    <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">Article Structure</h3>
                    {result.articleStructure.map((section, index) => (
                        <div key={index} className="mb-3 pl-4 border-l-4 border-primary">
                            <h4 className="font-semibold text-md text-dark dark:text-light">{section.heading}</h4>
                            <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                                {section.talkingPoints.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="my-4">
                    <AdBanner
                        adKey="12b5c70be37524ca621454f728dc6df7"
                        format="iframe"
                        height={60}
                        width={468}
                    />
                </div>

                 <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                    <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">People Also Ask</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {result.peopleAlsoAsk.map((question, index) => <li key={index}>{question}</li>)}
                    </ul>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                    <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">Key Questions to Answer</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {result.questionsToAnswer.map((question, index) => <li key={index}>{question}</li>)}
                    </ul>
                </div>
            </div>
        )}
    </div>
  );
};

export default ContentBriefGenerator;