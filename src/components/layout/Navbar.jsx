import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '#services' },
        { name: 'Precios', href: '#pricing' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-lg shadow-black/5" : "bg-transparent py-4 md:py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-base md:text-lg shadow-lg shadow-primary/30"
                    >
                        R
                    </motion.div>
                    <span className="text-lg md:text-xl font-black text-text">
                        Reseñas<span className="text-primary">Pro</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ y: -2 }}
                            className="text-sm font-bold text-muted hover:text-primary transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2"
                    >
                        <Sparkles className="w-4 h-4" />
                        Empezar
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="w-5 h-5 text-text" />
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed inset-0 bg-white z-50 md:hidden flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-10">
                            <span className="text-xl font-black text-text">Menú</span>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                            >
                                <X className="w-5 h-5 text-text" />
                            </motion.button>
                        </div>

                        <div className="flex flex-col gap-6 flex-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-3xl font-black text-text hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black text-xl shadow-lg"
                        >
                            Empezar Gratis 🚀
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
