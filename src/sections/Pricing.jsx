import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';

const plans = [
    {
        name: "Básico",
        emoji: "🚀",
        price: "49",
        color: "from-sky to-primary",
        features: ["Más reseñas", "Google conectado", "Soporte email"],
        highlight: false,
    },
    {
        name: "Pro",
        emoji: "👑",
        price: "149",
        color: "from-primary to-secondary",
        features: ["Todo de Básico", "Web premium", "SEO incluido", "Soporte 24h"],
        highlight: true,
        badge: "⭐ Más popular"
    },
    {
        name: "Total",
        emoji: "💎",
        price: "Contactar",
        color: "from-coral to-accent",
        features: ["Gestión completa", "Web a medida", "Asesor personal", "Informes"],
        highlight: false,
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-white">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-accent/10 rounded-full blur-3xl"
                />
            </div>

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
                        className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6"
                    >
                        <Crown className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                        <span className="font-bold text-accent text-sm md:text-base">Precios claros</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-text mb-4 md:mb-6">
                        Elige tu <span className="gradient-text">plan</span>
                    </h2>

                    <p className="text-base md:text-xl text-muted">
                        Sin sorpresas. Cancela cuando quieras.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto items-stretch">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            whileHover={{ y: -10, scale: plan.highlight ? 1.02 : 1.05 }}
                            className={`relative rounded-2xl md:rounded-[2rem] p-6 md:p-8 ${plan.highlight
                                    ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/30 md:scale-105 z-10'
                                    : 'bg-white border border-gray-100 shadow-xl'
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-accent text-text px-3 md:px-4 py-1.5 md:py-2 rounded-full font-black text-xs md:text-sm shadow-lg whitespace-nowrap"
                                >
                                    {plan.badge}
                                </motion.div>
                            )}

                            {/* Emoji */}
                            <motion.span
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="text-4xl md:text-5xl block text-center mb-3 md:mb-4"
                            >
                                {plan.emoji}
                            </motion.span>

                            {/* Name */}
                            <h3 className={`text-xl md:text-2xl font-black text-center mb-3 md:mb-4 ${plan.highlight ? 'text-white' : 'text-text'}`}>
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="text-center mb-6 md:mb-8">
                                <span className={`text-4xl md:text-5xl font-black ${plan.highlight ? 'text-white' : 'gradient-text'}`}>
                                    {plan.price === "Contactar" ? plan.price : `${plan.price}€`}
                                </span>
                                {plan.price !== "Contactar" && (
                                    <span className={`text-base md:text-lg font-bold ${plan.highlight ? 'text-white/70' : 'text-muted'}`}>/mes</span>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                {plan.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className={`flex items-center gap-2 md:gap-3 font-bold text-sm md:text-base ${plan.highlight ? 'text-white/90' : 'text-text'}`}
                                    >
                                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-white/20' : 'bg-success/10'
                                            }`}>
                                            <Check className={`w-3 h-3 md:w-4 md:h-4 ${plan.highlight ? 'text-white' : 'text-success'}`} />
                                        </div>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full py-3 md:py-4 rounded-xl font-black text-base md:text-lg transition-all ${plan.highlight
                                        ? 'bg-white text-primary shadow-lg hover:shadow-xl'
                                        : 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                                    }`}
                            >
                                {plan.price === "Contactar" ? "Hablar con ventas" : "Elegir plan"}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-muted"
                >
                    {["🔒 Pago seguro", "❌ Sin permanencia", "💳 Todas las tarjetas", "⚡ Activo en minutos"].map((item, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="font-bold text-xs md:text-base"
                        >
                            {item}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
