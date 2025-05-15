
const AboutSection = () => {
  const info = [
    { label: "Full Name", value: "Rounak Pradhan" },
    { label: "Degree", value: "BSc (Hons) Networking and IT Security" },
    { label: "Education", value: "Completed undergraduate studies in Networking and IT Security" },
    { label: "Phone", value: "[Your Phone Number]" },
    { label: "Address", value: "[Your Address]" },
    { label: "Email", value: "[Your Email Address]" }
  ];

  return (
    <section id="about" className="section bg-secondary/20 animate-fade-in">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-custom">
            <div className="terminal-header">
              <div className="terminal-circle bg-red-500"></div>
              <div className="terminal-circle bg-yellow-500"></div>
              <div className="terminal-circle bg-green-500"></div>
              <span className="ml-2 text-xs text-muted-foreground">bash - whoami</span>
            </div>
            <div className="terminal-body">
              {info.map((item, index) => (
                <div 
                  key={index} 
                  className="terminal-line mb-2 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="terminal-prompt">$</span>
                  <span className="mr-2 text-primary">{item.label}:</span>
                  <span>{item.value}</span>
                </div>
              ))}
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="cursor"></span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">My Profile</h3>
            <p className="mb-4 text-muted-foreground">
              Passionate about ethical hacking, penetration testing, and securing systems against modern cyber threats. 
              This portfolio showcases my skills, experience, and achievements in cybersecurity.
            </p>
            <p className="mb-6 text-muted-foreground">
              I specialize in identifying security vulnerabilities and implementing robust protective measures. 
              With a strong foundation in Networking and IT Security, I'm dedicated to staying ahead of emerging threats.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Ethical Hacking</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Penetration Testing</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Network Security</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Cybersecurity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
