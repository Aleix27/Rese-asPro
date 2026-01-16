import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
