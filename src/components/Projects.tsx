import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gesture Learn",
      description: "An innovative learning application designed for deaf and dumb individuals, featuring sign language identification using machine learning algorithms. Includes modules for Parents, Teachers, and Students with comprehensive UI/UX design.",
      technologies: ["React.js", "Machine Learning", "Figma", "UI/UX"],
      highlights: ["Published paper in International Conference", "Successful Figma design implementation"],
      color: "border-accent"
    },
    {
      title: "Smart Car Parking System",
      description: "Developed an intelligent parking management system with efficient vehicle entry and exit tracking. Demonstrated full-stack development capabilities and problem-solving skills in real-world scenarios.",
      technologies: ["Java", "Angular", "Database Management"],
      highlights: ["Full-stack implementation", "Real-time vehicle tracking"],
      color: "border-primary"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Selected <span className="text-gradient">Work 20-24''</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Creative masterpieces delivered in the last 8 years
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 card-gradient shadow-card hover:shadow-hover transition-all duration-300 border-l-4 ${project.color}`}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2 text-muted-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2 text-muted-foreground">Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button size="sm" variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
