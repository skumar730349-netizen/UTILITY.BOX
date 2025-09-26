
import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-dark text-center mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          We'd love to hear from you! Whether you have a question about our tools, feedback, or a partnership proposal, please reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:toolzio.in@gmail.com" className="text-primary hover:underline">toolzio.in@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4 0 .863-.27 1.66-.744 2.267l-3.42 3.42a1 1 0 01-1.414 0l-3.42-3.42A4.002 4.002 0 018.228 9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">New Delhi, India (Remote)</p>
                </div>
            </div>
             <p className="text-gray-600 pt-4 border-t border-gray-200">
                Please use the form to send us a direct message. We typically respond within 24-48 hours.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
