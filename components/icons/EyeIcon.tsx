
import React from 'react';

export const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-6.75 4.5h9.5M5.25 9v6M7.5 3.75H4.5M7.5 20.25H4.5m15-16.5h3m-3 16.5h3M9 6.75V3.75m0 16.5V17.25m6-10.5V3.75m0 16.5V17.25M12 6a2.25 2.25 0 00-2.25 2.25v3a2.25 2.25 0 002.25 2.25m0-7.5A2.25 2.25 0 0114.25 6v3a2.25 2.25 0 01-2.25 2.25M12 6V3.75m0 16.5V17.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="currentColor"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.125 12A7.875 7.875 0 0012 16.875a7.875 7.875 0 007.875-4.875A7.875 7.875 0 0012 7.125a7.875 7.875 0 00-7.875 4.875z" />
  </svg>
);

// Simplified version, more akin to fsociety mask
// export const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
//   <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props} strokeWidth={2} stroke="currentColor" fill="none">
//     <path d="M10 20 Q30 5 50 20 Q30 35 10 20 Z" />
//     <circle cx="30" cy="20" r="7" fill="currentColor" />
//     <line x1="5" y1="10" x2="15" y2="0" />
//     <line x1="55" y1="10" x2="45" y2="0" />
//     <line x1="5" y1="30" x2="15" y2="40" />
//     <line x1="55" y1="30" x2="45" y2="40" />
//   </svg>
// );


