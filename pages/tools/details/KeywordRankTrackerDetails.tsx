import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const KeywordRankTrackerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Keyword Rank Tracker"
      toolPath="/tools/keyword-rank-tracker"
      description={
        <p>
          Our Keyword Rank Tracker is a simulation tool designed to assess a webpage's potential to rank for a specific keyword. Instead of tracking live positions, it analyzes on-page factors like content relevance, keyword usage in titles and headings, and overall optimization to provide a "Rank Potential Score." This helps you diagnose and improve your pages before trying to compete in the SERPs.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter URL and Keyword:</strong> Input the full URL of your page and the target keyword you're aiming for.</li>
          <li><strong>Click 'Analyze Potential':</strong> The tool will evaluate how well the page is optimized for the keyword.</li>
          <li><strong>Review the Score and Suggestions:</strong> You'll get a score from 1-100 indicating rank potential, along with an analysis and actionable suggestions for improving your on-page SEO.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Use it as a Diagnostic Tool:</strong> Before publishing new content, run it through this tool to catch any on-page optimization issues.</li>
          <li><strong>Don't Obsess Over the Score:</strong> The score is a guide. The real value is in the actionable suggestions provided.</li>
          <li><strong>Content is King:</strong> A high score won't help if the content itself isn't high-quality. Ensure your page provides real value to the user.</li>
        </ul>
      }
    />
  );
};

export default KeywordRankTrackerDetails;
