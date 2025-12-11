import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 py-8">
            {/* Pulsing Version Badge Skeleton */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-4 w-24 bg-voltage-red/20 rounded"
            />

            {/* Button Skeleton */}
            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="h-12 w-64 border border-voltage-red/30 bg-voltage-red/5"
            />

            {/* Loading Text */}
            <div className="font-mono text-xs text-gray-600 tracking-widest flex items-center space-x-2 mt-4">
                <span>LOADING RELEASE DATA</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    ...
                </motion.span>
            </div>

            {/* Decorative Loading Bar */}
            <div className="w-64 h-0.5 bg-gray-900 overflow-hidden">
                <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-voltage-red to-transparent"
                />
            </div>
        </div>
    );
};

export default LoadingSkeleton;
