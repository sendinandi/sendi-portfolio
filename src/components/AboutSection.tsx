import { Database, Brain, Code2, FileCode2 } from "lucide-react";

const skills = [
  {
    icon: Database,
    title: "Data Analysis & Reporting",
    description:
      "Processing, analyzing, and visualizing data to support monitoring, reporting, and decision-making needs.",
    technologies: ["Excel", "Power BI", "Tableau", "SQL"],
  },
  {
    icon: Brain,
    title: "Dashboard & Business Insight",
    description:
      "Developing interactive dashboards and translating data into clear insights for operational and managerial reporting.",
    technologies: ["Power BI", "Streamlit", "Power Apps", "Reporting"],
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive web-based applications and supporting system features based on user requirements and business processes.",
    technologies: ["Python", "Flask", "Bootstrap", "Streamlit"],
  },
  {
    icon: FileCode2,
    title: "System Analysis & Documentation",
    description:
      "Analyzing business needs and preparing system documentation such as flowcharts, use case diagrams, UML diagrams, and database design.",
    technologies: ["UML", "Flowchart", "Use Case", "MySQL"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">
            // ABOUT ME
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
            What I <span className="text-gradient">Do</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I focus on data analysis, dashboard development, and web-based
            information systems to help transform business needs into practical
            digital solutions.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <skill.icon className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
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

export default AboutSection;