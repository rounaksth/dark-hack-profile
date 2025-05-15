
import { useEffect } from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';

const Index = () => {
  useEffect(() => {
    document.title = 'Rounak Pradhan – Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5))]"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo Image */}
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-primary overflow-hidden shadow-lg shadow-primary/30 animate-pulse">
                <img 
                  src="/logo-rp.png" 
                  alt="Rounak Pradhan Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200";
                    e.currentTarget.alt = "Default Logo";
                  }}
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-glitch">
              <span className="text-primary">Rounak</span> Pradhan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in animate-delay-200">
              Cybersecurity & Networking Enthusiast
            </p>
            <p className="text-lg mb-10 text-muted-foreground animate-fade-in animate-delay-300">
              Passionate about ethical hacking, penetration testing, and securing systems against modern cyber threats. 
              This portfolio showcases my skills, experience, and achievements in cybersecurity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-400">
              <button 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button 
                className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-px h-px animate-fade-in"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 0.5}px`,
                  height: `${Math.random() * 2 + 0.5}px`,
                  backgroundColor: 'rgba(0, 255, 0, 0.5)',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.8)',
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>
      
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      
      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="container-custom">
          <div className="text-center">
            <div className="mb-6">
              <div className="text-xl font-bold text-primary relative inline-block">
                <span className="mr-1 text-foreground">&lt;</span>
                <span>RP</span>
                <span className="ml-1 text-foreground">/&gt;</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">© 2024 Rounak Pradhan. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">
              Crafted with pure HTML and CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
