import { Brain, Workflow, BarChart3, Recycle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

import sipdaImage from "@/assets/projects/ai-sipda.webp";
import governmentImage from "@/assets/projects/sipda-dashboard.webp";
import workforceImage from "@/assets/projects/Visualisasi.webp";
import malnutritionImage from "@/assets/projects/malnutrition-analysis.webp";
import sentimentImage from "@/assets/projects/sentiment-analysis.webp";
import recyclebudImage from "@/assets/projects/recyclebud.webp";

const projects = [
  {
    title: "SIPDA Analytics Platform",
    description:
      "Developed a web-based intelligent analytics platform integrated with statistical analysis, forecasting, anomaly detection, and AI-powered recommendations to support data-driven decision making. Built interactive dashboards for monitoring and exploratory data analysis.",
    icon: Workflow,
    image: sipdaImage,
    tags: [
      "Python",
      "Flask",
      "MySQL",
      "Machine Learning",
      "Dashboard",
    ],
    github: "https://github.com/sendinandi/AI_SIPDA",
  },

  {
    title: "Government Activity Realization Monitoring System",
    description:
      "Designed and developed a web-based monitoring information system for Diskominfostandi Kota Bekasi. Analyzed business requirements, created UML and database design documentation, and implemented role-based workflows to support activity monitoring and validation processes.",
    icon: Workflow,
    image: governmentImage,
    tags: [
      "System Analysis",
      "UML",
      "MySQL",
      "RAD",
      "Web Development",
    ],
    github: "https://github.com/sendinandi/Goverment_Activity",
  },

  {
    title: "Employment Placement Analytics Dashboard",
    description:
      "Developed an interactive Tableau dashboard using Open Data Kota Bekasi datasets to analyze employment placement trends in 2022–2023. Collaborated in a two-person internship project focused on data visualization, dashboard development, and analytical reporting for public information publication.",
    icon: BarChart3,
    image: workforceImage,
    tags: [
      "Tableau",
      "Data Visualization",
      "Analytics",
      "Open Data",
    ],
    github:
      "https://opendata.bekasikota.go.id/visualisasi/jumlah-penempatan-kerja-kota-bekasi-tahun-2022-2023",
  },

  {
    title: "Exploratory Data Analysis of Malnutrition Cases",
    description:
      "Performed data cleaning, exploratory analysis, and data visualization on malnutrition case datasets to identify trends, correlations, and distribution patterns for analytical insights.",
    icon: Activity,
    image: malnutritionImage,
    tags: [
      "Python",
      "Tableau",
      "Pentaho",
      "Data Analysis",
      "Visualization",
    ],
    github:
      "https://docs.google.com/document/d/1XIH1U0TPDNZrTtYHY1RQoKSv5M-tgqBe/edit",
  },

  {
    title: "Social Media Sentiment Analysis",
    description:
      "Implemented the VADER method to analyze and classify positive, negative, and neutral sentiments from social media datasets to identify public opinion trends and sentiment patterns.",
    icon: Brain,
    image: sentimentImage,
    tags: ["Python", "VADER", "NLP", "Jupyter Notebook"],
    github:
      "https://docs.google.com/document/d/1IOGmhlxwdgdxsAVjirQuUpJLvSG3QW_U/edit?usp=sharing&ouid=101053715756922803081&rtpof=true&sd=true",
  },

  {
    title: "RecycleBud Innovation Project",
    description:
      "Developed a sustainability-focused innovation project featuring an interactive map platform for locating recycled-product sellers and an AI-based waste scanner to recommend potential recycled product outputs from detected waste materials.",
    icon: Recycle,
    image: recyclebudImage,
    tags: [
      "Innovation",
      "AI",
      "Maps",
      "Sustainability",
      "Computer Vision",
    ],
    github: "https://github.com/sendinandi/Recyclebud",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">
            // PROJECTS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected projects in data analytics, system analysis, business
            automation, and intelligent web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
            >
              {/* Project Image */}
              <div className="h-52 relative overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-mono mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      Source
                    </Button>
                  </a>
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