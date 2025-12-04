import { ExternalLink, Github, Database, Brain, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Analytics Pipeline",
    description: "End-to-end streaming data pipeline processing 1M+ events/sec with Apache Kafka, Spark Streaming, and real-time dashboards.",
    icon: Database,
    tags: ["Kafka", "Spark", "Python", "AWS"],
    gradient: "from-primary/20 to-accent/20",
    link: "#",
    github: "#",
  },
  {
    title: "ML Model Serving Platform",
    description: "Scalable ML inference platform with automated model versioning, A/B testing, and monitoring using MLflow and Kubernetes.",
    icon: Brain,
    tags: ["MLflow", "Kubernetes", "FastAPI", "Docker"],
    gradient: "from-accent/20 to-primary/20",
    link: "#",
    github: "#",
  },
  {
    title: "Intelligent ETL Orchestration",
    description: "Self-healing data pipeline framework with anomaly detection, auto-retry mechanisms, and intelligent scheduling.",
    icon: Workflow,
    tags: ["Airflow", "dbt", "Snowflake", "Python"],
    gradient: "from-primary/20 to-accent/20",
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">// PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of data engineering and AI projects that showcase my technical expertise.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <project.icon className="h-20 w-20 text-primary/60 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-mono mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
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
                
                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="glow" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
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
