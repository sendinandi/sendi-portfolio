import { ExternalLink, Github, Database, Brain, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SIPDA (Sistem Prediksi Data)",
    description: "Mengembangkan platform analisis data cerdas berbasis web yang mengintegrasikan Machine Learning dan Generative AI untuk membantu pengambilan keputusan strategis. Sistem ini memungkinkan pengguna melakukan analisis prediktif, diagnostik, dan eksploratif secara otomatis tanpa memerlukan keahlian koding yang mendalam.",
    icon: Workflow,
    tags: ["Python", "Flask", "MySQL"],
    gradient: "from-primary/20 to-accent/20",
    github: "https://github.com/sendinandi/flask-ml-app",
  },
  {
    title: "Website Portofolio Pribadi",
    description: "Dirancang dan dikembangkan dari awal untuk menampilkan proyek dan keahlian saya. Fokus pada desain yang bersih, responsif, dan pengalaman pengguna yang baik.",
    icon: Brain,
    tags: ["Typescript", "Git"],
    gradient: "from-primary/20 to-accent/20",
    github: "https://github.com/sendinandi/data-ai-forge",
  },
  {
    title: "Analisis Eksploratif Data Malnutrisi",
    description: "Melakukan pembersihan, analisis, dan visualisasi data untuk menemukan pola dan korelasi pada dataset kasus malnutrisi di suatu wilayah.",
    icon: Brain,
    tags: ["MPython", "Tableau", "Pentahoo"],
    gradient: "from-accent/20 to-primary/20",
    github: "https://docs.google.com/document/d/1XIH1U0TPDNZrTtYHY1RQoKSv5M-tgqBe/edit?usp=sharing&ouid=101053715756922803081&rtpof=true&sd=true",
  },
  {
    title: "Analisis Sentimen Ulasan Produk",
    description: "Menerapkan metode VADER untuk menganalisis dan mengklasifikasikan sentimen (positif, negatif, netral) dari dataset ulasan produk e-commerce.",
    icon: Workflow,
    tags: ["Python", "Vader", "Jupyter Notebook"],
    gradient: "from-primary/20 to-accent/20",
    github: "https://docs.google.com/document/d/1IOGmhlxwdgdxsAVjirQuUpJLvSG3QW_U/edit?usp=sharing&ouid=101053715756922803081&rtpof=true&sd=true",
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
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                  <Button variant="outline" size="sm" className="flex-1">
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
