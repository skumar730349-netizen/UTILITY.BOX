import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const ContentGapAnalysisDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Content Gap Analysis"
      toolPath="/tools/content-gap-analysis"
      description={
        <p>
          A Content Gap Analysis is the process of identifying topics and keywords that your competitors are ranking for, but you are not. Our Content Gap Analysis tool simulates this process, helping you uncover valuable content opportunities to expand your reach and capture more organic traffic from your target audience.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter Your Domain and a Competitor's:</strong> Input your domain and the domain of a direct competitor.</li>
          <li><strong>Click 'Find Gaps':</strong> The tool will perform a simulated analysis to find keywords and topics where your competitor may have content, but you do not.</li>
          <li><strong>Review the Opportunities:</strong> The tool will provide a list of keyword/topic opportunities along with a brief description for a potential content idea.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Analyze Multiple Competitors:</strong> Run the analysis against several of your top competitors to build a comprehensive list of content ideas.</li>
          <li><strong>Look for "Low-Hanging Fruit":</strong> Prioritize keywords that have high relevance to your business but lower competition.</li>
          <li><strong>Create Better Content:</strong> When you identify a gap, don't just create similar content. Aim to create something more comprehensive, up-to-date, or valuable than what your competitor has produced.</li>
        </ul>
      }
    />
  );
};

export default ContentGapAnalysisDetails;
