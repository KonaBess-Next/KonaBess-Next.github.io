import React from 'react';
import { motion } from 'framer-motion';
import { useGitHubRelease } from '../../hooks/useGitHubRelease';
import { FaDownload } from 'react-icons/fa';
import LoadingSkeleton from '../LoadingSkeleton';

const Download: React.FC = () => {
    const { data, loading, error } = useGitHubRelease();

    const version = data?.tag_name || "vX.X.X";
    const downloadUrl = data?.assets?.[0]?.browser_download_url || data?.html_url || "https://github.com/KonaBess-Next/KonaBess-Next/releases";

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative bg-obsidian text-white overflow-hidden py-20" aria-label="Download section">

            {/* Background Version Number */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
                <h2 className="text-[25vw] font-display font-bold text-gray-800 leading-none select-none">
                    {loading ? "..." : version}
                </h2>
            </motion.div>

            <div className="z-10 flex flex-col items-center space-y-12">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-mono text-voltage-red tracking-widest mb-4">LATEST STABLE RELEASE</h3>
                    <p className="text-gray-400 font-mono text-sm max-w-md mx-auto">
                        Ready to take control? Flashing custom GPU images carries risk.
                        Ensure you have root access and a backup.
                    </p>
                </motion.div>

                {loading ? (
                    <LoadingSkeleton />
                ) : (
                    <motion.a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover="hover"
                        initial="initial"
                        aria-label="Download KonaBess Next latest release"
                        className="group relative px-12 py-6 border-2 border-voltage-red bg-transparent overflow-hidden cursor-pointer"
                    >
                        <motion.div
                            variants={{
                                initial: { x: "-100%" },
                                hover: { x: 0 }
                            }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="absolute inset-0 bg-voltage-red"
                        />
                        <div className="relative flex items-center space-x-4 font-display text-xl md:text-2xl font-bold uppercase tracking-wider group-hover:text-black transition-colors z-10">
                            <span>Initialize Download</span>
                            <FaDownload />
                        </div>
                    </motion.a>
                )}

                {error && (
                    <p className="text-red-500 font-mono text-xs">
                        Error fetching release. <a href="https://github.com/KonaBess-Next/KonaBess-Next/releases" className="underline">Manual Download</a>
                    </p>
                )}
            </div>
        </section>
    );
};

export default Download;
