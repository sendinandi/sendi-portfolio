import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow animation-delay-200" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-mono text-primary border border-primary/30 rounded-full bg-primary/5">
            &lt;Data Engineer /&gt; + &lt;AI Enthusiast /&gt;
          </span>
        </div>
        
        <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6">
          <span className="text-foreground">Hello, I'm </span>
          <span className="text-gradient glow-text">Alex Chen</span>
        </h1>
        
        <p className="opacity-0 animate-fade-in-up animation-delay-200 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Building intelligent data pipelines and exploring the frontiers of 
          <span className="text-primary"> artificial intelligence</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="xl" onClick={scrollToProjects}>
            View My Work
          </Button>
          <Button variant="glow" size="xl">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="opacity-0 animate-fade-in-up animation-delay-400 flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:hello@example.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            <Mail className="h-6 w-6" />
          </a>
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
