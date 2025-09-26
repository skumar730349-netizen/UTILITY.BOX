import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const XmlSitemapGeneratorDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="XML Sitemap Generator"
      toolPath="/tools/xml-sitemap-generator"
      description={
        <p>
          An XML sitemap is a file that lists all the important pages on your website, making it easier for search engines like Google to find and crawl them. Our XML Sitemap Generator provides a quick and easy way to create this file. Simply paste your URLs, and the tool will generate a properly formatted sitemap for you.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>List Your URLs:</strong> Paste all the URLs you want to include in your sitemap into the text area, with each URL on a new line.</li>
          <li><strong>Click 'Generate Sitemap':</strong> The tool will instantly create the XML sitemap content.</li>
          <li><strong>Copy and Upload:</strong> Copy the generated content, save it as an `sitemap.xml` file, and upload it to the root directory of your website. Finally, submit the sitemap URL to Google Search Console.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Include Only Important Pages:</strong> Your sitemap should only contain canonical URLs that you want search engines to index. Exclude pages like `noindex` pages, duplicates, or archives.</li>
          <li><strong>Keep it Updated:</strong> Whenever you add or remove pages from your site, you should update your sitemap to reflect these changes.</li>
          <li><strong>Specify Sitemap Location in robots.txt:</strong> It's a best practice to add a line to your `robots.txt` file pointing to your sitemap's location (e.g., `Sitemap: https://www.example.com/sitemap.xml`).</li>
        </ul>
      }
    />
  );
};

export default XmlSitemapGeneratorDetails;
