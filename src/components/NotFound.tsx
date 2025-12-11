import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFound: React.FC = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative bg-obsidian text-white overflow-hidden">
            {/* Background 404 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
                <h2 className="text-[30vw] font-display font-bold text-gray-900 leading-none select-none">
                    404
                </h2>
            </motion.div>

            {/* Content */}
            <div className="z-10 flex flex-col items-center space-y-8 px-6">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-voltage-red"
                >
                    <FaExclamationTriangle size={80} />
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
                        PAGE NOT FOUND
                    </h1>
                    <p className="text-gray-400 font-mono text-sm md:text-base max-w-md mx-auto">
                        ERROR: The requested resource does not exist in this kernel space.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                    <a
                        href="/"
                        className="group relative inline-flex items-center space-x-3 px-8 py-3 bg-transparent overflow-hidden border-2 border-voltage-red hover:border-voltage-red transition-colors"
                    >
                        <div className="absolute inset-0 bg-voltage-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <FaHome className="relative z-10 text-voltage-red group-hover:text-black transition-colors duration-300" />
                        <span className="relative z-10 font-mono text-sm tracking-widest text-voltage-red group-hover:text-black transition-colors duration-300">
                            RETURN HOME
                        </span>
                    </a>

                    <a
                        href="https://github.com/KonaBess-Next/KonaBess-Next"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-3 border border-gray-700 hover:border-gray-500 transition-colors"
                    >
                        <span className="font-mono text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors">
                            VIEW DOCS
                        </span>
                    </a>
                </motion.div>

                {/* Console-style error message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-12 bg-obsidian-light border border-gray-900 p-6 rounded-sm max-w-2xl w-full"
                >
                    <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-900" />
                        <div className="w-3 h-3 rounded-full bg-yellow-900" />
                        <div className="w-3 h-3 rounded-full bg-green-900" />
                    </div>
                    <div className="font-mono text-xs md:text-sm text-voltage-red space-y-1">
                        <p className="opacity-70">kernel@konabess:~$ cat /var/log/errors.log</p>
                        <p>[ERROR] 404: Resource not found</p>
                        <p>[INFO] Suggested action: Navigate to homepage</p>
                        <p className="opacity-50">
                            <span className="animate-pulse inline-block w-2 h-3 bg-voltage-red ml-1 align-middle" />
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Glowing effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-voltage-red/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default NotFound;
