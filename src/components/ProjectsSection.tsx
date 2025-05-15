
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Blog Page",
      tech: "HTML, CSS, JavaScript",
      description: [
        "Built a responsive blog for an e-commerce site",
        "Features: add/edit/delete posts, mobile-friendly",
        "Focused on styling and interactivity"
      ]
    },
    {
      title: "SQL Injection Attack Simulation",
      tech: "Burp Suite, PortSwigger",
      description: [
        "Showcased Union-based, Error-based, and Blind SQLi",
        "Tested login security using brute-force",
        "Explained how to detect and prevent SQL vulnerabilities"
      ]
    },
    {
      title: "Web Application Penetration Testing Framework",
      tech: "Python, Tkinter (Final Year Project)",
      description: [
        "Developed a security testing tool with a Tkinter GUI",
        "Integrated tools: Nmap, SQLMap, Nuclei, XSStrike",
        "Automated scanning, real-time results, PDF reporting",
        "Focused on detecting SQLi, XSS, server issues",
        "Aimed to make ethical hacking easier for organizations"
      ]
    }
  ];

  return (
    <section id="projects" className="section animate-fade-in">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-1 bg-gradient-to-r from-primary/50 to-primary/10">
                <div className="terminal-header">
                  <div className="terminal-circle bg-red-500"></div>
                  <div className="terminal-circle bg-yellow-500"></div>
                  <div className="terminal-circle bg-green-500"></div>
                  <span className="ml-2 text-xs text-muted-foreground">project-{index + 1}.sh</span>
                </div>
                
                <div className="bg-card p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary">{project.title}</h3>
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground">{project.tech}</span>
                  </div>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    {project.description.map((detail, i) => (
                      <li 
                        key={i} 
                        className="text-sm text-muted-foreground animate-fade-in"
                        style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <button className="text-sm text-primary hover:underline transition-all duration-300">
                      View Details
                    </button>
                    
                    <div className="flex space-x-2">
                      <span className="inline-block px-2 py-1 bg-secondary/50 text-xs rounded-md text-muted-foreground">
                        Security
                      </span>
                      <span className="inline-block px-2 py-1 bg-secondary/50 text-xs rounded-md text-muted-foreground">
                        Ethical Hacking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
