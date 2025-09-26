import React, { useState, useEffect } from 'react';
import ShareButton from '../../components/ShareButton';

const RobotsTxtGenerator: React.FC = () => {
    const defaultRules = [{ userAgent: '*', disallows: [''] }];
    const [rules, setRules] = useState(defaultRules);
    const [sitemapUrl, setSitemapUrl] = useState('');
    const [robotsTxt, setRobotsTxt] = useState('');

    useEffect(() => {
        let content = '';
        rules.forEach(rule => {
            content += `User-agent: ${rule.userAgent}\n`;
            rule.disallows.forEach(path => {
                if (path) {
                    content += `Disallow: ${path}\n`;
                }
            });
            content += '\n';
        });

        if (sitemapUrl) {
            content += `Sitemap: ${sitemapUrl}\n`;
        }

        setRobotsTxt(content.trim());
    }, [rules, sitemapUrl]);

    const handleRuleChange = (index: number, field: string, value: string) => {
        const newRules = [...rules];
        (newRules[index] as any)[field] = value;
        setRules(newRules);
    };

    const handleDisallowChange = (ruleIndex: number, disallowIndex: number, value: string) => {
        const newRules = [...rules];
        newRules[ruleIndex].disallows[disallowIndex] = value;
        setRules(newRules);
    };

    const addDisallow = (ruleIndex: number) => {
        const newRules = [...rules];
        newRules[ruleIndex].disallows.push('');
        setRules(newRules);
    };

    const handleCopy = () => {
        if (robotsTxt) {
            navigator.clipboard.writeText(robotsTxt);
        }
    };
    
    const handleClear = () => {
        setRules(defaultRules);
        setSitemapUrl('');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="text-center sm:text-left w-full">
                        <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Robots.txt Generator</h1>
                        <p className="text-gray-600 dark:text-gray-400">Easily create a robots.txt file to guide search engine crawlers.</p>
                    </div>
                    <div className="flex-shrink-0 w-full sm:w-auto">
                        <ShareButton toolName="Robots.txt Generator" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="p-4 border dark:border-gray-700 rounded-md">
                            <h3 className="font-semibold mb-2 text-dark dark:text-light">Default Rules (All Bots)</h3>
                             {rules[0].disallows.map((disallow, dIndex) => (
                                <div key={dIndex} className="flex gap-2 mb-2">
                                     <input
                                        type="text"
                                        value={disallow}
                                        onChange={e => handleDisallowChange(0, dIndex, e.target.value)}
                                        placeholder="/private/"
                                        className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-dark dark:text-light"
                                    />
                                </div>
                            ))}
                            <button onClick={() => addDisallow(0)} className="text-sm text-primary hover:underline">+ Add Disallow Path</button>
                        </div>
                         <div>
                            <label htmlFor="sitemapUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sitemap URL (Optional)</label>
                            <input
                                type="url"
                                id="sitemapUrl"
                                value={sitemapUrl}
                                onChange={e => setSitemapUrl(e.target.value)}
                                placeholder="https://example.com/sitemap.xml"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-dark dark:text-light"
                            />
                        </div>
                         <button
                            type="button"
                            onClick={handleClear}
                            className="w-full px-8 py-3 bg-gray-200 dark:bg-gray-600 text-dark dark:text-light font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                            Clear Rules
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold text-dark dark:text-light">Generated robots.txt</h2>
                             <button onClick={handleCopy} className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-emerald-600">Copy</button>
                         </div>
                        <pre className="p-4 bg-gray-900 text-white rounded-md text-sm overflow-x-auto h-64">
                            <code>
                                {robotsTxt}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RobotsTxtGenerator;