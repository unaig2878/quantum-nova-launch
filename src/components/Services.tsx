import { useEffect, useRef, useState } from "react";
import { Bot, Code, TrendingUp, Zap } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Automatización de Procesos",
    description:
      "Optimiza operaciones y elimina tareas repetitivas con soluciones de automatización inteligente adaptadas a tu flujo de trabajo.",
  },
  {
    icon: Bot,
    title: "Soluciones Potenciadas por IA",
    description:
      "Aprovecha el poder del machine learning e IA para descubrir insights, predecir tendencias y tomar decisiones basadas en datos.",
  },
  {
    icon: Code,
    title: "Desarrollo Web Personalizado",
    description:
      "Construye aplicaciones web escalables y de alto rendimiento con frameworks modernos y tecnologías de vanguardia.",
  },
  {
    icon: TrendingUp,
    title: "SEO y Estrategia Digital",
    description:
      "Potencia tu presencia online con optimización SEO integral y campañas estratégicas de marketing digital.",
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales diseñadas para acelerar tu transformación digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`glass-card rounded-2xl p-8 group hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? "animate-slide-up opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors glow-effect">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
