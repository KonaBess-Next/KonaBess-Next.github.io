import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollWord = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "center center"]
    });

    // Interpolate font weight (requires variable font support)
    // Space Grotesk supports 300 to 700.
    const weight = useTransform(scrollYProgress, [0, 1], [300, 700]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);

    return (
        <motion.span
            ref={ref}
            style={{ fontWeight: weight, scale, opacity }}
            className={`inline-block origin-center will-change-transform ${className}`}
        >
            {children}
        </motion.span>
    );
};

const Philosophy: React.FC = () => {
    return (
        <section className="relative w-full min-h-[150vh] flex flex-col items-center pt-40 px-6 bg-obsidian-light/50">
            <div className="max-w-6xl mx-auto text-center leading-tight">
                <h2 className="font-display text-4xl md:text-7xl lg:text-9xl uppercase tracking-tighter text-gray-400 opacity-20 mb-24 sticky top-10">
                    Philosophy
                </h2>

                <div className="space-y-12 md:space-y-24 pb-40">
                    <p className="text-3xl md:text-6xl font-sans text-gray-300">
                        Unleash the <span className="text-white font-bold">silicon</span>.
                    </p>
                    <p className="text-3xl md:text-6xl font-sans text-gray-300">
                        Edit <ScrollWord className="text-voltage-red">FREQUENCY</ScrollWord> tables.
                    </p>
                    <p className="text-3xl md:text-6xl font-sans text-gray-300">
                        Master the <ScrollWord className="text-voltage-red">VOLTAGE</ScrollWord> curve.
                    </p>
                    <p className="text-3xl md:text-6xl font-sans text-gray-300">
                        Total <ScrollWord className="text-white">STABILITY</ScrollWord>.
                    </p>
                    <p className="text-xl md:text-3xl font-mono text-gray-500 pt-20 max-w-2xl mx-auto">
                        Full control over Snapdragon 888, 8 Gen 1, 8 Gen 2, and beyond.
                        <br />
                        Direct kernel interaction. No layers. No lag.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
