import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const analyzeKeywordDifficulty = async (keyword: string): Promise<GenerateContentResponse> => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Analyze the SEO difficulty for the keyword: "${keyword}".`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          keyword: { type: Type.STRING },
          difficultyScore: { type: Type.INTEGER, description: "A score from 1 to 100 (1=easy, 100=very hard)." },
          analysis: { type: Type.STRING, description: "A brief explanation of why the score was given." },
          searchIntent: { type: Type.STRING, description: "e.g., Informational, Navigational, Commercial, Transactional" },
          relatedKeywords: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 5 related long-tail keywords."
          }
        },
      },
    },
  });
  return response;
};

export const analyzeHeadline = async (headline: string): Promise<GenerateContentResponse> => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Analyze this headline: "${headline}". Score it for emotional impact, clarity, and SEO value.`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    headline: { type: Type.STRING },
                    overallScore: { type: Type.INTEGER, description: "A score from 1 to 100." },
                    analysis: { type: Type.STRING, description: "Strengths and weaknesses of the headline." },
                    suggestions: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                        description: "3 alternative headline suggestions."
                    }
                }
            }
        }
    });
    return response;
};

export const generateContentBrief = async (topic: string): Promise<GenerateContentResponse> => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Create a detailed content brief for a blog post about "${topic}". Include an estimated word count and a "People Also Ask" section.`,
        config: {
            systemInstruction: "You are an expert SEO Content Strategist.",
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    topic: { type: Type.STRING },
                    targetAudience: { type: Type.STRING },
                    primaryKeyword: { type: Type.STRING },
                    secondaryKeywords: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                    },
                    suggestedHeadlines: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                        description: "3 catchy headline ideas."
                    },
                    estimatedWordCount: { type: Type.STRING, description: "e.g., '1500-2000 words'"},
                    articleStructure: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                heading: { type: Type.STRING, description: "H2 or H3 heading" },
                                talkingPoints: {
                                    type: Type.ARRAY,
                                    items: { type: Type.STRING }
                                }
                            }
                        }
                    },
                    questionsToAnswer: {
                         type: Type.ARRAY,
                         items: { type: Type.STRING }
                    },
                    peopleAlsoAsk: {
                         type: Type.ARRAY,
                         items: { type: Type.STRING },
                         description: "A list of 3-4 relevant 'People Also Ask' questions."
                    }
                }
            }
        }
    });
    return response;
};

export const analyzeOnPageSeo = async (url: string): Promise<GenerateContentResponse> => {
    const prompt = `Perform a comprehensive on-page SEO analysis for the URL: "${url}". Evaluate the following elements:
    1.  **Title Tag**: Length, keyword placement, clarity.
    2.  **Meta Description**: Length, call-to-action, keyword relevance.
    3.  **Heading Structure**: Presence and order of H1, H2, H3 tags.
    4.  **Image Alt Attributes**: Presence and descriptiveness.
    5.  **Keyword Usage**: General relevance of content to the likely target keywords.
    Provide an overall score and a list of actionable recommendations.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    url: { type: Type.STRING },
                    overallScore: { type: Type.INTEGER, description: "Overall SEO score from 1 to 100." },
                    analysis: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING },
                            metaDescription: { type: Type.STRING },
                            headings: { type: Type.STRING },
                            images: { type: Type.STRING }
                        }
                    },
                    recommendations: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                area: { type: Type.STRING },
                                suggestion: { type: Type.STRING }
                            }
                        }
                    }
                }
            }
        }
    });
};

export const checkPlagiarism = async (text: string): Promise<GenerateContentResponse> => {
    const prompt = `Simulate a plagiarism check for the following text. Find content online that is highly similar. Provide an estimated originality score and list up to 3 potential sources with their URL and an estimated similarity percentage. This is a simulation for educational purposes. Text: "${text}"`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    originalityScore: { type: Type.INTEGER, description: "A score from 0 to 100 (100 = fully original)." },
                    analysis: { type: Type.STRING },
                    potentialSources: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                url: { type: Type.STRING },
                                similarity: { type: Type.INTEGER, description: "Percentage of similarity." }
                            }
                        }
                    }
                }
            }
        }
    });
};

export const checkReadability = async (text: string): Promise<GenerateContentResponse> => {
    const prompt = `Analyze the readability of the following text. Calculate the Flesch-Kincaid Grade Level. Provide a brief analysis of the writing style and list 3 concrete suggestions for improving its readability. Text: "${text}"`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    gradeLevel: { type: Type.STRING, description: "e.g., '8th Grade'" },
                    analysis: { type: Type.STRING },
                    suggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
            }
        }
    });
};

