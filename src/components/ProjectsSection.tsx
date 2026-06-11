import { Brain, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

import sipdaImage from "@/assets/projects/sipda-dashboard.webp";
import portfolioImage from "@/assets/projects/portfolio-website.webp";
import malnutritionImage from "@/assets/projects/malnutrition-analysis.webp";
import sentimentImage from "@/assets/projects/sentiment-analysis.webp";

const projects = [
  {
    title: "SIPDA (Sistem Prediksi Data)",
    description:
      "Mengembangkan platform analisis data cerdas berbasis web yang mengintegrasikan Machine Learning dan Generative AI untuk membantu pengambilan keputusan strategis. Sistem ini memungkinkan pengguna melakukan analisis prediktif, diagnostik, dan eksploratif secara otomatis tanpa memerlukan keahlian koding yang mendalam.",
    icon: Workflow,
    image: sipdaImage,
    tags: ["Python", "Flask", "MySQL"],
    github: "https://github.com/sendinandi/flask-ml-app",
  },
  {
    title: "Website Portofolio Pribadi",
    description:
      "Dirancang dan dikembangkan dari awal untuk menampilkan proyek dan keahlian saya. Fokus pada desain yang bersih, responsif, dan pengalaman pengguna yang baik.",
    icon: Brain,
    image: portfolioImage,
    tags: ["TypeScript", "Git"],
    github: "https://github.com/sendinandi/data-ai-forge",
  },
  {
    title: "Analisis Eksploratif Data Malnutrisi",
    description:
      "Melakukan pembersihan, analisis, dan visualisasi data untuk menemukan pola dan korelasi pada dataset kasus malnutrisi di suatu wilayah.",
    icon: Brain,
    image: malnutritionImage,
    tags: ["Python", "Tableau", "Pentaho"],
    github:
      "https://docs.google.com/document/d/1XIH1U0TPDNZrTtYHY1RQoKSv5M-tgqBe/edit?usp=sharing&ouid=101053715756922803081&rtpof=true&sd=true",
  },
  {
    title: "Analisis Sentimen Ulasan Produk",
    description:
      "Menerapkan metode VADER untuk menganalisis dan mengklasifikasikan sentimen positif, negatif, dan netral dari dataset ulasan produk e-commerce.",
    icon: Workflow,
    image: sentimentImage,
    tags: ["Python", "VADER", "Jupyter Notebook"],
    github:
      "https://docs.google.com/document/d/1IOGmhlxwdgdxsAVjirQuUpJLvSG3QW_U/edit?usp=sharing&ouid=101053715756922803081&rtpof=true&sd=true",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">
            // PROJECTS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-mono mt-4 mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of data engineering and AI projects that showcase my
            technical expertise.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Project image */}
              <div className="h-48 relative overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
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