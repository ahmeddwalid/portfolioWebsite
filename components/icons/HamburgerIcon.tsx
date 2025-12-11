import React from 'react';

interface HamburgerIconProps {
    isOpen: boolean;
    className?: string;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, className = '' }) => {
    return (
        <div className={`relative w-6 h-5 flex flex-col justify-between ${className}`}>
            <span
                className={`block h-0.5 w-full bg-green-400 transition-all duration-300 ease-in-out origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
            />
            <span
                className={`block h-0.5 w-full bg-green-400 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'
                    }`}
            />
            <span
                className={`block h-0.5 w-full bg-green-400 transition-all duration-300 ease-in-out origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
            />
        </div>
    );
};

export default HamburgerIcon;
