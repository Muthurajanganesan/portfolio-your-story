import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Gesture Learn",
      description: "An innovative learning application designed for deaf and dumb individuals, featuring sign language identification using machine learning algorithms. Includes modules for Parents, Teachers, and Students with comprehensive UI/UX design.",
      technologies: ["React.js", "Machine Learning", "Figma", "UI/UX"],
      highlights: ["Published paper in International Conference", "Successful Figma design implementation"],
      color: "border-accent",
      github: "https://github.com/Muthurajanganesan/rps.game.git"
    },
    {
      title: "Smart Car Parking System",
      description: "Developed an intelligent parking management system with efficient vehicle entry and exit tracking. Demonstrated full-stack development capabilities and problem-solving skills in real-world scenarios.",
      technologies: ["Java", "Angular", "Database Management"],
      highlights: ["Full-stack implementation", "Real-time vehicle tracking"],
      github: "#"
    },
    {
      title: "The Books World",
      description: "Complete full-stack e-commerce platform for an online bookstore. Features user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Spring Boot", "MySQL", "Java"],
      highlights: ["Full-stack e-commerce", "Secure authentication", "Payment gateway ready"],
      color: "border-accent",
      github: "https://github.com/Muthurajanganesan/the-books-world.git"
    },
    {
      title: "Todo List",
      description: "A clean and efficient task management application to organize daily activities. Features intuitive task creation, completion tracking, and data persistence.",
      technologies: ["React", "CSS", "Local Storage"],
      highlights: ["Simple & Intuitive", "Data Persistence", "Responsive UI"],
      color: "border-primary",
      github: "https://github.com/Muthurajanganesan/Todolist.git"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that make a real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                className="p-4 card-gradient shadow-card h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Title Skeleton */}
                  <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>

                  {/* Description Skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                    <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                  </div>

                  {/* Tech Badges Skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-shimmer"></div>
                      <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-shimmer"></div>
                      <div className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded-full animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Highlights Skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                {/* Button Skeleton */}
                <div className="mt-6">
                  <div className="h-9 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer"></div>
                </div>
              </Card>
            ))
            : projects.map((project, index) => (
              <Card
                key={index}
                className={`p-4 card-gradient shadow-card hover:shadow-hover transition-all duration-300 border-l-4 ${project.color} h-full flex flex-col justify-between`}
              >
                <div>
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
                </div>

                <div className="flex gap-3 mt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
