import React, { useState, useMemo } from 'react';
import ShareButton from '../../components/ShareButton';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const characters = text.length;
    const paragraphs = trimmedText ? trimmedText.split(/\n+/).filter(p => p.trim() !== '').length : 0;
    return { words, characters, paragraphs };
  }, [text]);

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Word Counter</h1>
                    <p className="text-gray-600 dark:text-gray-400">Count words, characters, and paragraphs in your text instantly.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Word Counter" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">Words</div>
                    <div className="text-3xl font-bold text-primary">{stats.words}</div>
                </div>
                 <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">Characters</div>
                    <div className="text-3xl font-bold text-primary">{stats.characters}</div>
                </div>
                 <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">Paragraphs</div>
                    <div className="text-3xl font-bold text-primary">{stats.paragraphs}</div>
                </div>
            </div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing or paste your text here..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                rows={12}
                aria-label="Text input for word counter"
            />
            <button
                type="button"
                onClick={() => setText('')}
                className="mt-4 w-full sm:w-auto px-8 py-3 bg-gray-200 dark:bg-gray-600 text-dark dark:text-light font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
                Clear Text
            </button>
        </div>
    </div>
  );
};

export default WordCounter;