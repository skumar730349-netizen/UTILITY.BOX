import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const WebsiteSpeedTestDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Website Speed Test"
      toolPath="/tools/website-speed-test"
      description={
        <p>
          Website speed is a critical factor for both user experience and SEO. A slow website can lead to high bounce rates and lower search rankings. Our Website Speed Test provides a simulated performance analysis based on common best practices, giving you an estimated score and actionable recommendations to help you improve your site's loading times.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter Your URL:</strong> Input the full URL of the webpage you want to test.</li>
          <li><strong>Click 'Test Speed':</strong> The tool will perform a simulated analysis of the page's performance.</li>
          <li><strong>Review Recommendations:</strong> You will receive a performance score from 1-100 and a list of key recommendations, such as optimizing images, reducing server response time, or leveraging browser caching.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Compress Images:</strong> This is often the quickest win. Use tools to compress your images without sacrificing too much quality before uploading them to your site.</li>
          <li><strong>Enable Caching:</strong> Leverage browser caching so that repeat visitors don't have to re-download all your assets every time they visit a new page.</li>
          <li><strong>Minimize CSS and JavaScript:</strong> Minifying your code files removes unnecessary characters, and combining files reduces the number of HTTP requests, both of which can speed up your site.</li>
        </ul>
      }
    />
  );
};

export default WebsiteSpeedTestDetails;
