import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Report {
    id: number;
    toolName: string;
    query: string;
    data: any;
}

const ReportsPage: React.FC = () => {
    const [reports, setReports] = useState<Report[]>([]);
    const [groupedReports, setGroupedReports] = useState<Record<string, Report[]>>({});
    const [activeGroup, setActiveGroup] = useState<string | null>(null);

    useEffect(() => {
        const storedReports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
        setReports(storedReports);

        const groups = storedReports.reduce((acc: Record<string, Report[]>, report: Report) => {
            (acc[report.toolName] = acc[report.toolName] || []).push(report);
            return acc;
        }, {});
        setGroupedReports(groups);

        // Open the first group by default
        if (Object.keys(groups).length > 0) {
            setActiveGroup(Object.keys(groups)[0]);
        }
    }, []);

    const deleteReport = (id: number) => {
        const updatedReports = reports.filter(report => report.id !== id);
        setReports(updatedReports);
        localStorage.setItem('utilityBoxReports', JSON.stringify(updatedReports));
        window.location.reload(); // Easiest way to refilter groups
    };

    const clearAllReports = () => {
        if (window.confirm('Are you sure you want to delete all saved reports? This action cannot be undone.')) {
            setReports([]);
            localStorage.removeItem('utilityBoxReports');
            setGroupedReports({});
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-4xl font-extrabold text-dark dark:text-light">My Reports</h1>
                {reports.length > 0 && (
                    <button
                        onClick={clearAllReports}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                    >
                        Clear All Reports
                    </button>
                )}
            </div>

            {Object.keys(groupedReports).length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">You haven't generated any reports yet.</p>
                    <p className="text-gray-500 mt-2">Use our tools, and your results will be saved here automatically.</p>
                    <Link to="/" className="mt-6 inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 transition-colors">
                        Explore Tools
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {Object.entries(groupedReports).map(([toolName, reportsList]) => (
                        <div key={toolName} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                            <button
                                onClick={() => setActiveGroup(activeGroup === toolName ? null : toolName)}
                                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                                <h2 className="text-xl font-bold text-dark dark:text-light">{toolName}</h2>
                                <span className="text-gray-500 dark:text-gray-400">
                                    {reportsList.length} report(s)
                                    <svg className={`w-6 h-6 inline-block ml-2 transform transition-transform ${activeGroup === toolName ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </button>
                            {activeGroup === toolName && (
                                <div className="p-4 space-y-3">
                                    {reportsList.map(report => (
                                        <div key={report.id} className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-md">
                                            <div>
                                                <p className="font-semibold text-primary truncate" title={report.query}>{report.query}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    Generated on {new Date(report.id).toLocaleString()}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => deleteReport(report.id)}
                                                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900 rounded-full"
                                                aria-label="Delete report"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReportsPage;
