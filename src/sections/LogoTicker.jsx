import { motion } from 'framer-motion';

const companies = [
    { name: "Acme", emoji: "🏢" },
    { name: "Quantum", emoji: "⚛️" },
    { name: "Nebula", emoji: "🌌" },
    { name: "FoxRun", emoji: "🦊" },
    { name: "Circle", emoji: "⭕" },
    { name: "Nova", emoji: "💫" },
    { name: "Spark", emoji: "✨" },
];

export default function LogoTicker() {
    return (
        <section className="py-10 md:py-16 relative overflow-hidden bg-white border-y border-gray-100">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs md:text-sm font-bold text-muted uppercase tracking-widest flex items-center justify-center gap-2"
                >
                    <span className="text-base md:text-lg">🤝</span>
                    Empresas que confían en nosotros
                </motion.p>
            </div>

            {/* Ticker */}
            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex gap-6 md:gap-12 pr-6 md:pr-12 whitespace-nowrap"
                >
                    {[...companies, ...companies].map((company, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-gray-50 to-white px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-gray-100 cursor-default group shadow-sm hover:shadow-lg transition-all"
                        >
                            <span className="text-2xl md:text-3xl group-hover:animate-bounce">{company.emoji}</span>
                            <span className="text-base md:text-xl font-bold text-text group-hover:text-primary transition-colors">{company.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </section>
    );
}
