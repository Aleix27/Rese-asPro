import { motion } from 'framer-motion';
import { Star, Layout, MessageSquare, Shield, Rocket, Sparkles } from 'lucide-react';

const services = [
    {
        icon: Star,
        title: "Más Reseñas",
        emoji: "⭐",
        description: "Automático",
        color: "from-accent to-orange-400",
        bgGradient: "from-accent/10 to-orange-100",
    },
    {
        icon: Layout,
        title: "Web Premium",
        emoji: "🎨",
        description: "Que convierte",
        color: "from-primary to-secondary",
        bgGradient: "from-primary/10 to-secondary/10",
    },
    {
        icon: MessageSquare,
        title: "Respondemos",
        emoji: "💬",
        description: "Por ti",
        color: "from-sky to-cyan-400",
        bgGradient: "from-sky/10 to-cyan-100",
    },
    {
        icon: Shield,
        title: "Protegemos",
        emoji: "🛡️",
        description: "Tu imagen",
        color: "from-success to-emerald-400",
        bgGradient: "from-success/10 to-emerald-100",
    }
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-white to-background">
            {/* Decorative elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-40 -right-40 w-80 h-80 border border-primary/10 rounded-full hidden md:block"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-60 h-60 border border-coral/10 rounded-full hidden md:block"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6"
                    >
                        <Rocket className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        <span className="font-bold text-primary text-sm md:text-base">Soluciones</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-text mb-4 md:mb-6">
                        Todo lo que <span className="gradient-text">necesitas</span>
                    </h2>

                    <p className="text-base md:text-xl text-muted max-w-lg mx-auto px-4">
                        Sin complicaciones. Nosotros nos encargamos.
                    </p>
                </motion.div>

                {/* Services grid - visual cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`relative bg-gradient-to-br ${service.bgGradient} rounded-2xl md:rounded-[2rem] p-4 md:p-8 text-center cursor-default group border border-white/50 shadow-lg md:shadow-xl`}
                        >
                            {/* Glow effect on hover */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl rounded-2xl md:rounded-[2rem]`}
                            />

                            {/* Emoji background */}
                            <motion.span
                                animate={typeof window !== 'undefined' && window.innerWidth < 768 ? {} : { y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, delay: idx * 0.5 }}
                                className="text-4xl md:text-6xl mb-2 md:mb-4 block drop-shadow-lg"
                                style={{ willChange: "transform" }}
                            >
                                {service.emoji}
                            </motion.span>

                            {/* Title */}
                            <h3 className="text-lg md:text-2xl font-black text-text mb-1 md:mb-2">{service.title}</h3>

                            {/* Description */}
                            <p className={`font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent text-sm md:text-lg`}>
                                {service.description}
                            </p>

                            {/* Icon in corner - hidden on mobile to avoid overflow */}
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                                className={`absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl items-center justify-center shadow-lg opacity-80 hidden md:flex`}
                            >
                                <service.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Visual call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-20 text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 md:gap-4 bg-white rounded-full px-5 md:px-8 py-4 md:py-5 shadow-xl border border-gray-100 cursor-pointer group"
                    >
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:rotate-12 transition-transform" />
                        <span className="font-bold text-text text-sm md:text-lg">Todo incluido en nuestros planes</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-xl md:text-2xl"
                        >
                            →
                        </motion.span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
