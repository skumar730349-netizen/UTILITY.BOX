import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const BrokenLinkCheckerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Broken Link Checker"
      toolPath="/tools/broken-link-checker"
      description={
        <p>
          Broken links (links that lead to a 404 error page) create a poor user experience and can harm your SEO by wasting "crawl budget." Our Broken Link Checker performs a predictive analysis of a webpage to identify links that are likely broken. It flags suspicious URLs based on common error patterns, helping you maintain a healthy, user-friendly website.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter a URL:</strong> Paste the URL of the page you want to scan for broken links.</li>
          <li><strong>Click 'Find Broken Links':</strong> The tool will perform a predictive scan of the links on that page.</li>
          <li><strong>Review the Results:</strong> The tool will list any URLs it suspects are broken, along with a reason for the flag. You should then manually verify these links.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Regularly Scan Key Pages:</strong> Periodically check your most important pages (homepage, top blog posts, service pages) for broken links.</li>
          <li><strong>Fix or Redirect:</strong> If you find a broken link, either update it to point to the correct URL or, if the original page is gone, redirect it to the most relevant alternative page on your site.</li>
          <li><strong>Check Outbound Links Too:</strong> Don't just check your internal links. Broken outbound links to other websites also create a poor user experience.</li>
        </ul>
      }
    />
  );
};

export default BrokenLinkCheckerDetails;
