import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead data infrastructure initiatives processing 10TB+ daily. Architected real-time streaming pipelines and ML feature stores.",
    highlights: [
      "Reduced data processing costs by 40% through pipeline optimization",
      "Built ML feature platform serving 100M+ predictions/day",
      "Led team of 5 engineers across data platform initiatives",
    ],
  },
  {
    title: "Data Engineer",
    company: "DataFlow Systems",
    location: "Seattle, WA",
    period: "2020 - 2022",
    description: "Designed and maintained ETL pipelines for enterprise clients. Implemented data quality frameworks and monitoring systems.",
    highlights: [
      "Migrated legacy data warehouse to Snowflake, improving query performance 5x",
      "Developed automated data quality checks reducing incidents by 60%",
      "Built self-service analytics platform for 200+ business users",
    ],
  },
  {
    title: "Junior Data Engineer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2018 - 2020",
    description: "Built foundational data infrastructure from ground up. Created dashboards and automated reporting systems.",
    highlights: [
      "Established company's first data warehouse architecture",
      "Automated manual reporting processes saving 20+ hours/week",
      "Implemented event tracking system for product analytics",
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
