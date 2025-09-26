import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderToolProps {
  title: string;
}

const PlaceholderTool: React.FC<PlaceholderToolProps> = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-6">
          <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-dark mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">
          This tool is currently under development and will be available soon. We're working hard to bring you the best experience!
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 transition-colors"
        >
          &larr; Back to All Tools
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderTool;