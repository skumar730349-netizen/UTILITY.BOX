import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const ReadabilityScoreCheckerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Readability Score Checker"
      toolPath="/tools/readability-checker"
      description={
        <p>
          The Readability Score Checker helps you make your writing easy to understand for a broad audience. It uses the Flesch-Kincaid Grade Level formula to assess the complexity of your text. Clear, accessible content leads to better user engagement, lower bounce rates, and can even positively impact your SEO.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Paste Your Text:</strong> Enter the content you want to analyze into the text area.</li>
          <li><strong>Click 'Check Readability':</strong> The tool will calculate the grade level and analyze the writing style.</li>
          <li><strong>Review the Analysis:</strong> You'll receive a Flesch-Kincaid Grade Level, an analysis of your text's complexity, and concrete suggestions for improvement.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Target an 8th Grade Level:</strong> For most general web content, aiming for an 8th-grade reading level is a good standard to ensure broad accessibility.</li>
          <li><strong>Use Shorter Sentences and Paragraphs:</strong> Break up long, complex sentences. Avoid large walls of text.</li>
          <li><strong>Choose Simpler Words:</strong> Replace jargon and complex words with simpler alternatives whenever possible without sacrificing meaning.</li>
        </ul>
      }
    />
  );
};

export default ReadabilityScoreCheckerDetails;
