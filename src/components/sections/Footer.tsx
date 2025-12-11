import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-12 px-6 bg-obsidian-light border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-xs tracking-wider">
            <div className="mb-4 md:mb-0">
                <p>ARCHITECTED BY IRedDragonICY</p>
            </div>

            <div className="flex items-center space-x-8">
                <a href="https://github.com/KonaBess-Next/KonaBess-Next" target="_blank" rel="noopener noreferrer" className="hover:text-voltage-red transition-colors flex items-center space-x-2">
                    <FaGithub size={16} /> <span>GITHUB</span>
                </a>
                <a href="#" className="hover:text-voltage-red transition-colors flex items-center space-x-2">
                    <FaTelegram size={16} /> <span>TELEGRAM</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
