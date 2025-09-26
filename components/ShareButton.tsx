import React, { useState, useEffect } from 'react';

interface ShareButtonProps {
  toolName: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ toolName }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copyText, setCopyText] = useState('Copy');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Set URL on client-side mount to ensure it's correct
    setCurrentUrl(window.location.href);
  }, []);

  const shareText = `Check out this awesome tool: ${toolName} on UtilityBox!`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(shareText);

  const socialLinks = [
    { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`, icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> },
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg> },
    { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodeURIComponent(toolName)}&summary=${encodedText}`, icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5c1.6 0 2.5 1.2 2.5 2.5s-1 2.5-2.5 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path></svg> },
    { name: 'Email', url: `mailto:?subject=${encodeURIComponent(`Check out the ${toolName}`)}&body=${encodedText}%0A%0A${encodedUrl}`, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  ];

  const handleCopy = () => {
    if (!currentUrl) return;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopyText('Copied!');
      setTimeout(() => setCopyText('Copy'), 2000);
    });
  };

  const toggleModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const close = () => setModalOpen(false);
    if (modalOpen) {
      window.addEventListener('click', close);
    }
    return () => window.removeEventListener('click', close);
  }, [modalOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-200 transition-colors w-full justify-center"
        aria-label="Share this tool"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        Share
      </button>

      {modalOpen && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="share-modal-title"
        >
          <div className="p-4 border-b">
            <h3 id="share-modal-title" className="text-lg font-semibold text-dark">Share this Tool</h3>
          </div>
          <div className="p-2">
            <div className="flex flex-wrap justify-around p-2">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-2 text-gray-600 hover:bg-gray-100 hover:text-primary rounded-lg transition-colors"
                  aria-label={`Share on ${link.name}`}
                >
                  {link.icon}
                  <span className="text-xs mt-1">{link.name}</span>
                </a>
              ))}
            </div>
            <div className="p-2">
              <label htmlFor="share-link" className="sr-only">Shareable Link</label>
              <div className="flex items-center border rounded-md overflow-hidden">
                <input
                  id="share-link"
                  type="text"
                  value={currentUrl}
                  readOnly
                  className="flex-grow p-2 text-sm bg-gray-50 border-r focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className="px-3 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0"
                >
                  {copyText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
