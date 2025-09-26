import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const BacklinkCheckerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Backlink Checker"
      toolPath="/tools/backlink-checker"
      description={
        <p>
          The Backlink Checker provides a high-level, simulated analysis of any domain's backlink profile. Backlinks are a crucial ranking factor, and this tool gives you a quick snapshot of a site's authority based on estimated metrics like Domain Authority (DA), total backlink count, and referring domains. It also lists plausible-looking examples of top backlinks.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter a Domain:</strong> Type the domain you want to analyze (e.g., "example.com").</li>
          <li><strong>Click 'Check Backlinks':</strong> The tool will generate a simulated backlink profile report.</li>
          <li><strong>Review the Metrics:</strong> The report will show the estimated Domain Authority, backlink count, number of referring domains, and a table of sample backlinks.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Benchmark Against Competitors:</strong> Analyze your top competitors to understand the backlink profile you need to aim for.</li>
          <li><strong>Focus on Referring Domains:</strong> The number of unique websites linking to you (referring domains) is often a more important metric than the total number of backlinks.</li>
          <li><strong>Quality Over Quantity:</strong> A single backlink from a high-authority, relevant website is more valuable than hundreds of low-quality links. The "Top Backlinks" can give you an idea of what good links look like.</li>
        </ul>
      }
    />
  );
};

export default BacklinkCheckerDetails;
