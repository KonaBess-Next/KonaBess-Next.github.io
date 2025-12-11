import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Features: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    // Feature 1: Freq Slot Machine
    // Simulating a rapid scroll locking onto a value
    const freqs = ["305MHz", "450MHz", "600MHz", "750MHz", "825MHz", "905MHz", "WARNING"];

    // Feature 2: Voltage Curve
    // An SVG Path that flattens or curves based on scroll
    const curveControlY = useTransform(scrollYProgress, [0.2, 0.6], [150, 50]);
    const curveSpring = useSpring(curveControlY, { stiffness: 100, damping: 20 });

    // Feature 3: Terminal Typewriter
    const [terminalText, setTerminalText] = useState("");
    const fullText = "> REPACKING_BOOT_IMAGE... SUCCESS.";
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTerminalText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) i = 0; // Loop or stop
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[200vh] bg-obsidian py-40 overflow-hidden">
            {/* Feature 1: GPU Frequency List */}
            <div className="flex flex-col items-center justify-center mb-60 opacity-80">
                <h3 className="text-gray-500 font-mono text-xs tracking-widest mb-8">GPU_FREQUENCY_TABLE</h3>
                <div className="h-40 overflow-hidden relative border-y border-voltage-red/30 w-64 text-center mask-image-gradient">
                    <motion.div
                        animate={{ y: [0, -200] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="flex flex-col space-y-4"
                    >
                        {[...freqs, ...freqs, ...freqs].map((freq, i) => (
                            <span key={i} className={`font-display text-4xl ${freq === "905MHz" ? "text-voltage-red" : "text-gray-700"}`}>
                                {freq}
                            </span>
                        ))}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian pointer-events-none" />
                </div>
                <div className="mt-4 font-mono text-voltage-red animate-pulse-fast text-sm">
                    LOCKED: 905MHz
                </div>
            </div>

            {/* Feature 2: Voltage Curve SVG */}
            <div className="relative w-full h-[60vh] flex flex-col items-center justify-center mb-40">
                <h3 className="text-gray-500 font-mono text-xs tracking-widest mb-10">VOLTAGE_CURVE_EDITOR</h3>
                <svg className="w-full max-w-4xl h-full overflow-visible" viewBox="0 0 800 300">
                    <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#333" />
                            <stop offset="100%" stopColor="#FF1F1F" />
                        </linearGradient>
                    </defs>
                    {/* Dynamic Curve */}
                    <motion.path
                        d={useTransform(curveSpring, (y) => `M 0 250 Q 400 ${y} 800 50`)}
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    {/* Labels moving with curve */}
                    <motion.text x="50" y="240" fill="#666" fontFamily="monospace" fontSize="12">SVS_L1</motion.text>
                    <motion.text x="750" y="40" fill="#FF1F1F" fontFamily="monospace" fontSize="12">TURBO</motion.text>

                    {/* Middle label follows the curve roughly */}
                    <motion.text
                        x="400"
                        y={useTransform(curveSpring, (y) => y - 20)}
                        fill="#FFF"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="12"
                    >
                        NOM
                    </motion.text>
                </svg>
            </div>

            {/* Feature 3: Repack Console */}
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <div className="bg-obsidian-light border border-gray-800 p-8 rounded-sm w-full max-w-2xl shadow-2xl">
                    <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-900" />
                        <div className="w-3 h-3 rounded-full bg-yellow-900" />
                        <div className="w-3 h-3 rounded-full bg-green-900" />
                    </div>
                    <div className="font-mono text-green-500 text-sm md:text-base h-24">
                        <p className="opacity-50">root@konabess:~# ./repack_img.sh</p>
                        <p>
                            {terminalText}
                            <span className="animate-pulse block inline-block w-2 h-4 bg-green-500 ml-1 align-middle" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
