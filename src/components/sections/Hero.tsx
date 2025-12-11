import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const Hero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse interaction for voltage effect (chromatic aberration)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate normalized position (-1 to 1)
        const x = (clientX / innerWidth - 0.5) * 10;
        const y = (clientY / innerHeight - 0.5) * 10;

        mouseX.set(x);
        mouseY.set(y);
    };

    const xSpring = useSpring(mouseX, { stiffness: 200, damping: 15 });
    const ySpring = useSpring(mouseY, { stiffness: 200, damping: 15 });

    // Chromatic Aberration Text Shadow
    const textShadow = useMotionTemplate`${xSpring}px ${ySpring}px 0px rgba(255, 31, 31, 0.7), ${xSpring}px ${ySpring}px 4px rgba(0, 0, 0, 0.5)`;

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-obsidian text-white select-none"
        >
            <div className="z-10 flex flex-col items-center relative">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    className="font-display text-[12vw] sm:text-[15vw] leading-[0.8] tracking-tighter uppercase font-bold text-center flex flex-col items-center"
                >
                    <motion.span
                        style={{ textShadow, x: useMotionTemplate`${xSpring.get() * -0.5}px` }}
                        className="block relative z-10 mix-blend-normal"
                    >
                        KONABESS
                    </motion.span>
                    <motion.span
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                        style={{ textShadow }}
                        className="block text-voltage-red z-0"
                    >
                        NEXT
                    </motion.span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-8 font-mono text-xs sm:text-base text-gray-400 tracking-[0.3em] pl-2 border-l-2 border-voltage-red/50"
                >
                    SNAPDRAGON GPU CONTROL // ROOT ACCESS REQUIRED
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="mt-12"
                >
                    <a
                        href="https://github.com/KonaBess-Next/KonaBess-Next/releases/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex px-8 py-3 bg-transparent overflow-hidden border border-voltage-red/50 hover:border-voltage-red transition-colors"
                    >
                        <div className="absolute inset-0 bg-voltage-red/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative font-mono text-xs sm:text-sm tracking-widest text-voltage-red group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                            INITIALIZE DOWNLOAD
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Decorative Voltage Lines or Grid? Keeping it clean for now as per minimal prompt, 
          but adding a subtle gradient glow behind */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-voltage-red/10 blur-[100px] rounded-full pointer-events-none"
            />
        </section>
    );
};

export default Hero;
