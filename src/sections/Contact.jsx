import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Heart, Zap, Rocket } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';

export default function Contact() {
    const isMobile = useMobile();

    return (
        <section className="py-16 md:py-32 relative overflow-hidden">
            {/* Animated background - static on mobile */}
            <div className="absolute inset-0 -z-10">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-r from-primary/10 via-secondary/10 to-coral/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
            </div>

            {/* Floating icons - only on desktop */}
            {!isMobile && (
                <>
                    {[
                        { Icon: Star, pos: "top-20 left-[10%]", color: "text-accent" },
                        { Icon: Heart, pos: "top-32 right-[15%]", color: "text-coral" },
                        { Icon: Zap, pos: "bottom-20 left-[15%]", color: "text-sky" },
                        { Icon: Rocket, pos: "bottom-32 right-[10%]", color: "text-primary" },
                    ].map(({ Icon, pos, color }, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                            className={`absolute ${pos} ${color} hidden md:block`}
                            style={{ willChange: "transform" }}
                        >
                            <Icon className="w-8 h-8" />
                        </motion.div>
                    ))}
                </>
            )}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-primary via-secondary to-coral rounded-2xl md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center overflow-hidden"
                >
                    {/* Sparkle decoration - desktop only */}
                    {!isMobile && (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute top-8 right-8 hidden md:block"
                            style={{ willChange: "transform" }}
                        >
                            <Sparkles className="w-12 h-12 text-white/30" />
                        </motion.div>
                    )}

                    {/* Emoji row - static on mobile */}
                    <div className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-8">
                        {['🚀', '⭐', '💪', '🎯', '✨'].map((emoji, i) => (
                            <span
                                key={i}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                            >
                                {emoji}
                            </span>
                        ))}
                    </div>

                    {/* Main headline */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
                        ¿Listo para
                        <br />
                        <span className="text-accent">vender más</span>?
                    </h2>

                    {/* Simple tagline */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-lg mx-auto font-medium px-4">
                        Únete a empresas que ya confían en nosotros
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                        <motion.button
                            whileHover={isMobile ? {} : { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white text-primary font-black text-base md:text-xl shadow-xl flex items-center gap-2 md:gap-3 justify-center group"
                        >
                            Empezar Gratis
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </motion.button>

                        <motion.button
                            whileHover={isMobile ? {} : { scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-black text-base md:text-xl"
                        >
                            Ver Demo ▶
                        </motion.button>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-6 text-white/60">
                        {['Sin tarjeta', '14 días gratis', 'Cancela cuando quieras'].map((text, i) => (
                            <span key={i} className="flex items-center gap-2 font-bold text-xs md:text-base">
                                <span className="text-success">✓</span> {text}
                            </span>
                        ))}
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-32 md:w-60 h-32 md:h-60 bg-white/5 rounded-full" />
                    <div className="absolute -top-5 md:-top-10 -right-5 md:-right-10 w-20 md:w-40 h-20 md:h-40 bg-white/5 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
