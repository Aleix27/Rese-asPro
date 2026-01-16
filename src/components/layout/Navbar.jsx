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

    // Block body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Servicios', href: '#services' },
        { name: 'Precios', href: '#pricing' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-lg shadow-black/5" : "bg-transparent py-4 md:py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-base md:text-lg shadow-lg shadow-primary/30">
                        R
                    </div>
                    <span className="text-lg md:text-xl font-black text-text">
                        Reseñas<span className="text-primary">Pro</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-muted hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Sparkles className="w-4 h-4" />
                        Empezar
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="w-5 h-5 text-text" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] md:hidden"
                        style={{ touchAction: 'none' }}
                    >
                        {/* Background overlay */}
                        <div
                            className="absolute inset-0 bg-black/20"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute top-0 right-0 bottom-0 w-full bg-white flex flex-col p-6 overflow-hidden"
                            style={{ touchAction: 'none' }}
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xl font-black text-text">Menú</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center active:scale-95 transition-transform"
                                >
                                    <X className="w-5 h-5 text-text" />
                                </button>
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
                                        className="text-3xl font-black text-text active:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black text-xl shadow-lg active:scale-98 transition-transform"
                            >
                                Empezar Gratis 🚀
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
