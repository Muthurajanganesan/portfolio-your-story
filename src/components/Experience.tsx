import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "VEI Technologies",
      location: "Chennai",
      role: "Web Development Intern",
      period: "Mar 2024 - Apr 2024",
      description: "Developed responsive web pages using HTML, CSS, and JavaScript. Gained hands-on experience in front-end development and modern web technologies.",
      type: "Internship"
    },
    {
      company: "IPCS Global Solutions",
      location: "Salem",
      role: "Data Science Intern",
      period: "Mar 2023 - Apr 2023",
      description: "Virtual Internship Program on Data Science. Learned predictive modeling and exploratory data analysis using Python and SQL.",
      type: "Internship"
    },
    {
      company: "Knowledge Institute of Technology",
      location: "KIOT",
      role: "Figma Design Course",
      period: "Jan 2024 - Feb 2024",
      description: "Developed interactive designs in Figma and learned advanced design tools and options. Enhanced UI/UX design capabilities.",
      type: "Value Added Course"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional internships and continuous skill development
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 card-gradient shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-lg text-foreground/90">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed ml-14">
                    {exp.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground md:flex-col md:items-end">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mt-2">
                    {exp.type}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
