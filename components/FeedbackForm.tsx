import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackType, setFeedbackType] = useState('General Feedback');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
        alert("Please enter your feedback message.");
        return;
    }
    
    const feedbackData = {
      name,
      email,
      feedbackType,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log('Feedback Submitted:', feedbackData);
    
    // Reset form
    setName('');
    setEmail('');
    setFeedbackType('General Feedback');
    setMessage('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-2xl font-bold text-green-800">Thank you!</h3>
        <p className="text-green-700 mt-2">Your feedback has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name (Optional)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Sumit Kumar"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
      </div>
      <div>
        <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700">
          Feedback Type
        </label>
        <select
            id="feedbackType"
            name="feedbackType"
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        >
            <option>General Feedback</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Tool Suggestion</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          placeholder="Your feedback is valuable to us..."
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
        >
          Submit Feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
