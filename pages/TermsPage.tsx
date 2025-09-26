
import React from 'react';

const TermsPage: React.FC = () => {
    return (
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 prose prose-lg max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-dark">Terms and Conditions</h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2>Agreement to Terms</h2>
            <p>
                By using UtilityBox, you agree to be bound by these Terms and Conditions. If you do not agree, do not use the site. We reserve the right to modify these terms at any time. Your continued use of the site after such changes constitutes your acceptance of the new terms.
            </p>
            
            <h2>Intellectual Property Rights</h2>
            <p>
                The Site and its original content, features, and functionality are and will remain the exclusive property of UtilityBox and its licensors. The Site is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of UtilityBox.
            </p>

            <h2>User Representations</h2>
            <p>
                By using the Site, you represent and warrant that:
            </p>
            <ul>
                <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
            
            <h2>Prohibited Activities</h2>
            <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>

             <h2>Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
        </div>
    );
};

export default TermsPage;
