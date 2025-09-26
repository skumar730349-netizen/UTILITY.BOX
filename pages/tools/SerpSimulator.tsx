import React, { useState } from 'react';
import ShareButton from '../../components/ShareButton';

type View = 'desktop' | 'mobile';

const SerpSimulator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [view, setView] = useState<View>('desktop');

  const titleLimit = 60;
  const descriptionLimit = 160;

  const getCharColor = (current: number, limit: number) => {
    if (current > limit) return 'text-red-500';
    if (current > limit * 0.9) return 'text-yellow-500';
    return 'text-green-500';
  };

  const handleClear = () => {
    setTitle('');
    setUrl('');
    setDescription('');
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">SERP Simulator</h1>
                    <p className="text-gray-600 dark:text-gray-400">Preview how your title and meta description will appear in Google search results.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="SERP Simulator" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                        />
                         <p className={`text-sm mt-1 text-right font-medium ${getCharColor(title.length, titleLimit)}`}>{title.length} / {titleLimit}</p>
                    </div>
                     <div>
                        <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL</label>
                        <input
                            type="text"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                             placeholder="https://example.com/page"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Meta Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                            rows={4}
                        />
                        <p className={`text-sm mt-1 text-right font-medium ${getCharColor(description.length, descriptionLimit)}`}>{description.length} / {descriptionLimit}</p>
                    </div>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="w-full px-8 py-3 bg-gray-200 dark:bg-gray-600 text-dark dark:text-light font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                    >
                        Clear Fields
                    </button>
                </div>

                <div className="mt-8 md:mt-0">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold text-dark dark:text-light">Live Preview</h2>
                        <div className="flex gap-1 p-1 bg-gray-200 dark:bg-gray-700 rounded-md">
                            <button onClick={() => setView('desktop')} className={`px-2 py-1 text-sm rounded ${view === 'desktop' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}>Desktop</button>
                            <button onClick={() => setView('mobile')} className={`px-2 py-1 text-sm rounded ${view === 'mobile' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}>Mobile</button>
                        </div>
                    </div>
                    <div className={`p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50 h-full ${view === 'mobile' ? 'max-w-sm mx-auto' : ''}`}>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{url || 'https://example.com/your-page'}</p>
                        <h3 className="text-xl text-blue-800 dark:text-blue-400 hover:underline cursor-pointer truncate">{title || 'Your Example Title Tag'}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {description || 'This is an example of what your meta description will look like in the search engine results page. It should be compelling and concise.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SerpSimulator;