import React from 'react';
import AdBanner from '../components/AdBanner';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 prose prose-lg max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-dark">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2>Introduction</h2>
            <p>
                Welcome to UtilityBox. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            
            <h2>Collection of Your Information</h2>
            <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, and email address, that you voluntarily give to us when you use the contact form.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h2>Use of Your Information</h2>
            <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
                <li>Respond to your comments, questions, and provide customer service.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            </ul>

            <div className="my-8 not-prose">
                 <AdBanner
                    adKey="12b5c70be37524ca621454f728dc6df7"
                    format="iframe"
                    height={60}
                    width={468}
                />
            </div>
            
            <h2>Security of Your Information</h2>
            <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2>Contact Us</h2>
            <p>
                If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:toolzio.in@gmail.com">toolzio.in@gmail.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicyPage;