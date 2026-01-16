import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-background to-white py-12 md:py-20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-32 md:w-48 h-32 md:h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Top section */}
                <div className="text-center mb-10 md:mb-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4 md:mb-6"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-primary/30">
                            R
                        </div>
                        <span className="text-xl md:text-2xl font-black text-text">
                            Reseñas<span className="text-primary">Pro</span>
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted max-w-md mx-auto text-base md:text-lg font-medium px-4"
                    >
                        Ayudamos a empresas a conseguir más clientes con reseñas reales y webs que convierten.
                    </motion.p>
                </div>

                {/* Links row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-16"
                >
                    {['Servicios', 'Precios', 'Blog', 'Contacto', 'Privacidad'].map((link, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ y: -2, color: '#6366F1' }}
                            className="font-bold text-muted transition-colors text-sm md:text-base"
                        >
                            {link}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-lg mx-auto mb-10 md:mb-16 px-4"
                >
                    <div className="bg-white rounded-xl md:rounded-2xl p-2 shadow-xl border border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <input
                            type="email"
                            placeholder="Tu email"
                            className="flex-1 px-4 py-3 md:py-4 text-text font-medium focus:outline-none text-sm md:text-base rounded-lg"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl flex items-center gap-2 justify-center shadow-lg shadow-primary/20 text-sm md:text-base"
                        >
                            <Sparkles className="w-4 h-4" />
                            Suscribir
                        </motion.button>
                    </div>
                    <p className="text-center text-xs md:text-sm text-muted mt-3 md:mt-4 font-medium">
                        Recibe consejos para vender más cada semana 🚀
                    </p>
                </motion.div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-100">
                    <p className="text-muted font-medium text-sm md:text-base flex items-center gap-2">
                        Hecho con <Heart className="w-4 h-4 text-coral fill-coral" /> en Tarragona
                    </p>

                    <p className="text-muted font-medium text-xs md:text-sm text-center">
                        © {new Date().getFullYear()} ReseñasPro. Todos los derechos reservados.
                    </p>

                    {/* Social links */}
                    <div className="flex gap-3 md:gap-4">
                        {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gray-100 flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
