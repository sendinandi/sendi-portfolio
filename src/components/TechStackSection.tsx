const technologies = [
  { name: "Python", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "TensorFlow", category: "ML" },
  { name: "PyTorch", category: "ML" },
  { name: "Scikit-learn", category: "ML" },
  { name: "Power BI", category: "Visualisation" },
  { name: "Tableau", category: "Visualisation" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tools" },
  { name: "Flask", category: "Web" },
  { name: "Streamlit", category: "Web" },
  { name: "Bootstrap", category: "Web" },
  { name: "Power Apps", category: "Microsoft" },
  { name: "Word", category: "Microsoft" },
  { name: "Excel", category: "Microsoft" },
  { name: "Pentaho", category: "Data" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The modern data and AI stack I work with to build robust, scalable solutions.
          </p>
        </div>
        
        {/* Tech marquee */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling tech pills */}
          <div className="flex gap-4 animate-[scroll_30s_linear_infinite] hover:pause">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <span className="font-mono text-sm whitespace-nowrap">
                  <span className="text-primary">{tech.category}/</span>
                  <span className="text-foreground">{tech.name}</span>
                </span>
              </div>
            ))}
          </div>
          
          {/* Second row - reverse direction */}
          <div className="flex gap-4 mt-4 animate-[scroll_35s_linear_infinite_reverse] hover:pause">
            {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => (
              <div
                key={`${tech.name}-rev-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-border bg-card hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
              >
                <span className="font-mono text-sm whitespace-nowrap">
                  <span className="text-accent">{tech.category}/</span>
                  <span className="text-foreground">{tech.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
