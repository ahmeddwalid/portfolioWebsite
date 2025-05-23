
import React from 'react';

// A simple representation of a network or connection
export const NetworkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-6.75 4.5h9.5M5.25 9v6M7.5 3.75H4.5M7.5 20.25H4.5m15-16.5h3m-3 16.5h3M9 6.75V3.75m0 16.5V17.25m6-10.5V3.75m0 16.5V17.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);
