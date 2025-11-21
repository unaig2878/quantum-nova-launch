import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer hover:border-primary/50">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">{t("hero.badge")}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">{t("hero.title")}</span>
            <br />
            {t("hero.subtitle")}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect text-lg px-8 group"
            >
              {t("hero.cta1")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-border hover:bg-primary/10 text-lg px-8"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta2")}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform"></div>
              <span className="group-hover:text-foreground transition-colors">{t("hero.trust1")}</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform"></div>
              <span className="group-hover:text-foreground transition-colors">{t("hero.trust2")}</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform"></div>
              <span className="group-hover:text-foreground transition-colors">{t("hero.trust3")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hover:scale-125 transition-transform cursor-pointer"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 hover:border-secondary transition-colors">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
