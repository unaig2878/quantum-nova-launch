import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("contact.title").split(" ")[0]} <span className="gradient-text">{t("contact.title").split(" ")[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("contact.form.placeholder.name")}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t("contact.form.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.form.placeholder.email")}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("contact.form.placeholder.message")}
                  rows={5}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 glow-effect text-lg py-6 transition-all duration-300"
              >
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold">{t("contact.info.title")}</h3>
              <p className="text-muted-foreground">
                {t("contact.info.desc")}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{t("contact.info.email")}</div>
                    <a
                      href="mailto:contacto@quantumnova.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contacto@quantumnova.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{t("contact.info.phone")}</div>
                    <a
                      href="tel:+34555123456"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +34 (555) 123-456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{t("contact.info.location")}</div>
                    <p className="text-muted-foreground">
                      {t("contact.info.location.address")}
                      <br />
                      {t("contact.info.location.street")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
