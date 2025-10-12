import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Content */}
      <div className="container mx-auto px-6 py-20 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12 animate-fade-in">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
                Digital - Visual
                <br />
                <span className="text-gradient">Designer</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl">
                Specialized in Web Development, UI/UX, and Front End Development
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Creative masterpieces delivered
                </p>
                <p className="text-5xl font-bold">20+</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/muthurajanganesan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muthurajanganesan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ganeshrajan1212@gmail.com"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+919500921812"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
