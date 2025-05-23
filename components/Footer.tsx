
import React from 'react';
import { EyeIcon } from './icons/EyeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-green-500/20 bg-black">
      <div className="container mx-auto text-gray-500">
        <div className="flex justify-center items-center mb-2">
          <EyeIcon className="w-6 h-6 mr-2 text-green-500/70" />
           {/* <p className="text-lg text-green-400/80 glitch-effect">WE ARE FSOCIETY</p> Removed */}
        </div>
        <p className="text-sm">
          Ahmed Walid &copy; {new Date().getFullYear()}
        </p>
        <p className="text-xs mt-1">
          All systems operational. Always learning, always exploring.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
