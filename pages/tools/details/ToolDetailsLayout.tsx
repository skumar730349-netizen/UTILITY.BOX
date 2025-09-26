import React from 'react';
import { Link } from 'react-router-dom';

interface ToolDetailsLayoutProps {
  title: string;
  description: React.ReactNode;
  howToUse: React.ReactNode;
  tips: React.ReactNode;
  toolPath: string;
}

const ToolDetailsLayout: React.FC<ToolDetailsLayoutProps> = ({ title, description, howToUse, tips, toolPath }) => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 prose prose-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-dark not-prose">{title}</h1>
      
      <Link 
          to={toolPath} 
          className="inline-block no-underline px-8 py-3 my-6 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 transition-colors"
        >
          Go to Tool &rarr;
      </Link>
      
      <section>
        <h2 className="text-3xl font-bold text-dark">What is the {title}?</h2>
        {description}
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-dark">How to Use the Tool</h2>
        {howToUse}
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-dark">Tips for Using the {title}</h2>
        {tips}
      </section>

       <Link 
          to={toolPath} 
          className="inline-block no-underline px-8 py-3 my-6 bg-secondary text-white font-semibold rounded-md shadow-sm hover:bg-emerald-600 transition-colors"
        >
          Try the Tool Now
      </Link>
    </div>
  );
};

export default ToolDetailsLayout;