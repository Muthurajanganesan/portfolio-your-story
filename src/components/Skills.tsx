import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Users, Languages, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code2,
      color: "text-primary",
      skills: ["C Programming", "Java", "Web Development", "React.js", "Angular", "Python", "SQL"]
    },
    {
      title: "Design",
      icon: Palette,
      color: "text-accent",
      skills: ["UI/UX Design", "Figma", "Responsive Design", "User Research"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-primary",
      skills: ["Team Work", "Communication", "Leadership", "Problem-Solving", "Project Management"]
    },
    {
      title: "Languages",
      icon: Languages,
      color: "text-accent",
      skills: ["Tamil (Fluent)", "English (Fluent)", "Japanese (N5)", "Hindi (Basics)"]
    },
    {
      title: "Specializations",
      icon: Lightbulb,
      color: "text-primary",
      skills: ["Data Science", "Machine Learning", "Full-Stack Development", "Sign Language Recognition"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning development, design, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 card-gradient shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
