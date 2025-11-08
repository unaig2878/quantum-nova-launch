import { Code2, Database, Cloud, Cpu, Lock, Layers } from "lucide-react";

const technologies = [
  { icon: Code2, name: "React & TypeScript" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Cloud, name: "AWS Cloud" },
  { icon: Cpu, name: "AI/ML Models" },
  { icon: Lock, name: "Cybersecurity" },
  { icon: Layers, name: "Microservices" },
];

const TechStack = () => {
  return (
    <section id="technology" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge tools and frameworks to deliver exceptional results.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 glow-effect">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
