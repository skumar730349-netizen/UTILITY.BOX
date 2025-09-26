
import React from 'react';

const DisclaimerPage: React.FC = () => {
    return (
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 prose prose-lg max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-dark">Disclaimer</h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2>General Information</h2>
            <p>
                The information provided by UtilityBox ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
            
            <h2>Professional Disclaimer</h2>
            <p>
                The Site cannot and does not contain professional SEO or marketing advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional SEO or marketing advice. The use or reliance of any information contained on this site is solely at your own risk.
            </p>

            <h2>External Links Disclaimer</h2>
            <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
            
            <h2>Errors and Omissions Disclaimer</h2>
            <p>
                While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, UtilityBox is not responsible for any errors or omissions or for the results obtained from the use of this information.
            </p>
        </div>
    );
};

export default DisclaimerPage;
