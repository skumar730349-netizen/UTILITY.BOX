import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const PlagiarismCheckerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Plagiarism Checker"
      toolPath="/tools/plagiarism-checker"
      description={
        <p>
          The Plagiarism Checker helps you ensure the originality of your content. Duplicate content can severely harm your SEO rankings and credibility. This tool provides a simulated plagiarism scan, comparing your text against online sources to identify potential instances of non-original content and giving you an estimated originality score.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Paste Your Text:</strong> Copy and paste the content you want to check into the text area (minimum 10 words).</li>
          <li><strong>Click 'Check Originality':</strong> The tool will perform a simulated search for similar content online.</li>
          <li><strong>Review the Results:</strong> You will see an originality score and a list of any potential sources found online that contain similar text, along with a similarity percentage.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Aim for 95%+ Originality:</strong> While common phrases may be flagged, strive for a very high originality score to be safe.</li>
          <li><strong>Properly Cite Sources:</strong> If you intentionally use text from another source, make sure to quote it and provide proper attribution to avoid plagiarism.</li>
          <li><strong>Rewrite Flagged Sentences:</strong> For any unintentionally matched content, rewrite the sentences in your own words to make them unique.</li>
        </ul>
      }
    />
  );
};

export default PlagiarismCheckerDetails;
