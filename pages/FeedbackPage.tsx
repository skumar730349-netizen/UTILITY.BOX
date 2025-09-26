import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackPage: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-dark text-center mb-4">Submit Feedback</h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Have a suggestion, a bug to report, or a new tool idea? We'd love to hear from you. Your feedback helps us improve UtilityBox.
        </p>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedbackPage;
