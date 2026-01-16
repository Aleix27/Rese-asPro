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
                <p className="text-xs md:text-sm font-bold text-muted uppercase tracking-widest flex items-center justify-center gap-2">
                    <span className="text-base md:text-lg">🤝</span>
                    Empresas que confían en nosotros
                </p>
            </div>

            {/* Ticker - CSS animation for better mobile performance */}
            <div className="flex overflow-hidden">
                <div className="ticker-track flex gap-6 md:gap-12 pr-6 md:pr-12 whitespace-nowrap">
                    {[...companies, ...companies].map((company, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-gray-50 to-white px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-gray-100 cursor-default group shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <span className="text-2xl md:text-3xl">{company.emoji}</span>
                            <span className="text-base md:text-xl font-bold text-text group-hover:text-primary transition-colors">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker-track {
                    animation: ticker 25s linear infinite;
                    will-change: transform;
                }
                @media (prefers-reduced-motion: reduce) {
                    .ticker-track {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}
