import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const OnPageSeoAnalyzerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="On-Page SEO Analyzer"
      toolPath="/tools/on-page-seo-analyzer"
      description={
        <p>
          The On-Page SEO Analyzer provides a quick and comprehensive audit of any webpage's on-page SEO elements. It checks for critical factors like title tags, meta descriptions, heading structure (H1, H2s), and image alt attributes. This tool gives you an actionable report to help you optimize your pages for better search engine visibility.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter a URL:</strong> Paste the full URL of the webpage you want to analyze.</li>
          <li><strong>Click 'Analyze':</strong> The tool will fetch and evaluate the page's on-page SEO factors.</li>
          <li><strong>Review the Report:</strong> You'll receive an overall score out of 100, a summary of the analysis for each element, and a list of specific, actionable recommendations for improvement.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Aim for a High Score:</strong> While 100 isn't always possible, aim for a score of 80+ by implementing the tool's recommendations.</li>
          <li><strong>Prioritize Recommendations:</strong> Start with the most critical fixes, such as a missing H1 tag or a title that's too long, before moving on to minor tweaks.</li>
          <li><strong>Analyze Competitors:</strong> Use this tool on the top-ranking pages for your target keyword to see how they structure their content and identify best practices you can adopt.</li>
        </ul>
      }
    />
  );
};

export default OnPageSeoAnalyzerDetails;
