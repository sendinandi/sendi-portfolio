import { useEffect, useState } from "react";
import { Database, Brain, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => onComplete(), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-700 ${
        phase >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      
      <div className="relative z-10 text-center">
        {/* Icons animation */}
        <div className={`flex justify-center gap-6 mb-8 transition-all duration-500 ${
          phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30">
            <Database className="h-8 w-8 text-primary" />
          </div>
          <div className={`p-4 rounded-2xl bg-accent/10 border border-accent/30 transition-all duration-500 delay-100 ${
            phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}>
            <Brain className="h-8 w-8 text-accent" />
          </div>
          <div className={`p-4 rounded-2xl bg-primary/10 border border-primary/30 transition-all duration-500 delay-200 ${
            phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
        </div>

        {/* Welcome text */}
        <h1 className={`text-4xl md:text-6xl font-bold font-mono mb-4 transition-all duration-500 ${
          phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="text-foreground">Welcome</span>
        </h1>
        
        {/* Tagline */}
        <p className={`text-xl text-muted-foreground font-mono transition-all duration-500 ${
          phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="text-primary">&lt;</span>
          Data Analyst
          <span className="text-primary"> + </span>
          AI Enthusiast
          <span className="text-primary"> /&gt;</span>
        </p>

        {/* Loading bar */}
        <div className={`mt-8 w-48 h-1 mx-auto bg-secondary rounded-full overflow-hidden transition-opacity duration-300 ${
          phase >= 2 ? "opacity-100" : "opacity-0"
        }`}>
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
            style={{ width: phase >= 3 ? "100%" : "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
