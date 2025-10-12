import { Card } from "@/components/ui/card";
import { GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driven by innovation and passionate about solving real-world problems through technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 card-gradient shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Objective</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To leverage my skills and dedication to drive company success while continuously 
                  improving my professional abilities in a collaborative environment. I aspire to 
                  work in challenging roles where I can utilize my skills effectively, contribute 
                  to organizational growth, and achieve personal development.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-gradient shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">
                      BE - Computer Science and Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Knowledge Institute of Technology
                    </p>
                    <p className="text-sm text-accent font-medium">
                      CGPA: 8.9 / 89% • 2022 - 2026
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-foreground/80">
                      <span className="font-medium">HSC:</span> 78% • Bala Barathi MHSS
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-medium">SSLC:</span> 73% • Bala Barathi MHSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
