import { useEffect, useRef, useState } from "react";
import { Bot, Code, TrendingUp, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Zap,
      title: t("services.automation"),
      description: t("services.automation.desc"),
    },
    {
      icon: Bot,
      title: t("services.ai"),
      description: t("services.ai.desc"),
    },
    {
      icon: Code,
      title: t("services.web"),
      description: t("services.web.desc"),
    },
    {
      icon: TrendingUp,
      title: t("services.seo"),
      description: t("services.seo.desc"),
    },
  ];

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
            {t("services.title").split(" ")[0]} <span className="gradient-text">{t("services.title").split(" ")[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
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
                className={`glass-card rounded-2xl p-8 group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "animate-slide-up opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-rows-[auto_1fr_auto] h-full">
                  <div className="flex items-start mb-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center mr-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 glow-effect">
                      <Icon className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    {/* Title */}
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex-grow text-right">
                      {service.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {service.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-500 self-end"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="glass-card rounded-3xl p-12 max-w-3xl mx-auto relative overflow-hidden group hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                {t("services.cta.title").split(" ")[0]} <span className="gradient-text">{t("services.cta.title").split(" ")[2]}</span> {t("services.cta.title").split(" ").slice(3).join(" ")}
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                {t("services.cta.desc")}
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 glow-effect"
              >
                {t("services.cta.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
