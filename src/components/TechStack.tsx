import { DollarSign, TrendingUp, Users, Headset } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const processes = [
  {
    icon: DollarSign,
    title: "Facturación Automática",
    description:
      "Genera y envía facturas recurrentes automáticamente. Recordatorios de pago escalonados y conciliación bancaria integrada. Reduce 50% el tiempo administrativo.",
    badge: "Finanzas",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Automatización de Ventas",
    description:
      "Captura leads desde formularios, scoring automático y asignación inteligente a vendedores. Secuencias de email y follow-ups sin intervención manual. +20-30% conversión.",
    badge: "Marketing & Ventas",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Recursos Humanos Automatizados",
    description:
      "Onboarding de empleados en días en vez de semanas. Aprobación de vacaciones con flujos automáticos y actualización de calendarios compartidos.",
    badge: "Recursos Humanos",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Headset,
    title: "Soporte Inteligente 24/7",
    description:
      "Chatbot responde FAQs, tickets automáticos clasificados por prioridad y asignación inteligente. Reduce 40% el tiempo de respuesta y aumenta 25% la satisfacción.",
    badge: "Atención al Cliente",
    color: "from-orange-500 to-red-500",
  },
];

const TechStack = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="automation" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Procesos que Automatizamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Libera tiempo, reduce errores y escala tu negocio sin contratar más personal
          </p>
        </div>

        {/* Process Cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`glass-card rounded-2xl p-8 md:p-12 transition-all duration-700 hover:scale-[1.02] ${
                  visibleCards[index]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
                style={{
                  transitionDelay: visibleCards[index] ? "0ms" : `${index * 200}ms`,
                }}
              >
                <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start relative">
                  {/* Badge */}
                  <div className="absolute top-0 right-0">
                    <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
                      {process.badge}
                    </span>
                  </div>

                  {/* Left Column - Icon & Title */}
                  <div className="flex flex-col items-start gap-4 md:min-w-[280px]">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {process.title}
                    </h3>
                  </div>

                  {/* Right Column - Description */}
                  <div className="md:pt-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
