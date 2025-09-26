import React from 'react';
import KeywordDifficultyChecker from '../pages/tools/KeywordDifficultyChecker';
import HeadlineAnalyzer from '../pages/tools/HeadlineAnalyzer';
import ContentBriefGenerator from '../pages/tools/ContentBriefGenerator';
import OnPageSeoAnalyzer from '../pages/tools/OnPageSeoAnalyzer';
import PlagiarismChecker from '../pages/tools/PlagiarismChecker';
import ReadabilityScoreChecker from '../pages/tools/ReadabilityScoreChecker';
import TopicSuggestionTool from '../pages/tools/TopicSuggestionTool';
import SerpSimulator from '../pages/tools/SerpSimulator';
import KeywordRankTracker from '../pages/tools/KeywordRankTracker';
import BacklinkChecker from '../pages/tools/BacklinkChecker';
import MetaTagGenerator from '../pages/tools/MetaTagGenerator';
import XmlSitemapGenerator from '../pages/tools/XmlSitemapGenerator';
import RobotsTxtGenerator from '../pages/tools/RobotsTxtGenerator';
import WebsiteSpeedTest from '../pages/tools/WebsiteSpeedTest';
import DomainAuthorityChecker from '../pages/tools/DomainAuthorityChecker';
import ContentGapAnalysis from '../pages/tools/ContentGapAnalysis';
import BrokenLinkChecker from '../pages/tools/BrokenLinkChecker';
import WordCounter from '../pages/tools/WordCounter';
import SchemaMarkupGenerator from '../pages/tools/SchemaMarkupGenerator';
import EmailSubjectLineTester from '../pages/tools/EmailSubjectLineTester';

import KeywordDifficultyCheckerDetails from '../pages/tools/details/KeywordDifficultyCheckerDetails';
import HeadlineAnalyzerDetails from '../pages/tools/details/HeadlineAnalyzerDetails';
import ContentBriefGeneratorDetails from '../pages/tools/details/ContentBriefGeneratorDetails';
import OnPageSeoAnalyzerDetails from '../pages/tools/details/OnPageSeoAnalyzerDetails';
import PlagiarismCheckerDetails from '../pages/tools/details/PlagiarismCheckerDetails';
import ReadabilityScoreCheckerDetails from '../pages/tools/details/ReadabilityScoreCheckerDetails';
import TopicSuggestionToolDetails from '../pages/tools/details/TopicSuggestionToolDetails';
import SerpSimulatorDetails from '../pages/tools/details/SerpSimulatorDetails';
import KeywordRankTrackerDetails from '../pages/tools/details/KeywordRankTrackerDetails';
import BacklinkCheckerDetails from '../pages/tools/details/BacklinkCheckerDetails';
import MetaTagGeneratorDetails from '../pages/tools/details/MetaTagGeneratorDetails';
import XmlSitemapGeneratorDetails from '../pages/tools/details/XmlSitemapGeneratorDetails';
import RobotsTxtGeneratorDetails from '../pages/tools/details/RobotsTxtGeneratorDetails';
import WebsiteSpeedTestDetails from '../pages/tools/details/WebsiteSpeedTestDetails';
import DomainAuthorityCheckerDetails from '../pages/tools/details/DomainAuthorityCheckerDetails';
import ContentGapAnalysisDetails from '../pages/tools/details/ContentGapAnalysisDetails';
import BrokenLinkCheckerDetails from '../pages/tools/details/BrokenLinkCheckerDetails';
import WordCounterDetails from '../pages/tools/details/WordCounterDetails';
import SchemaMarkupGeneratorDetails from '../pages/tools/details/SchemaMarkupGeneratorDetails';
import EmailSubjectLineTesterDetails from '../pages/tools/details/EmailSubjectLineTesterDetails';

export interface Tool {
  name: string;
  description: string;
  path: string;
  detailsPath: string;
  component: React.FC;
  detailsComponent: React.FC;
  icon: React.ReactNode;
}

const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1.258a1 1 0 01-.97-1.243l1.258-7.5a1 1 0 01.97-1.243h7.51" />
    </svg>
);

const HeadlineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const BriefIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const SeoAnalyzerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
    </svg>
);

const PlagiarismIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const ReadabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-11.494v11.494l9-5.747-9-5.747zM21 6.253v11.494l-9-5.747 9-5.747z" />
    </svg>
);

const TopicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const SerpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h3m-3-11h14M9 5v-.01" />
    </svg>
);

const RankTrackerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const BacklinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

const MetaTagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const SitemapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14 0h-5m-4 0H5" />
    </svg>
);

const RobotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.162-.352a11.955 11.955 0 015.84-2.228 11.955 11.955 0 015.84 2.228l4.162.352a12.02 12.02 0 00-1.38-8.381zM12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);

const SpeedTestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AuthorityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.162-.352a11.955 11.955 0 015.84-2.228 11.955 11.955 0 015.84 2.228l4.162.352a12.02 12.02 0 00-1.38-8.381z" />
    </svg>
);

const GapAnalysisIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="10" cy="10" r="6" strokeWidth={2} />
        <circle cx="14" cy="14" r="6" strokeWidth={2} />
    </svg>
);

const BrokenLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.72" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.72-1.72" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l-8 8" />
    </svg>
);

const WordCounterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10h16V7M8 4v3m8-3v3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14h6" />
    </svg>
);

const SchemaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20.5l4-17" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16 11a5 5 0 11-10 0 5 5 0 0110 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


export const TOOLS: Tool[] = [
  {
    name: 'Keyword Difficulty Checker',
    description: 'Gauge SEO competition for any keyword. Get a difficulty score, search intent analysis, and related keywords to find ranking opportunities.',
    path: '/tools/keyword-difficulty-checker',
    detailsPath: '/tools/details/keyword-difficulty-checker',
    component: KeywordDifficultyChecker,
    detailsComponent: KeywordDifficultyCheckerDetails,
    icon: <KeyIcon />
  },
  {
    name: 'Headline Analyzer',
    description: 'Craft compelling headlines that drive clicks. Get an instant score based on emotional impact and clarity, plus suggestions to boost engagement.',
    path: '/tools/headline-analyzer',
    detailsPath: '/tools/details/headline-analyzer',
    component: HeadlineAnalyzer,
    detailsComponent: HeadlineAnalyzerDetails,
    icon: <HeadlineIcon/>
  },
  {
    name: 'Content Brief Generator',
    description: 'Automate your content strategy. Generate comprehensive briefs with target audience, keywords, and a full article structure for any topic.',
    path: '/tools/content-brief-generator',
    detailsPath: '/tools/details/content-brief-generator',
    component: ContentBriefGenerator,
    detailsComponent: ContentBriefGeneratorDetails,
    icon: <BriefIcon />
  },
  {
    name: 'On-Page SEO Analyzer',
    description: 'Audit any webpage for critical on-page SEO factors. Get an overall score and a checklist of recommendations for titles, metas, and more.',
    path: '/tools/on-page-seo-analyzer',
    detailsPath: '/tools/details/on-page-seo-analyzer',
    component: OnPageSeoAnalyzer,
    detailsComponent: OnPageSeoAnalyzerDetails,
    icon: <SeoAnalyzerIcon />
  },
  {
    name: 'Plagiarism Checker',
    description: 'Protect your content\'s integrity. Paste text to receive a simulated originality score and identify potential sources of duplicate content online.',
    path: '/tools/plagiarism-checker',
    detailsPath: '/tools/details/plagiarism-checker',
    component: PlagiarismChecker,
    detailsComponent: PlagiarismCheckerDetails,
    icon: <PlagiarismIcon />
  },
  {
    name: 'Readability Score Checker',
    description: 'Make your content accessible. This tool analyzes text using the Flesch-Kincaid grade level and provides tips to improve clarity.',
    path: '/tools/readability-checker',
    detailsPath: '/tools/details/readability-checker',
    component: ReadabilityScoreChecker,
    detailsComponent: ReadabilityScoreCheckerDetails,
    icon: <ReadabilityIcon />
  },
  {
    name: 'Topic Suggestion Tool',
    description: 'Never run out of content ideas. Enter a keyword to discover a list of creative and relevant topics to inspire your next blog post.',
    path: '/tools/topic-suggestion-tool',
    detailsPath: '/tools/details/topic-suggestion-tool',
    component: TopicSuggestionTool,
    detailsComponent: TopicSuggestionToolDetails,
    icon: <TopicIcon />
  },
  {
    name: 'SERP Simulator',
    description: 'Visualize your Google search snippet before you publish. This live preview helps you optimize your title and meta description for more clicks.',
    path: '/tools/serp-simulator',
    detailsPath: '/tools/details/serp-simulator',
    component: SerpSimulator,
    detailsComponent: SerpSimulatorDetails,
    icon: <SerpIcon />
  },
  {
    name: 'Keyword Rank Tracker',
    description: 'Simulate and analyze your site\'s ranking potential. Assess how well a URL is optimized for a target keyword and get suggestions.',
    path: '/tools/keyword-rank-tracker',
    detailsPath: '/tools/details/keyword-rank-tracker',
    component: KeywordRankTracker,
    detailsComponent: KeywordRankTrackerDetails,
    icon: <RankTrackerIcon />
  },
  {
    name: 'Backlink Checker',
    description: 'Uncover the backlink profile of any domain. Get a simulated analysis of Domain Authority, total backlinks, and top referring links.',
    path: '/tools/backlink-checker',
    detailsPath: '/tools/details/backlink-checker',
    component: BacklinkChecker,
    detailsComponent: BacklinkCheckerDetails,
    icon: <BacklinkIcon />
  },
    {
    name: 'Meta Tag Generator',
    description: 'Create optimized meta tags in seconds. Input your topic and keywords to generate multiple compelling title and description options.',
    path: '/tools/meta-tag-generator',
    detailsPath: '/tools/details/meta-tag-generator',
    component: MetaTagGenerator,
    detailsComponent: MetaTagGeneratorDetails,
    icon: <MetaTagIcon />
  },
  {
    name: 'XML Sitemap Generator',
    description: 'Ensure search engines find all your pages. Paste a list of URLs to instantly generate a clean, properly formatted XML sitemap.',
    path: '/tools/xml-sitemap-generator',
    detailsPath: '/tools/details/xml-sitemap-generator',
    component: XmlSitemapGenerator,
    detailsComponent: XmlSitemapGeneratorDetails,
    icon: <SitemapIcon />
  },
  {
    name: 'Robots.txt Generator',
    description: 'Take control of search engine crawlers. This simple generator helps you create a robots.txt file to manage bot access to your site.',
    path: '/tools/robots-txt-generator',
    detailsPath: '/tools/details/robots-txt-generator',
    component: RobotsTxtGenerator,
    detailsComponent: RobotsTxtGeneratorDetails,
    icon: <RobotIcon />
  },
  {
    name: 'Website Speed Test',
    description: 'Don\'t let a slow site hurt your rankings. Get a simulated speed score and receive actionable recommendations to improve performance.',
    path: '/tools/website-speed-test',
    detailsPath: '/tools/details/website-speed-test',
    component: WebsiteSpeedTest,
    detailsComponent: WebsiteSpeedTestDetails,
    icon: <SpeedTestIcon />
  },
  {
    name: 'Domain Authority Checker',
    description: 'Quickly assess the strength of any domain. This tool provides a simulated Domain Authority (DA) score to evaluate your site or competitors.',
    path: '/tools/domain-authority-checker',
    detailsPath: '/tools/details/domain-authority-checker',
    component: DomainAuthorityChecker,
    detailsComponent: DomainAuthorityCheckerDetails,
    icon: <AuthorityIcon />
  },
  {
    name: 'Content Gap Analysis',
    description: 'Discover valuable keyword opportunities by comparing your domain to a competitor\'s to find content gaps you can fill.',
    path: '/tools/content-gap-analysis',
    detailsPath: '/tools/details/content-gap-analysis',
    component: ContentGapAnalysis,
    detailsComponent: ContentGapAnalysisDetails,
    icon: <GapAnalysisIcon />
  },
  {
    name: 'Broken Link Checker',
    description: 'Maintain a healthy website. This tool performs a predictive scan of any URL to identify potentially broken links that need fixing.',
    path: '/tools/broken-link-checker',
    detailsPath: '/tools/details/broken-link-checker',
    component: BrokenLinkChecker,
    detailsComponent: BrokenLinkCheckerDetails,
    icon: <BrokenLinkIcon />
  },
  {
    name: 'Word Counter',
    description: 'Get instant text statistics as you type. This tool provides a real-time count of words, characters, and paragraphs for any text.',
    path: '/tools/word-counter',
    detailsPath: '/tools/details/word-counter',
    component: WordCounter,
    detailsComponent: WordCounterDetails,
    icon: <WordCounterIcon />
  },
  {
    name: 'Schema Markup Generator',
    description: 'Enhance your search listings with rich snippets. Generate valid JSON-LD schema for articles, FAQs, and more to help search engines.',
    path: '/tools/schema-markup-generator',
    detailsPath: '/tools/details/schema-markup-generator',
    component: SchemaMarkupGenerator,
    detailsComponent: SchemaMarkupGeneratorDetails,
    icon: <SchemaIcon />
  },
  {
    name: 'Email Subject Line Tester',
    description: 'Boost your email open rates. Get an instant score and actionable feedback on your subject lines to make them more compelling.',
    path: '/tools/email-subject-line-tester',
    detailsPath: '/tools/details/email-subject-line-tester',
    component: EmailSubjectLineTester,
    detailsComponent: EmailSubjectLineTesterDetails,
    icon: <EmailIcon />
  },
];
