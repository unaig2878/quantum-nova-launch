import { useEffect, useRef, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";

const metrics = [
  {
    value: 70,
    label: "Aumento en Productividad",
    color: "#00bcd4",
    description: "Más eficiencia en procesos"
  },
  {
    value: 60,
    label: "Reducción de Tiempo",
    color: "#9c27b0",
    description: "En tareas manuales"
  },
  {
    value: 85,
    label: "Satisfacción del Cliente",
    color: "#00bcd4",
    description: "Clientes satisfechos"
  },
  {
    value: 50,
    label: "Ahorro en Costos",
    color: "#9c27b0",
    description: "Costos operativos reducidos"
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    metrics.map(() => 0)
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            metrics.forEach((metric, index) => {
              const duration = 2000;
              const increment = metric.value / (duration / 16);
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= metric.value) {
                  current = metric.value;
                  clearInterval(timer);
                }
                setAnimatedValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = Math.floor(current);
                  return newValues;
                });
              }, 16);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Impacto <span className="gradient-text">Medible</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reales que transforman tu negocio con automatización inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {metrics.map((metric, index) => {
            // ✅ SOLUCIÓN: Dos barras concéntricas para simular el efecto
            const chartData = [
              {
                name: 'background',
                value: 100,
                fill: '#e0e0e0'  // Color gris claro para el fondo
              },
              {
                name: 'progress',
                value: animatedValues[index],
                fill: metric.color
              }
            ];

            return (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 transition-all duration-700 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full aspect-square mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="70%"
                      outerRadius="90%"
                      data={chartData}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                      />
                      <RadialBar
                        dataKey="value"
                        cornerRadius={10}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text">
                        {animatedValues[index]}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-foreground">{metric.label}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="glass-card rounded-3xl p-10 max-w-2xl mx-auto hover:border-primary/50 transition-all duration-500 hover:scale-105">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                ¿Te gustan estos <span className="gradient-text">Resultados</span>?
              </h3>
              <p className="text-muted-foreground">
                Únete a las empresas que ya están transformando su forma de trabajar
              </p>
              <button
                onClick={() => document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 inline-block glow-effect"
              >
                Calcula tu Ahorro
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
