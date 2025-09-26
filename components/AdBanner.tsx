
import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  adKey: string;
  format: 'iframe';
  height: number;
  width: number;
  params?: object;
}

const AdBanner: React.FC<AdBannerProps> = ({ adKey, format, height, width, params = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && container.innerHTML === '') {
      const adConfigScript = document.createElement('script');
      adConfigScript.type = 'text/javascript';
      adConfigScript.innerHTML = `atOptions = {'key' : '${adKey}','format' : '${format}','height' : ${height},'width' : ${width},'params' : ${JSON.stringify(params)}};`;

      const adInvokeScript = document.createElement('script');
      adInvokeScript.type = 'text/javascript';
      adInvokeScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;

      container.appendChild(adConfigScript);
      container.appendChild(adInvokeScript);
    }
  }, [adKey, format, height, width, params]);

  // Use minHeight and minWidth to prevent layout shift while the ad loads
  return <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0.5rem auto', minWidth: `${width}px`, minHeight: `${height}px` }} />;
};

export default AdBanner;
