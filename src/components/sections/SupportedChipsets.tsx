import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Chipset {
    name: string;
    label?: 'Newest' | 'Latest Support' | 'Original Target';
}

interface ChipsetSeries {
    title: string;
    chipsets: Chipset[];
    gradient: string;
    image: string;
}

const SupportedChipsets: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

    const spring1 = useSpring(y1, { stiffness: 100, damping: 30 });
    const spring2 = useSpring(y2, { stiffness: 100, damping: 30 });
    const spring3 = useSpring(y3, { stiffness: 100, damping: 30 });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    const chipsetData: ChipsetSeries[] = [
        {
            title: "Snapdragon 8 Series",
            gradient: "from-voltage-red via-red-700 to-voltage-red-dark",
            image: "/snapdragon-8-series.png",
            chipsets: [
                { name: "Snapdragon 8 Elite Gen 5" },
                { name: "Snapdragon 8s Gen 4" },
                { name: "Snapdragon 8s Gen 3" },
                { name: "Snapdragon 8 Gen 3" },
                { name: "Snapdragon 8 Gen 2" },
                { name: "Snapdragon 8+ Gen 1" },
                { name: "Snapdragon 8 Gen 1" },
                { name: "Snapdragon 888" },
                { name: "Snapdragon 865" },
                { name: "Snapdragon 855" },
            ]
        },
        {
            title: "Snapdragon 7 Series",
            gradient: "from-orange-600 via-amber-600 to-yellow-700",
            image: "/snapdragon-7-series.png",
            chipsets: [
                { name: "Snapdragon 7+ Gen 3" },
                { name: "Snapdragon 7+ Gen 2" },
                { name: "Snapdragon 7 Gen 1" },
                { name: "Snapdragon 780G" },
                { name: "Snapdragon 778G" },
                { name: "Snapdragon 765" },
                { name: "Snapdragon 750" },
            ]
        },
        {
            title: "Snapdragon 6 Series",
            gradient: "from-cyan-600 via-blue-600 to-indigo-700",
            image: "/snapdragon-6-series.png",
            chipsets: [
                { name: "Snapdragon 690" },
            ]
        }
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full py-32 bg-obsidian overflow-hidden"
            aria-label="Supported Snapdragon Chipsets"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 31, 31, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 31, 31, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }} />
            </div>

            {/* Glowing Orbs - Multi-layered Parallax */}
            <motion.div
                style={{ y: spring1 }}
                className="absolute top-20 left-[10%] w-96 h-96 bg-voltage-red/20 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                style={{ y: spring2 }}
                className="absolute bottom-40 right-[15%] w-[500px] h-[500px] bg-orange-500/15 blur-[150px] rounded-full pointer-events-none"
            />
            <motion.div
                style={{ y: spring3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none"
            />

            {/* Content Container */}
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-7xl mx-auto px-6"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="text-center mb-20"
                >


                    {/* Main Title */}
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                            SUPPORTED
                        </span>
                        <br />
                        <span className="text-voltage-red">CHIPSETS</span>
                    </h2>

                    {/* Description */}
                    <p className="font-mono text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Precision-engineered GPU control for Qualcomm Snapdragon processors.
                        <br className="hidden md:block" />
                        Full spectrum compatibility from flagship to mid-range performance tiers.
                    </p>
                </motion.div>

                {/* Chipset Series Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {chipsetData.map((series, seriesIndex) => (
                        <motion.div
                            key={series.title}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: seriesIndex * 0.15,
                                duration: 0.8,
                                ease: [0.33, 1, 0.68, 1]
                            }}
                            className="group relative"
                        >
                            {/* Card Container with Glassmorphism */}
                            <div className="relative h-full overflow-hidden rounded-sm border border-gray-800/50 bg-gradient-to-br from-obsidian-light/80 to-obsidian/80 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-gray-700 hover:shadow-voltage-red/10">
                                {/* Gradient Accent Bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${series.gradient} opacity-70`} />

                                {/* Animated Border Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${series.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`} />

                                {/* Card Content */}
                                <div className="relative p-8">
                                    {/* Series Title with Icon */}
                                    <div className="mb-8 pb-6 border-b border-gray-800">
                                        <div className="flex items-center gap-4 mb-4">
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                whileInView={{ scale: 1, rotate: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: seriesIndex * 0.15 + 0.3,
                                                    type: "spring",
                                                    stiffness: 150,
                                                    damping: 12
                                                }}
                                                className="relative"
                                            >
                                                <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-700/50 group-hover:ring-gray-600/70 transition-all duration-300">
                                                    {/* Glow effect behind image */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${series.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                                                    <img
                                                        src={series.image}
                                                        alt={`${series.title} icon`}
                                                        className="relative w-full h-full object-cover scale-110"
                                                        style={{
                                                            objectPosition: 'center',
                                                            transform: 'scale(1.15)'
                                                        }}
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Title */}
                                            <div className="flex-1">
                                                <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-1">
                                                    {series.title}
                                                </h3>
                                                <div className={`h-0.5 w-16 bg-gradient-to-r ${series.gradient}`} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chipset List */}
                                    <div className="space-y-3">
                                        {series.chipsets.map((chipset, chipsetIndex) => (
                                            <motion.div
                                                key={chipset.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: seriesIndex * 0.15 + chipsetIndex * 0.05,
                                                    duration: 0.4
                                                }}
                                                className="group/item relative"
                                            >
                                                <div className="flex items-center justify-between gap-3 p-3 rounded-sm bg-obsidian/50 border border-transparent hover:border-gray-700/50 hover:bg-obsidian-light/50 transition-all duration-300">
                                                    {/* Chipset Name */}
                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                        {/* Indicator Dot */}
                                                        <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${series.gradient}`} />

                                                        <span className="font-mono text-sm text-gray-300 group-hover/item:text-white transition-colors truncate">
                                                            {chipset.name}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Hover Glow Effect */}
                                                <div className={`absolute inset-0 bg-gradient-to-r ${series.gradient} opacity-0 group-hover/item:opacity-5 rounded-sm transition-opacity duration-300 pointer-events-none`} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gray-700/50 rounded-tl-sm" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gray-700/50 rounded-br-sm" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Scan Line Effect */}
            <motion.div
                animate={{
                    top: ['-10%', '110%']
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-voltage-red/30 to-transparent pointer-events-none"
            />
        </section>
    );
};

export default SupportedChipsets;
