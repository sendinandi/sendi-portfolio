import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileAvatar from "@/assets/FotoSendiCyber.png";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow animation-delay-200" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-mono text-primary border border-primary/30 rounded-full bg-primary/5">
                &lt;Data Engineer /&gt; + &lt;AI Enthusiast /&gt;
              </span>
            </div>
            
            <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6">
              <span className="text-foreground">Hello, I'm </span>
              <br className="hidden sm:block" />
              <span className="text-gradient glow-text">Sendi Wildanto</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Building intelligent data pipelines and exploring the frontiers of 
              <span className="text-primary"> artificial intelligence</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" onClick={scrollToProjects}>
                View My Work
              </Button>
              <Button variant="glow" size="xl">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up animation-delay-400 flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/sendinandi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sendi-wildanto-192a38282/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sendiwildanto@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Profile image */}
          <div className="opacity-0 animate-fade-in-up animation-delay-200 flex-shrink-0">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-3xl scale-110" />
              
              {/* Rotating border */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-[spin_8s_linear_infinite] opacity-60" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background">
                <img 
                  src={profileAvatar} 
                  alt="Alex Chen - Data Engineer & AI Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-8 px-3 py-1.5 bg-card border border-accent/50 rounded-full text-xs font-mono text-accent animate-float shadow-[0_0_20px_hsl(var(--accent)/0.3)]">
                Data Analyst
              </div>
              <div className="absolute -bottom-2 -left-4 px-3 py-1.5 bg-card border border-accent/50 rounded-full text-xs font-mono text-accent animate-float animation-delay-200 shadow-[0_0_20px_hsl(var(--accent)/0.3)]">
                System Analyst
              </div>
              <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-card border border-primary/50 rounded-full text-xs font-mono text-primary animate-float shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                Python
              </div>
              <div className="absolute top-1/2 -right-8 px-3 py-1.5 bg-card border border-primary/50 rounded-full text-xs font-mono text-primary animate-float animation-delay-300 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                AI/ML
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-500">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
