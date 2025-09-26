import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const SerpSimulatorDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="SERP Simulator"
      toolPath="/tools/serp-simulator"
      description={
        <p>
          The SERP (Search Engine Results Page) Simulator allows you to preview how your webpage will appear in Google's search results. It provides a live preview of your title tag, URL, and meta description, helping you optimize them for maximum visibility and click-through rate (CTR) before you even publish.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Fill in the Fields:</strong> Enter your desired Title, URL, and Meta Description into the corresponding input fields.</li>
          <li><strong>View the Live Preview:</strong> As you type, the simulator on the right will update in real-time to show you exactly how your snippet will look.</li>
          <li><strong>Check Character Counts:</strong> The tool displays character counts for your title and description, with color-coded indicators to help you stay within the recommended limits.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Stay Within Limits:</strong> Keep titles under 60 characters and meta descriptions under 160 characters to avoid them being truncated in search results.</li>
          <li><strong>Include Your Primary Keyword:</strong> Place your main keyword in both the title and meta description, preferably near the beginning of the title.</li>
          <li><strong>Write a Compelling Meta Description:</strong> Your meta description is your ad copy. Make it compelling and include a call-to-action to encourage users to click.</li>
        </ul>
      }
    />
  );
};

export default SerpSimulatorDetails;
