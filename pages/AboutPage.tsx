import React from 'react';
import AdBanner from '../components/AdBanner';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-dark text-center mb-8">About UtilityBox</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
                <img 
                    src="https://picsum.photos/seed/sumit/250/250" 
                    alt="Sumit Kumar" 
                    className="rounded-full h-48 w-48 object-cover shadow-lg border-4 border-primary"
                />
            </div>
            <div className="md:col-span-2 space-y-4 text-gray-700 text-lg">
                <p>
                    Hi, I'm <span className="font-bold text-primary">Sumit Kumar</span>, the creator of UtilityBox. With a passion for digital marketing and web development, I saw a need for accessible, high-quality SEO and content tools that empower creators and businesses of all sizes.
                </p>
                <p>
                    UtilityBox was born from this vision. My goal is to provide a comprehensive suite of tools that are not only powerful but also intuitive and easy to use. Whether you're a seasoned marketer, a blogger just starting out, or a small business owner looking to improve your online presence, UtilityBox is here to help you succeed.
                </p>
            </div>
        </div>
        
        <div className="my-10">
            <AdBanner
                adKey="12b5c70be37524ca621454f728dc6df7"
                format="iframe"
                height={60}
                width={468}
            />
        </div>

        <div className="mt-12 text-center space-y-4">
             <h2 className="text-3xl font-bold text-dark">Our Mission</h2>
             <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Our mission is to democratize content and SEO analysis. We believe that everyone should have access to the insights they need to create high-performing content that resonates with their audience and ranks well in search engines. We are committed to continuous improvement, adding new tools and features based on user feedback and the ever-evolving digital landscape.
             </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;