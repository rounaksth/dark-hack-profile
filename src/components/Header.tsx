
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg shadow-primary/10' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary relative">
          <span className="mr-1 text-foreground">&lt;</span>
          <span>RP</span>
          <span className="ml-1 text-foreground">/&gt;</span>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('certifications')} className="nav-link">Certifications</button>
        </nav>
        
        <div className="md:hidden">
          <button className="text-foreground hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
