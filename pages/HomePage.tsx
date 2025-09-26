import React from 'react';
import ToolCard from '../components/ToolCard';
import { TOOLS } from '../constants/tools';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">
          Supercharge Your Content Strategy
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          A comprehensive suite of SEO & Content Analysis Tools. Get the insights you need to rank higher, engage readers, and grow your audience.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-dark mb-8">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool) => (
            <ToolCard
              key={tool.path}
              path={tool.path}
              detailsPath={tool.detailsPath}
              icon={tool.icon}
              title={tool.name}
              description={tool.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
