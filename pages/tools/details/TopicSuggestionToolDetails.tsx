import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const TopicSuggestionToolDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Topic Suggestion Tool"
      toolPath="/tools/topic-suggestion-tool"
      description={
        <p>
          The Topic Suggestion Tool is your creative partner for content brainstorming. When you're stuck for ideas, this tool can spark inspiration by generating a list of relevant and engaging topics based on a single keyword. It helps you discover new angles and build a robust content calendar.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Enter a Keyword:</strong> Type a broad topic or keyword into the input field (e.g., "email marketing").</li>
          <li><strong>Click 'Get Ideas':</strong> The tool will generate a list of creative topic suggestions.</li>
          <li><strong>Explore the Topics:</strong> Review the list of topics and their short descriptions. Use these ideas as starting points for your next blog posts, videos, or social media content.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Think Broadly:</strong> Start with a general keyword to get a wide range of ideas, then narrow your focus.</li>
          <li><strong>Combine Ideas:</strong> Don't be afraid to mix and match elements from different suggestions to create a unique topic.</li>
          <li><strong>Consider the Format:</strong> Think about how each topic suggestion could be adapted for different content formats, such as a "how-to" guide, a listicle, or an opinion piece.</li>
        </ul>
      }
    />
  );
};

export default TopicSuggestionToolDetails;
