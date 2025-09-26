import React from 'react';
import ToolDetailsLayout from './ToolDetailsLayout';

const WordCounterDetails: React.FC = () => {
  return (
    <ToolDetailsLayout
      title="Word Counter"
      toolPath="/tools/word-counter"
      description={
        <p>
          The Word Counter is a simple but indispensable tool for writers, students, and content creators. It provides an instant, real-time count of the words, characters, and paragraphs in a piece of text. Whether you're writing a blog post with a specific word count goal, a tweet that needs to be concise, or a meta description that must fit within a character limit, this tool has you covered.
        </p>
      }
      howToUse={
        <ol>
          <li><strong>Start Typing or Paste Text:</strong> Simply begin typing directly into the text area or paste your content from another source.</li>
          <li><strong>View Real-Time Stats:</strong> The counters for words, characters, and paragraphs will update instantly as you type or edit your text.</li>
        </ol>
      }
      tips={
        <ul>
          <li><strong>Check for Content Depth:</strong> While word count isn't a direct ranking factor, longer, more in-depth content often ranks better. Use the word counter to see if your articles meet the average length for top-ranking content on your topic.</li>
          <li><strong>Optimize for Readability:</strong> Use the paragraph counter to ensure you are breaking up your text into short, digestible paragraphs to improve on-page readability.</li>
          <li><strong>Meet Ad Copy Limits:</strong> Use the character counter to ensure your ad copy, social media posts, and meta tags adhere to strict character limits.</li>
        </ul>
      }
    />
  );
};

export default WordCounterDetails;
