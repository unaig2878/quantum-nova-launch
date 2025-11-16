import { useEffect, useRef, useState } from "react";
import { Cell, RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const metrics = [
  { 
    value: 70, 
    label: "Aumento en Productividad",
    color: "hsl(190 100% 50%)",
    description: "Más eficiencia en procesos"
  },
  { 
    value: 60, 
    label: "Reducción de Tiempo",
    color: "hsl(280 60% 50%)",
    description: "En tareas manuales"
  },
  { 
    value: 85, 
    label: "Satisfacción del Cliente",
    color: "hsl(190 100% 50%)",
    description: "Clientes satisfechos"
  },
  { 
    value: 50, 
    label: "Ahorro en Costos",
    color: "hsl(280 60% 50%)",
    description: "Costos operativos reducidos"
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(Array(metrics.length).fill(0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // Animate progress bars
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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Impacto <span className="gradient-text">Medible</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reales que transforman tu negocio con automatización inteligente.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const chartData = [
              {
                name: metric.label,
                value: animatedValues[index],
                fill: metric.color,
              },
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
                      outerRadius="100%"
                      data={chartData}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <RadialBar
                        background={{ fill: "hsl(var(--muted))" }}
                        dataKey="value"
                        cornerRadius={10}
                        isAnimationActive={false}
                      >
                        <Cell fill={metric.color} />
                      </RadialBar>
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
      </div>
    </section>
  );
};

export default Stats;
