import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Quantum Nova</h3>
            <p className="text-muted-foreground text-sm">
              {t("footer.brand.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quicklinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">
                  {t("nav.features")}
                </a>
              </li>
              <li>
                <a href="#automation" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">
                  {t("nav.automation")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("services.automation")}</li>
              <li>{t("services.ai")}</li>
              <li>{t("services.web")}</li>
              <li>{t("services.seo")}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 hover:rotate-12"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 hover:rotate-12"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 hover:rotate-12"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Quantum Nova. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
