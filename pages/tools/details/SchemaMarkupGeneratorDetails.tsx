import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const SchemaMarkupGeneratorDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Schema Markup Generator"
      toolPath="/tools/schema-markup-generator"
      description={
        <p>
          Schema markup (or structured data) is a code vocabulary you can add to your website's HTML to help search engines understand your content more effectively. Our Schema Markup Generator helps you create this code in the recommended JSON-LD format. By implementing schema, you can become eligible for rich snippets—such as star ratings, FAQs, and event info—directly in the search results, which can significantly improve your click-through rate.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Select a Schema Type:</strong> Choose the type of content you are marking up from the dropdown menu (e.g., Article, FAQPage).</li>
          <li><strong>Fill in the Form:</strong> Complete the relevant fields for your chosen schema type.</li>
          <li><strong>Generate and Copy the Schema:</strong> Click 'Generate Schema'. The tool will produce the JSON-LD script. Copy the entire script and paste it into the `&lt;head&gt;` or `&lt;body&gt;` section of your webpage's HTML.</li>
        </ol>
      }
      // FIX: Added missing 'tips' prop to satisfy the ToolDetailsLayoutProps interface.
      tips={
        <ul>
          <li><strong>Be Accurate:</strong> The information in your schema markup must accurately reflect the content on the page. Misleading structured data can lead to a penalty from Google.</li>
          <li><strong>Use the FAQPage Schema:</strong> If you have a page with a list of questions and answers, using the FAQPage schema is a great way to potentially have your Q&A's appear directly in the search results.</li>
          <li><strong>Test Your Markup:</strong> After adding the schema to your site, use Google's Rich Results Test tool to ensure it's implemented correctly and is eligible for rich results.</li>
        </ul>
      }
    />
  );
};

export default SchemaMarkupGeneratorDetails;
