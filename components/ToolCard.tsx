import React from 'react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  detailsPath: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, path, detailsPath }) => {
  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 hover:border-primary transform hover:-translate-y-1 flex flex-col">
        <Link to={path} className="block group flex-grow">
            <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 text-primary bg-blue-100 rounded-full p-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-dark">{title}</h3>
            </div>
            <p className="mt-4 text-gray-600 text-sm flex-grow">
            {description}
            </p>
        </Link>
        <div className="mt-4 text-sm font-semibold flex items-center justify-between">
            <Link to={detailsPath} className="text-gray-600 hover:text-primary transition-colors">
                Learn More
            </Link>
            <Link to={path} className="text-accent group-hover:text-primary">
                 Use Tool &rarr;
            </Link>
        </div>
    </div>
  );
};

export default ToolCard;