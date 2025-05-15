
const SkillsSection = () => {
  const technicalSkills = [
    { category: "Languages", skills: ["Java", "Python", "SQL", "JavaScript", "Swift"] },
    { category: "Tools", skills: ["Cisco", "Burp Suite", "Wireshark", "GitHub", "Trello", "AWS", "Azure", "Docker", "VS Code"] },
    { category: "Systems", skills: ["Linux", "macOS", "Windows", "Android", "iOS"] }
  ];

  const softSkills = ["Communication", "Problem Solving", "Project Management"];

  return (
    <section id="skills" className="section bg-secondary/20 animate-fade-in">
      <div className="container-custom">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-custom">
            <h3 className="text-xl font-bold mb-6 text-primary">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h4 className="text-lg font-bold mb-3">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-secondary text-foreground px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card-custom">
            <h3 className="text-xl font-bold mb-6 text-primary">Soft Skills</h3>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h4 className="text-lg font-medium mb-2">{skill}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-background rounded-lg border border-border animate-fade-in animate-delay-500">
              <h4 className="text-lg font-bold mb-3 text-primary">Technical Growth</h4>
              <p className="text-muted-foreground">
                Continuously expanding my knowledge in cybersecurity through certifications, 
                hands-on projects, and staying current with the latest security threats and methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
