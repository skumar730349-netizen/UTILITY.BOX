import React from 'react';

interface LogoProps {
    white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ white = false }) => {
  const utilityColor = white ? '#FFFFFF' : '#1D4ED8'; // primary color or white
  const boxColor = white ? '#FFFFFF' : '#10B981'; // secondary color or white

  const style: React.CSSProperties = {
    height: '40px',
    width: 'auto',
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 240 55" 
      style={style}
      aria-label="UtilityBox Logo"
    >
      <g fill={utilityColor}>
        {/* U */}
        <path d="M0 38 V10 C0 0 10 0 15 0 H25 C30 0 40 0 40 10 V38 H30 V12 C30 8 25 8 22 8 H18 C15 8 10 8 10 12 V38 H0 Z" />
        {/* T */}
        <path d="M50 8 H75 V18 H65 V38 H55 V18 H50 V8 Z" />
        {/* I */}
        <path d="M80 8 H90 V38 H80 V8 Z" />
        {/* L */}
        <path d="M95 8 H105 V28 H120 V38 H95 V8 Z" />
        {/* I */}
        <path d="M125 8 H135 V38 H125 V8 Z" />
        {/* T */}
        <g transform="translate(140, 8)">
          <path d="M0 0 H25 V10 H15 V30 H5 V10 H0 V0 Z" />
        </g>
        {/* Y */}
        <path d="M170 8 L180 23 L190 8 H200 L185 28 V38 H175 V28 L160 8 H170 Z" />
      </g>
      <g transform="translate(180, 20) rotate(-15)">
        {/* B */}
        <path fill={boxColor} d="M0 0 H15 C20 0 22 4 20 8 C22 12 20 16 15 16 H0 V0 Z M8 2 H13 C15 2 15 6 13 6 H8 V2 Z M8 10 H14 C16 10 16 14 14 14 H8 V10 Z" />
        {/* O */}
        <path fill={boxColor} d="M25 0 H35 C45 0 45 16 35 16 H25 C15 16 15 0 25 0 Z M33 2 C25 2 25 14 33 14 H37 C45 14 45 2 37 2 H33 Z" />
        {/* X */}
        <path fill={boxColor} d="M48 0 L54 8 L60 0 H68 L58 11 L68 22 H60 L54 14 L48 22 H40 L50 11 L40 0 H48 Z" />
      </g>
    </svg>
  );
};

export default Logo;
