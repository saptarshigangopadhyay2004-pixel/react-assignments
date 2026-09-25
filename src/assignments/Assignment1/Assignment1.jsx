import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import './Portfolio.css';

export default function Assignment1() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}