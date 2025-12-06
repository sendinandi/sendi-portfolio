import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Diskominfostandi Kota Bekasi",
    location: "Bekasi, Indonesia",
    period: "March 2025 - July 2025",
    description: "Processed and visualized data using Excel and Power BI to generate insights for decision-making. I also built a Streamlit-based web analytics system to deliver interactive dashboards and real-time data analysis.",
    highlights: [
      "Processed and visualized data using Excel and Power BI to support data-driven decision-making.",
      "Developed interactive dashboards and analytical features using Streamlit.",
      "Delivered real-time insights through a web-based analytics system.",
    ],
  },
  {
    title: "Internal Control Officer Intern",
    company: "KPW BI DKI Jakarta",
    location: "Jakarta, Indonesia",
    period: "August 2025 - February 2026",
    description: "developed a Power Apps–based monitoring application for ICK supported by SharePoint as the data source. I also created interactive dashboards using Power BI and implemented workflow automation through Power Automate to streamline internal control processes.",
    highlights: [
      "Developed a Power Apps–based monitoring application for ICK using SharePoint as the centralized data source.",
      "Built interactive Power BI dashboards to visualize key internal control metrics.",
      "Implemented workflow automation with Power Automate to streamline and enhance internal control processes.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
            Work <span className="text-gradient">History</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building data systems and AI solutions across startups and enterprises.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] group-hover:scale-125 transition-transform duration-300" />
              
              {/* Content card */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-muted-foreground">• {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-1.5">▹</span>
                      <span className="text-foreground/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
