import { motion } from 'framer-motion';
import { Star, Sparkles, TrendingUp, Heart, Zap, Shield } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';

// Static blob for mobile (no animation)
const StaticBlob = ({ className, color }) => (
    <div
        className={`absolute blob ${className}`}
        style={{ background: color }}
    />
);

// Animated blob for desktop only
const AnimatedBlob = ({ className, color, isMobile }) => {
    if (isMobile) {
        return <StaticBlob className={className} color={color} />;
    }

    return (
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, -20, 0],
                y: [0, -30, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute blob ${className}`}
            style={{ background: color, willChange: "transform" }}
        />
    );
};

// Floating icon component - only for desktop
const FloatingIcon = ({ Icon, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, type: "spring", stiffness: 200 }}
        className={`absolute hidden md:block ${className}`}
    >
        <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
            style={{ willChange: "transform" }}
        >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
    </motion.div>
);

export default function Hero() {
    const isMobile = useMobile();

    return (
        <section className="min-h-screen relative overflow-hidden flex items-center pt-24 md:pt-20 pb-12 md:pb-0">
            {/* Background blobs - static on mobile, animated on desktop */}
            <AnimatedBlob
                isMobile={isMobile}
                className={`w-64 md:w-96 h-64 md:h-96 -top-20 -left-20 ${isMobile ? 'blur-xl opacity-20' : 'blur-3xl opacity-40'}`}
                color="linear-gradient(135deg, #6366F1, #8B5CF6)"
            />
            <AnimatedBlob
                isMobile={isMobile}
                className={`w-48 md:w-80 h-48 md:h-80 top-1/2 -right-20 ${isMobile ? 'blur-xl opacity-15' : 'blur-3xl opacity-30'}`}
                color="linear-gradient(135deg, #F59E0B, #FB7185)"
            />
            {!isMobile && (
                <AnimatedBlob
                    isMobile={false}
                    className="w-40 md:w-72 h-40 md:h-72 bottom-20 left-1/3 blur-3xl opacity-25"
                    color="linear-gradient(135deg, #38BDF8, #10B981)"
                />
            )}

            {/* Floating decorative icons - hidden on mobile */}
            <FloatingIcon Icon={Star} className="top-32 left-[10%] text-accent" delay={0} />
            <FloatingIcon Icon={Heart} className="top-40 right-[15%] text-coral" delay={0.2} />
            <FloatingIcon Icon={Zap} className="bottom-40 left-[8%] text-sky" delay={0.4} />
            <FloatingIcon Icon={Sparkles} className="bottom-32 right-[10%] text-secondary" delay={0.6} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Left: Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-1"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-xs md:text-sm font-bold text-primary">Clientes felices en toda España</span>
                        </motion.div>

                        {/* Main headline - HUGE on mobile */}
                        <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 md:mb-8">
                            <span className="block text-text">Reseñas</span>
                            <span className="block gradient-text">que venden</span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-lg md:text-xl lg:text-2xl text-muted font-medium mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
                            Convierte opiniones en clientes. Así de fácil.
                        </p>

                        {/* CTA Buttons - centered and compact on mobile */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start">
                            <motion.button
                                whileHover={isMobile ? {} : { scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-auto px-8 md:px-8 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg shadow-lg shadow-primary/20"
                            >
                                <span className="flex items-center gap-2 justify-center">
                                    Empezar Gratis
                                    <span>→</span>
                                </span>
                            </motion.button>

                            <motion.button
                                whileHover={isMobile ? {} : { scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-auto px-8 md:px-8 py-4 md:py-5 rounded-2xl bg-white border-2 border-gray-100 text-text font-bold text-base md:text-lg shadow-lg hover:border-primary/30"
                            >
                                Ver Demo ▶
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right: Visual infographic card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-2"
                    >
                        {/* Main card */}
                        <div className="relative bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 shadow-2xl border border-gray-100 mx-4 md:mx-0">
                            {/* Stars rating */}
                            <div className="flex justify-center gap-1 mb-4 md:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-8 h-8 md:w-10 md:h-10 text-accent fill-accent drop-shadow-lg" />
                                ))}
                            </div>

                            {/* Big number */}
                            <div className="text-center mb-4 md:mb-6">
                                <span className="text-5xl md:text-7xl font-black gradient-text">4.9</span>
                                <p className="text-muted font-bold mt-2 text-sm md:text-base">Valoración media</p>
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                                {[
                                    { value: "+2K", label: "Reseñas", color: "bg-primary/10 text-primary" },
                                    { value: "95%", label: "Positivas", color: "bg-success/10 text-success" },
                                    { value: "x4", label: "Ventas", color: "bg-coral/10 text-coral" },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className={`${stat.color} rounded-xl md:rounded-2xl p-2 md:p-4 text-center cursor-default`}
                                    >
                                        <p className="text-lg md:text-2xl font-black">{stat.value}</p>
                                        <p className="text-[10px] md:text-xs font-bold opacity-70">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Trending indicator */}
                            <div className="flex items-center justify-center gap-2 bg-success/10 rounded-full py-2 md:py-3 px-4 md:px-6">
                                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-success" />
                                <span className="font-bold text-success text-sm md:text-base">+127% este mes</span>
                            </div>

                            {/* Decorative shield - static on mobile */}
                            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-accent to-coral rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                                <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                        </div>

                        {/* Floating review cards - hidden on mobile */}
                        <div className="absolute -left-2 md:-left-8 top-1/4 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl border border-gray-100 max-w-[160px] md:max-w-[200px] hidden sm:block">
                            <div className="flex gap-0.5 md:gap-1 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-accent fill-accent" />)}
                            </div>
                            <p className="text-xs md:text-sm font-bold text-text">"¡Increíble servicio!"</p>
                            <p className="text-[10px] md:text-xs text-muted mt-1">— María G.</p>
                        </div>

                        <div className="absolute -right-2 md:-right-4 bottom-1/4 bg-gradient-to-r from-primary to-secondary rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl text-white hidden sm:block">
                            <p className="text-xl md:text-2xl font-black">+24</p>
                            <p className="text-[10px] md:text-xs font-bold opacity-80">Nuevas hoy</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator - hidden on mobile */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
                >
                    <div className="w-1.5 h-3 bg-primary rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
