import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Clock, TrendingUp, Zap } from "lucide-react";

const ROICalculator = () => {
  const [hourlyRate, setHourlyRate] = useState([50]);
  const [hoursWasted, setHoursWasted] = useState([10]);

  const weeklyLoss = hourlyRate[0] * hoursWasted[0];
  const monthlyLoss = weeklyLoss * 4;
  const yearlyLoss = monthlyLoss * 12;
  
  // Assuming automation saves 70% of that time
  const potentialSavings = yearlyLoss * 0.7;

  return (
    <section id="roi" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute right-1/4 bottom-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Cuánto <span className="gradient-text">Pierdes</span> Cada Año?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calcula el costo real de las tareas repetitivas y descubre tu potencial de ahorro
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 space-y-12">
            {/* Hourly Rate Slider */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      ¿Cuánto vale tu hora?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Define el valor de tu tiempo
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold gradient-text">
                    ${hourlyRate[0]}
                  </div>
                  <div className="text-sm text-muted-foreground">por hora</div>
                </div>
              </div>
              <Slider
                value={hourlyRate}
                onValueChange={setHourlyRate}
                max={200}
                min={10}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$10/hr</span>
                <span>$200/hr</span>
              </div>
            </div>

            {/* Hours Wasted Slider */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      ¿Cuántas horas pierdes en tareas repetitivas?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tiempo perdido por semana
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold gradient-text">
                    {hoursWasted[0]}h
                  </div>
                  <div className="text-sm text-muted-foreground">por semana</div>
                </div>
              </div>
              <Slider
                value={hoursWasted}
                onValueChange={setHoursWasted}
                max={40}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 hora/semana</span>
                <span>40 horas/semana</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Money Lost */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative glass-card rounded-2xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-destructive/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-destructive rotate-180" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Pierdes al año
                      </div>
                      <div className="text-3xl font-bold text-destructive">
                        ${yearlyLoss.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Potential Savings */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative glass-card rounded-2xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Podrías ahorrar
                      </div>
                      <div className="text-3xl font-bold gradient-text">
                        ${potentialSavings.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Percentage */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative glass-card rounded-2xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Eficiencia ganada
                      </div>
                      <div className="text-3xl font-bold text-secondary">
                        70%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  La automatización podría recuperar el 70% de ese tiempo perdido
                </p>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Comienza a Ahorrar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
