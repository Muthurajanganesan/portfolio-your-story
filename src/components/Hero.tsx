import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.png";



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-xl overflow-hidden mb-4">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Muthurajan G</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Engineering Student | Web Developer | UI/UX Designer
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through technology.
            Experienced in full-stack development, UI/UX design, and machine learning
            with a strong track record in hackathons and technical competitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://www.linkedin.com/in/muthurajan-g-45500425a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/muthurajanganesan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:ganeshrajan1212@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919500921812"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