export const getTopicSuggestions = async (keyword: string): Promise<GenerateContentResponse> => {
    const prompt = `Generate 8 creative and relevant content topic ideas based on the keyword: "${keyword}". For each topic, provide a short, compelling description.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        topic: { type: Type.STRING },
                        description: { type: Type.STRING }
                    }
                }
            }
        }
    });
};

export const analyzeKeywordRankPotential = async (url: string, keyword: string): Promise<GenerateContentResponse> => {
    const prompt = `Analyze the potential for the URL "${url}" to rank for the keyword "${keyword}". Assess on-page factors like title, headings, and content relevance. Provide a potential score (1-100) and actionable suggestions for improvement.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    rankPotentialScore: { type: Type.INTEGER },
                    analysis: { type: Type.STRING },
                    suggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
            }
        }
    });
};

export const analyzeBacklinks = async (domain: string): Promise<GenerateContentResponse> => {
    const prompt = `Provide a simulated backlink profile analysis for the domain "${domain}". Estimate the total number of backlinks, referring domains, and a simulated Domain Authority score. List 5 plausible-looking top backlinks with anchor text. This is for educational purposes.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    backlinkCount: { type: Type.INTEGER },
                    referringDomains: { type: Type.INTEGER },
                    domainAuthority: { type: Type.INTEGER },
                    topBacklinks: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                sourceUrl: { type: Type.STRING },
                                anchorText: { type: Type.STRING }
                            }
                        }
                    }
                }
            }
        }
    });
};

export const generateMetaTags = async (topic: string, keywords: string): Promise<GenerateContentResponse> => {
    const prompt = `Generate 3 unique and SEO-friendly meta titles and meta descriptions for a webpage about "${topic}". The primary keywords to include are "${keywords}". Title should be under 60 characters and description under 160 characters.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        description: { type: Type.STRING }
                    }
                }
            }
        }
    });
};

export const analyzeWebsiteSpeed = async (url: string): Promise<GenerateContentResponse> => {
    const prompt = `Provide a simulated website speed analysis for "${url}". Give an estimated performance score (1-100) and list key recommendations for improvement in areas like image optimization, server response time, and JavaScript execution. This is a simulation based on common best practices.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    performanceScore: { type: Type.INTEGER },
                    analysis: { type: Type.STRING },
                    recommendations: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                area: { type: Type.STRING },
                                suggestion: { type: Type.STRING }
                            }
                        }
                    }
                }
            }
        }
    });
};

export const analyzeDomainAuthority = async (domain: string): Promise<GenerateContentResponse> => {
    const prompt = `Provide a simulated Domain Authority (DA) score for the domain "${domain}". The score should be between 1 and 100. Also provide a brief analysis explaining the factors that would contribute to such a score, like backlink quality and quantity.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    domainAuthorityScore: { type: Type.INTEGER },
                    analysis: { type: Type.STRING }
                }
            }
        }
    });
};

export const analyzeContentGap = async (myDomain: string, competitorDomain: string): Promise<GenerateContentResponse> => {
    const prompt = `Perform a content gap analysis. Identify 5-10 keyword and topic opportunities that "${competitorDomain}" likely ranks for, but "${myDomain}" does not. For each opportunity, provide the keyword/topic and a brief explanation of the content idea.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        keyword: { type: Type.STRING },
                        description: { type: Type.STRING }
                    }
                }
            }
        }
    });
};

export const analyzeBrokenLinks = async (url: string): Promise<GenerateContentResponse> => {
    const prompt = `Analyze the webpage at "${url}" and identify potential broken links (both internal and external). For each potential broken link, provide the full URL and the reason you suspect it might be broken (e.g., 'Page not found pattern in URL', 'Common typo', 'Outdated domain'). This is a predictive analysis as you cannot crawl the web in real-time.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        url: { type: Type.STRING },
                        reason: { type: Type.STRING }
                    }
                }
            }
        }
    });
};

export const generateSchemaMarkup = async (schemaType: string, schemaData: any): Promise<GenerateContentResponse> => {
    const prompt = `Generate a valid JSON-LD schema markup script. The schema type is "${schemaType}". The data for the schema is: ${JSON.stringify(schemaData, null, 2)}. Output only the complete JSON-LD object, including the @context, @type, etc.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    '@context': { type: Type.STRING },
                    '@type': { type: Type.STRING },
                },
                additionalProperties: true,
            }
        }
    });
};

export const testEmailSubjectLine = async (subject: string): Promise<GenerateContentResponse> => {
    const prompt = `Analyze this email subject line: "${subject}". Score it for open rate potential based on factors like curiosity, urgency, and clarity. Provide a score (1-100), a brief analysis, and 3 alternative suggestions.`;
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    score: { type: Type.INTEGER },
                    analysis: { type: Type.STRING },
                    suggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
            }
        }
    });
};