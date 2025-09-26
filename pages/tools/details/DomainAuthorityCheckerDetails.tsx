import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const DomainAuthorityCheckerDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Domain Authority Checker"
      toolPath="/tools/domain-authority-checker"
      description={
        <p>
          Domain Authority (DA) is a search engine ranking score developed by Moz that predicts how likely a website is to rank in search engine result pages (SERPs). Our Domain Authority Checker provides a simulated DA score from 1 to 100, giving you a quick way to gauge the overall SEO strength and ranking potential of a domain.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter a Domain:</strong> Type the domain you want to check (e.g., "example.com").</li>
          <li><strong>Click 'Check DA':</strong> The tool will generate a simulated DA score and an accompanying analysis.</li>
          <li><strong>Review the Score and Analysis:</strong> The result will show the estimated DA score and explain the factors (like backlink quality and quantity) that contribute to it.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Use it for Comparison:</strong> DA is best used as a comparative metric. Compare your DA score to your direct competitors to understand where you stand.</li>
          <li><strong>DA is Logarithmic:</strong> It's much easier to grow your score from 20 to 30 than it is from 70 to 80.</li>
          <li><strong>Focus on Building Quality Links:</strong> The best way to improve your Domain Authority over time is by acquiring high-quality backlinks from reputable and relevant websites.</li>
        </ul>
      }
    />
  );
};

export default DomainAuthorityCheckerDetails;
