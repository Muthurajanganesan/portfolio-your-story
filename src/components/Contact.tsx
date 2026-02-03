import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { ContactModal } from "./ContactModal";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ganeshrajan1212@gmail.com",
      href: "mailto:ganeshrajan1212@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9500921812",
      href: "tel:+919500921812"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muthurajanganesan",
      href: "https://www.linkedin.com/in/muthurajanganesan"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@muthurajanganesan",
      href: "https://github.com/muthurajanganesan"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Knowledge Institute of Technology",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <Card className="p-8 card-gradient shadow-card">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground break-words">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-6">
              Open to opportunities in software development, UI/UX design, and innovative tech projects
            </p>
            <ContactModal>
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Send Message
              </Button>
            </ContactModal>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
