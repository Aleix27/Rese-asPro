import Layout from './components/layout/Layout';
import Hero from './sections/Hero';
import LogoTicker from './sections/LogoTicker';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <LogoTicker />
      <Stats />
      <Services />
      <Pricing />
      <Contact />
    </Layout>
  );
}

export default App;
