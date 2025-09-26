import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const ContentBriefGeneratorDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Content Brief Generator"
      toolPath="/tools/content-brief-generator"
      description={
        <p>
          The Content Brief Generator is a powerful tool for content managers and SEOs. It automates the process of creating a detailed, SEO-focused outline for any article or blog post. By providing a clear structure, target keywords, and audience insights, it ensures your writers create content that is perfectly aligned with your strategy and optimized to rank.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter Your Topic:</strong> Input the main topic or primary keyword for your desired article.</li>
          <li><strong>Click 'Generate Brief':</strong> The AI will create a comprehensive content brief based on your topic.</li>
          <li><strong>Use the Brief:</strong> Review the generated brief, which includes the target audience, primary and secondary keywords, suggested headlines, a full article structure with headings and talking points, and key questions to answer. You can then download or copy this brief to share with your writers.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Be Specific With Your Topic:</strong> A more specific topic (e.g., "benefits of high-intensity interval training") will yield a more focused and useful brief than a broad one (e.g., "fitness").</li>
          <li><strong>Customize the Structure:</strong> Use the generated structure as a starting point. Feel free to add, remove, or reorder sections to better fit your specific angle or expertise.</li>
          <li><strong>Combine with Keyword Research:</strong> Use the suggested keywords, but also supplement them with your own research from tools like our Keyword Difficulty Checker.</li>
        </ul>
      }
    />
  );
};

export default ContentBriefGeneratorDetails;
