import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      category: "Competitions",
      icon: Trophy,
      color: "text-primary",
      items: [
        "🥈 2nd Place - Coding Contest at KPR Institute of Engineering and Technology",
        "🥈 2nd Place - Hackathons at RVS College & Adhiyamaan College",
        "🥇 1st Place - Talkathon at KSR College",
        "🥇 1st Place - Tech Quiz at SRK College",
        "📋 SIH 2024 - Reached waiting list stage after evaluations"
      ]
    },
    {
      category: "Certifications",
      icon: Award,
      color: "text-accent",
      items: [
        "🎓 NPTEL Python Programming - Silver Badge",
        "🌏 JLPT N5 - Japanese Language Proficiency",
        "📄 Published Paper - International Conference on Gesture Learn",
        "✅ Oracle, UI Path, ICT Academy, Cisco Certifications",
        "🏆 Multiple prizes for outstanding paper presentations"
      ]
    },
    {
      category: "Awards & Honors",
      icon: Star,
      color: "text-primary",
      items: [
        "🏅 Achiever's Award - ISTE Ramanujam Mathematics Competition",
        "🎖️ NPTEL Recognition - 75% score achievement",
        "👔 Representative Award - College association leadership",
        "🎤 Most Active Technical Presenter - College level recognition"
      ]
    },
    {
      category: "Leadership",
      icon: Users,
      color: "text-accent",
      items: [
        "📌 Secretary - CodeWare Development Club, KIOT (2025 - Present)",
        "🚀 Member - Istart Cell, KIOT",
        "🎯 Organized multiple technical events and competitions",
        "💡 Active participant in SIH, Accenture Hackathon, MSME Innovation Challenge"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognized for excellence in technical competitions and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={index}
                className="p-6 card-gradient shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{section.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-foreground/80 flex items-start gap-3 leading-relaxed"
                    >
                      <span className="text-accent mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
