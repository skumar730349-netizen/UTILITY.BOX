import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const EmailSubjectLineTesterDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Email Subject Line Tester"
      toolPath="/tools/email-subject-line-tester"
      description={
        <p>
          Your email subject line is the single most important factor in determining whether your email gets opened. Our Email Subject Line Tester analyzes your subject lines for open rate potential, scoring them based on factors like clarity, urgency, and emotional appeal. It provides actionable feedback and suggestions to help you craft subject lines that stand out in a crowded inbox.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter Your Subject Line:</strong> Type the subject line you want to test into the input field.</li>
          <li><strong>Click 'Test Subject':</strong> The tool will analyze your subject line's potential effectiveness.</li>
          <li><strong>Review Your Score and Suggestions:</strong> You'll receive a score from 1-100, a brief analysis of its strengths and weaknesses, and three alternative suggestions to help you improve it.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Keep it Short and Sweet:</strong> Many email clients, especially on mobile, will truncate long subject lines. Aim for 50 characters or less.</li>
          <li><strong>Create Curiosity or Urgency:</strong> Phrases like "Last chance," "24 hours left," or a compelling question can encourage opens.</li>
          <li><strong>Personalize It:</strong> When possible, including the recipient's name or other personal information in the subject line can significantly boost open rates.</li>
        </ul>
      }
    />
  );
};

export default EmailSubjectLineTesterDetails;
