
const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tanvi Tech",
      position: "Cybersecurity Intern",
      period: "28/08/2024 – 28/12/2024",
      responsibilities: [
        "Found and fixed web/network vulnerabilities",
        "Ran penetration tests and wrote reports",
        "Used Burp Suite, Wireshark for security improvements",
        "Investigated incidents and boosted detection systems",
        "Followed data security best practices"
      ]
    },
    {
      company: "Dynamic Technosoft",
      position: "Technical Support",
      period: "04/2023 – 05/2024",
      responsibilities: [
        "QA Role: Tested ERP software, found bugs, wrote reports, validated fixes with SQL",
        "Support Role: Trained clients, diagnosed technical issues, helped with onboarding"
      ]
    }
  ];

  return (
    <section id="experience" className="section animate-fade-in">
      <div className="container-custom">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card-custom border-l-4 border-primary animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                  <p className="text-lg">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="inline-block bg-secondary px-3 py-1 rounded-full text-sm text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 list-disc pl-5">
                {exp.responsibilities.map((resp, i) => (
                  <li 
                    key={i} 
                    className="text-muted-foreground animate-fade-in"
                    style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
