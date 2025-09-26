import React, { useState } from 'react';
import { generateSchemaMarkup } from '../../services/geminiService';
import ShareButton from '../../components/ShareButton';

const schemaTypes = ['Article', 'FAQPage', 'HowTo'];

const SchemaMarkupGenerator: React.FC = () => {
  const [schemaType, setSchemaType] = useState('Article');
  const [formData, setFormData] = useState<any>({});
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveReport = (reportData: any) => {
    try {
      const reports = JSON.parse(localStorage.getItem('utilityBoxReports') || '[]');
      const query = formData.headline || formData.name || `FAQ Page ${new Date().toLocaleDateString()}`;
      reports.unshift({
        id: Date.now(),
        toolName: 'Schema Markup Generator',
        query: `${schemaType}: ${query}`,
        data: reportData,
      });
      localStorage.setItem('utilityBoxReports', JSON.stringify(reports.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save report to localStorage", e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    const questions = formData.questions ? [...formData.questions] : [];
    if (!questions[index]) {
      questions[index] = { question: '', answer: ''};
    }
    questions[index][field] = value;
    setFormData({...formData, questions});
  }
  
  const addFaq = () => {
    const questions = formData.questions ? [...formData.questions] : [];
    questions.push({ question: '', answer: '' });
    setFormData({ ...formData, questions });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    
    let schemaData = {};
    if (schemaType === 'Article') {
        schemaData = {
            headline: formData.headline,
            author: { "@type": "Person", name: formData.author },
            datePublished: formData.datePublished
        };
    } else if (schemaType === 'FAQPage') {
        schemaData = {
            mainEntity: (formData.questions || []).filter((q:any) => q.question && q.answer).map((q: any) => ({
                "@type": "Question",
                name: q.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: q.answer
                }
            }))
        }
    } else if (schemaType === 'HowTo') {
        schemaData = {
            name: formData.name,
            step: (formData.steps || '').split('\n').filter((s:string) => s.trim() !== '').map((stepText: string) => ({
                "@type": "HowToStep",
                text: stepText
            }))
        }
    }


    try {
      const response = await generateSchemaMarkup(schemaType, schemaData);
      const parsedResult = JSON.parse(response.text);
      const resultString = JSON.stringify(parsedResult, null, 2);
      setResult(resultString);
      saveReport(resultString);
    } catch (err) {
      setError('Failed to generate schema markup. Please check your inputs.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleCopy = () => {
    if(result) navigator.clipboard.writeText(`<script type="application/ld+json">${result}</script>`);
  }
  
  const handleClear = () => {
    setFormData({});
    setResult(null);
    setError(null);
  }

  const renderForm = () => {
    switch(schemaType) {
        case 'Article':
            return (
                <div className="space-y-4">
                    <input name="headline" value={formData.headline || ''} onChange={handleInputChange} placeholder="Article Headline" className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light" />
                    <input name="author" value={formData.author || ''} onChange={handleInputChange} placeholder="Author Name" className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light" />
                    <input name="datePublished" value={formData.datePublished || ''} type="date" onChange={handleInputChange} className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light" />
                </div>
            );
        case 'FAQPage':
             return (
                <div className="space-y-4">
                    {(formData.questions || [{ question: '', answer: ''}]).map((faq: any, index: number) => (
                        <div key={index} className="space-y-2 p-2 border dark:border-gray-600 rounded">
                           <input value={faq.question} onChange={e => handleFaqChange(index, 'question', e.target.value)} placeholder={`Question ${index + 1}`} className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light" />
                           <textarea value={faq.answer} onChange={e => handleFaqChange(index, 'answer', e.target.value)} placeholder={`Answer ${index + 1}`} className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light" rows={3}></textarea>
                        </div>
                    ))}
                     <button type="button" onClick={addFaq} className="text-sm text-primary hover:underline">+ Add Question</button>
                </div>
            );
        case 'HowTo':
            return (
                 <div className="space-y-4">
                    <input name="name" value={formData.name || ''} onChange={handleInputChange} placeholder="How-to Title (e.g., How to Bake a Cake)" className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light" />
                    <textarea name="steps" value={formData.steps || ''} onChange={handleInputChange} placeholder="Enter each step on a new line" className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light" rows={5}></textarea>
                </div>
            )
        default: return null;
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="text-center sm:text-left w-full">
                    <h1 className="text-3xl font-extrabold text-dark dark:text-light mb-2">Schema Markup Generator</h1>
                    <p className="text-gray-600 dark:text-gray-400">Create JSON-LD structured data to help search engines understand your content.</p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <ShareButton toolName="Schema Markup Generator" />
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <select value={schemaType} onChange={e => { setSchemaType(e.target.value); handleClear(); }} className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-dark dark:text-light">
                    {schemaTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                
                {renderForm()}
                
                <div className="flex flex-col sm:flex-row gap-2">
                    <button type="submit" disabled={loading} className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-400">
                        {loading ? 'Generating...' : 'Generate Schema'}
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="w-full sm:w-auto px-8 py-3 bg-gray-200 dark:bg-gray-600 text-dark dark:text-light font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        disabled={loading}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>

        {error && <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md" role="alert">{error}</div>}

        {result && (
             <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-dark dark:text-light">Generated JSON-LD</h2>
                     <button onClick={handleCopy} className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-emerald-600">Copy Script</button>
                 </div>
                <pre className="p-4 bg-gray-900 text-white rounded-md text-sm overflow-x-auto">
                    <code>
                        {`<script type="application/ld+json">\n${result}\n</script>`}
                    </code>
                </pre>
            </div>
        )}
    </div>
  );
};

export default SchemaMarkupGenerator;