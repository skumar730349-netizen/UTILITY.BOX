import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const HeadlineAnalyzerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Headline Analyzer"
      toolPath="/tools/headline-analyzer"
      description={
        <p>
          The Headline Analyzer helps you craft irresistible headlines that capture attention and drive clicks. Your headline is the first, and sometimes only, impression you make on a potential reader. This tool scores your headline based on factors like emotional impact, clarity, and length, providing actionable feedback to make it more compelling.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter Your Headline:</strong> Type or paste your headline into the text area.</li>
          <li><strong>Click 'Analyze Headline':</strong> The tool will evaluate your headline's effectiveness.</li>
          <li><strong>Review Your Score and Suggestions:</strong> You'll receive an overall score out of 100, a detailed analysis of its strengths and weaknesses, and three alternative suggestions to inspire you.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Use Numbers and Data:</strong> Headlines with numbers (e.g., "7 Ways to...") are often more clickable.</li>
          <li><strong>Evoke Emotion:</strong> Use powerful, emotional words to create a connection with the reader.</li>
          <li><strong>Keep it Clear and Concise:</strong> Your headline should clearly communicate what the content is about. Aim for a length of 50-60 characters for optimal display in search results.</li>
        </ul>
      }
    />
  );
};

export default HeadlineAnalyzerDetails;
