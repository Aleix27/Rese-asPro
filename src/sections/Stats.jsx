import { motion } from 'framer-motion';
import { Star, TrendingUp, ThumbsUp, Eye, Award, Zap } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';

const stats = [
    {
        icon: Eye,
        value: "95%",
        label: "Leen reseñas",
        color: "from-sky to-primary",
        bgColor: "bg-sky/10",
        description: "antes de comprar"
    },
    {
        icon: TrendingUp,
        value: "x4",
        label: "Más ventas",
        color: "from-success to-emerald-400",
        bgColor: "bg-success/10",
        description: "con buenas opiniones"
    },
    {
        icon: ThumbsUp,
        value: "80%",
        label: "Confían más",
        color: "from-coral to-accent",
        bgColor: "bg-coral/10",
        description: "en reseñas que en ads"
    }
];

export default function Stats() {
    const isMobile = useMobile();

    return (
        <section className="py-16 md:py-32 relative overflow-hidden">
            {/* Static background - no animations */}
            <div className="absolute inset-0 -z-10">
                <div className={`absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
                <div className={`absolute bottom-0 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-coral/5 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
            </div>

            {/* Wave divider top */}
            <div className="absolute top-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 fill-background">
                    <path d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                        <Award className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                        <span className="font-bold text-accent text-sm md:text-base">¿Por qué importan?</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-text px-4">
                        Las <span className="gradient-text">reseñas</span> lo cambian todo
                    </h2>
                </motion.div>

                {/* Stats cards */}
                <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-xl border border-gray-100 text-center cursor-default overflow-hidden"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 ${stat.bgColor} rounded-2xl md:rounded-3xl flex items-center justify-center`}>
                                <stat.icon className={`w-7 h-7 md:w-10 md:h-10`} />
                            </div>

                            {/* Big number */}
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                {stat.value}
                            </span>

                            {/* Label */}
                            <p className="text-lg md:text-xl font-black text-text mt-3 md:mt-4 mb-1 md:mb-2">{stat.label}</p>
                            <p className="text-muted font-medium text-sm md:text-base">{stat.description}</p>

                            {/* Decorative corner */}
                            <div className={`absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-full opacity-20`} />
                        </motion.div>
                    ))}
                </div>

                {/* Visual infographic below */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 md:mt-20 text-center px-4"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white rounded-2xl sm:rounded-full px-6 md:px-8 py-4 shadow-xl border border-gray-100">
                        <div className="flex -space-x-3">
                            {['😊', '🥳', '😍', '🤩'].map((emoji, i) => (
                                <span
                                    key={i}
                                    className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-50 to-white rounded-full flex items-center justify-center text-xl md:text-2xl border-2 border-white shadow-lg"
                                >
                                    {emoji}
                                </span>
                            ))}
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="font-black text-text text-sm md:text-base">Clientes felices cada día</p>
                            <p className="text-xs md:text-sm text-muted">creciendo juntos</p>
                        </div>
                        <Zap className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />
                    </div>
                </motion.div>
            </div>

            {/* Wave divider bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 fill-background rotate-180">
                    <path d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
                </svg>
            </div>
        </section>
    );
}
