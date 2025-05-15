
const CertificationsSection = () => {
  const certifications = [
    {
      provider: "TryHackMe",
      certs: [
        { name: "Pre Security", date: null },
        { name: "Introduction to Cyber Security", date: "11/08/2024" },
        { name: "Web Fundamentals", date: "27/08/2024" },
        { name: "Jr Penetration Tester", date: "20/10/2024" },
      ]
    },
    {
      provider: "CompTIA",
      certs: [
        { name: "Pentest+", date: "06/11/2024" },
      ]
    },
    {
      provider: "AWS Academy",
      certs: [
        { name: "Cloud Foundations", date: "02/2024 – 03/2024" },
        { name: "Cloud Operations", date: "02/2024 – 03/2024" },
        { name: "Cloud Security Foundations", date: "02/2024 – 03/2024" },
        { name: "Cloud Security Builder", date: "02/2024 – 03/2024" },
        { name: "Data Center Technician", date: "02/2024 – 03/2024" },
      ]
    }
  ];

  return (
    <section id="certifications" className="section bg-secondary/20 animate-fade-in">
      <div className="container-custom">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certGroup, index) => (
            <div 
              key={index} 
              className="card-custom animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary">{certGroup.provider}</h3>
              </div>
              
              <div className="space-y-3">
                {certGroup.certs.map((cert, i) => (
                  <div 
                    key={i} 
                    className="p-3 bg-secondary/30 rounded-lg animate-fade-in"
                    style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-medium">{cert.name}</p>
                      {cert.date && (
                        <span className="text-xs text-primary">{cert.date}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
