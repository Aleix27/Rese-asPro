import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Heart, Zap, Rocket } from 'lucide-react';
import { useRef } from 'react';

export default function Contact() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={ref} className="py-16 md:py-32 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-r from-primary/10 via-secondary/10 to-coral/10 rounded-full blur-3xl"
                />
            </div>

            {/* Floating icons - hidden on mobile */}
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
                >
                    <Icon className="w-8 h-8" />
                </motion.div>
            ))}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    style={{ scale, opacity }}
                    className="relative bg-gradient-to-br from-primary via-secondary to-coral rounded-2xl md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center overflow-hidden"
                >
                    {/* Sparkle decoration - hidden on mobile */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-8 right-8 hidden md:block"
                    >
                        <Sparkles className="w-12 h-12 text-white/30" />
                    </motion.div>

                    {/* Emoji row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-8"
                    >
                        {['🚀', '⭐', '💪', '🎯', '✨'].map((emoji, i) => (
                            <motion.span
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                animate={{ y: [0, -10, 0] }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            >
                                {emoji}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Main headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 leading-tight"
                    >
                        ¿Listo para
                        <br />
                        <span className="text-accent">vender más</span>?
                    </motion.h2>

                    {/* Simple tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-lg mx-auto font-medium px-4"
                    >
                        Únete a empresas que ya confían en nosotros
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white text-primary font-black text-base md:text-xl shadow-xl flex items-center gap-2 md:gap-3 justify-center group"
                        >
                            Empezar Gratis
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-black text-base md:text-xl"
                        >
                            Ver Demo ▶
                        </motion.button>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-6 text-white/60"
                    >
                        {['Sin tarjeta', '14 días gratis', 'Cancela cuando quieras'].map((text, i) => (
                            <span key={i} className="flex items-center gap-2 font-bold text-xs md:text-base">
                                <span className="text-success">✓</span> {text}
                            </span>
                        ))}
                    </motion.div>

                    {/* Decorative circles */}
                    <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-32 md:w-60 h-32 md:h-60 bg-white/5 rounded-full" />
                    <div className="absolute -top-5 md:-top-10 -right-5 md:-right-10 w-20 md:w-40 h-20 md:h-40 bg-white/5 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
