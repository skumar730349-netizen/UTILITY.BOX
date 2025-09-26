import React, { useState } from 'react';
import ShareButton from '../../components/ShareButton';

const XmlSitemapGenerator: React.FC = () => {
  const [urls, setUrls] = useState('');
  const [sitemap, setSitemap] = useState('');

  const generateSitemap = () => {
    const urlArray = urls.split('\n').filter(url => url.trim() !== '');
    if (urlArray.length === 0) {
        setSitemap('');
        return;
    }

    const today = new Date().toISOString().split('T')[0];

    const urlset = urlArray.map(url => 
`  <url>
    <loc>${url.trim()}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.80</priority>
  </url>`
    ).join('\n');

    const xmlString = 
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

    setSitemap(xmlString);
  };
  
  const handleCopy = () => {
    if(sitemap) {
        navigator.clipboard.writeText(sitemap);
    }
  }
  
  const handleClear = () => {
    setUrls('');
    setSitemap('');
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">XML Sitemap Generator</h1>
                    <p className="text-gray-600 dark:text-gray-400">Enter a list of URLs (one per line) to generate an XML sitemap.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="XML Sitemap Generator" />
                </div>
            </div>

             <div className="space-y-4">
                <textarea
                    value={urls}
                    onChange={(e) => setUrls(e.target.value)}
                    placeholder="https://example.com/page1&#10;https://example.com/page2&#10;https://example.com/page3"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-dark dark:text-light"
                    rows={8}
                />
                <div className="flex flex-col sm:flex-row gap-2">
                    <button
                        type="button"
                        onClick={generateSitemap}
                        className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800"
                    >
                        Generate Sitemap
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="w-full sm:w-auto px-8 py-3 bg-gray-200 dark:bg-gray-600 text-dark dark:text-light font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
        
        {sitemap && (
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-dark dark:text-light">Generated Sitemap</h2>
                     <button onClick={handleCopy} className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-emerald-600">Copy to Clipboard</button>
                 </div>
                <pre className="p-4 bg-gray-900 text-white rounded-md text-sm overflow-x-auto">
                    <code>
                        {sitemap}
                    </code>
                </pre>
            </div>
        )}
    </div>
  );
};

export default XmlSitemapGenerator;