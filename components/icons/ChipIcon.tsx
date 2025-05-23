
import React from 'react';

// Simple microchip icon
export const ChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3h-1.5m1.5 0h16.5m-16.5 0V1.5M20.25 3v11.25A2.25 2.25 0 0118 16.5H6a2.25 2.25 0 01-2.25-2.25V3M20.25 3h1.5M18 16.5h.75m-12.75 0H5.25m6.75 0v3.75M9.75 16.5V21m4.5-4.5V21m-3.75-7.5h3M11.25 3.75h1.5v1.5h-1.5V3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75H9v2.25H6.75V6.75zm7.5 0H16.5v2.25H14.25V6.75zm-7.5 4.5H9v2.25H6.75V11.25zm7.5 0H16.5v2.25H14.25V11.25z" />
  </svg>
);
