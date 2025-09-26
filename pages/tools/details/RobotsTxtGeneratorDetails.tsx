import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const RobotsTxtGeneratorDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Robots.txt Generator"
      toolPath="/tools/robots-txt-generator"
      description={
        <p>
          A `robots.txt` file is a powerful tool that tells search engine crawlers which pages or files on your site they can or cannot request. Our Robots.txt Generator provides a simple interface to create this file, helping you prevent crawlers from accessing private directories, duplicate content, or script files, which can improve your site's crawl efficiency.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Set Default Rules:</strong> In the "Default Rules" section, add any paths you want to block for all user-agents (bots). For example, `/admin/` or `/cart/`.</li>
          <li><strong>Add Sitemap URL:</strong> Optionally, add the full URL to your XML sitemap. This is highly recommended as it helps search engines find your sitemap easily.</li>
          <li><strong>Copy the Generated Text:</strong> The tool generates the `robots.txt` content in real-time. Copy the text, save it in a file named `robots.txt`, and upload it to the root directory of your domain.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Use `Disallow` with caution:</strong> Be careful not to block important CSS or JavaScript files, as this can prevent Google from properly rendering and understanding your pages.</li>
          <li><strong>`robots.txt` is not for security:</strong> The file is a directive, not a mandate. Malicious bots can ignore it. Never use it to hide private user information.</li>
          <li><strong>Test Your File:</strong> Use Google Search Console's robots.txt Tester to ensure your file is working as intended and not blocking important content.</li>
        </ul>
      }
    />
  );
};

export default RobotsTxtGeneratorDetails;
