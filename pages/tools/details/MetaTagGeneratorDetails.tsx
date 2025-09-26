import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const MetaTagGeneratorDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Meta Tag Generator"
      toolPath="/tools/meta-tag-generator"
      description={
        <p>
          The Meta Tag Generator helps you quickly create SEO-friendly title tags and meta descriptions. These elements are crucial for both search engine rankings and attracting clicks from the SERPs. This tool generates multiple options based on your topic and keywords, saving you time and inspiring creativity.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter Topic and Keywords:</strong> Provide the main topic of your page and any primary keywords you want to include.</li>
          <li><strong>Click 'Generate Tags':</strong> The tool will generate several unique combinations of titles and descriptions.</li>
          <li><strong>Choose the Best Option:</strong> Review the generated tags and select the one that best fits your content and brand voice. You can then copy and paste them into your website's HTML.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Make it Unique:</strong> Every page on your site should have a unique title and meta description to avoid duplicate content issues.</li>
          <li><strong>Front-load Keywords:</strong> Place your most important keywords at the beginning of your title tag for maximum SEO impact.</li>
          <li><strong>Think Like a User:</strong> Write descriptions that accurately describe the page content and entice the user to click, effectively acting as ad copy.</li>
        </ul>
      }
    />
  );
};

export default MetaTagGeneratorDetails;
