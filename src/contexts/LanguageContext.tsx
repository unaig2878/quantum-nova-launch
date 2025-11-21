import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.features": "Impacto",
    "nav.automation": "Automatización",
    "nav.contact": "Contacto",
    "nav.getStarted": "Comenzar",
    
    // Hero
    "hero.badge": "Innovación a Escala",
    "hero.title": "Automatiza tus tareas repetitivas",
    "hero.subtitle": "y céntrate en lo importante",
    "hero.description": "Recupera hasta 15 horas a la semana sin perder calidad en tus procesos.",
    "hero.cta1": "Empieza ahora Gratis",
    "hero.cta2": "Explorar Servicios",
    "hero.trust1": "99.9% Disponibilidad",
    "hero.trust2": "Soporte 24/7",
    "hero.trust3": "Certificación ISO",
    
    // Services
    "services.title": "Servicios",
    "services.subtitle": "Soluciones integrales diseñadas para acelerar tu transformación digital.",
    "services.automation": "Automatización de Procesos",
    "services.automation.desc": "Optimiza operaciones y elimina tareas repetitivas con soluciones de automatización inteligente adaptadas a tu flujo de trabajo.",
    "services.ai": "Soluciones Potenciadas por IA",
    "services.ai.desc": "Aprovecha el poder del machine learning e IA para descubrir insights, predecir tendencias y tomar decisiones basadas en datos.",
    "services.web": "Desarrollo Web Personalizado",
    "services.web.desc": "Construye aplicaciones web escalables y de alto rendimiento con frameworks modernos y tecnologías de vanguardia.",
    "services.seo": "SEO y Estrategia Digital",
    "services.seo.desc": "Potencia tu presencia online con optimización SEO integral y campañas estratégicas de marketing digital.",
    "services.cta.title": "¿Listo para Transformar tu Negocio?",
    "services.cta.desc": "Descubre cómo nuestras soluciones pueden llevar tu empresa al siguiente nivel",
    "services.cta.button": "Agenda una Consulta Gratis",
    
    // Stats
    "stats.title": "Impacto Medible",
    "stats.subtitle": "Resultados reales que transforman tu negocio con automatización inteligente.",
    "stats.productivity": "Aumento en Productividad",
    "stats.productivity.desc": "Más eficiencia en procesos",
    "stats.time": "Reducción de Tiempo",
    "stats.time.desc": "En tareas manuales",
    "stats.satisfaction": "Satisfacción del Cliente",
    "stats.satisfaction.desc": "Clientes satisfechos",
    "stats.savings": "Ahorro en Costos",
    "stats.savings.desc": "Costos operativos reducidos",
    "stats.cta.title": "¿Te gustan estos Resultados?",
    "stats.cta.desc": "Únete a las empresas que ya están transformando su forma de trabajar",
    "stats.cta.button": "Calcula tu Ahorro",
    
    // ROI Calculator
    "roi.title": "¿Cuánto Pierdes Cada Año?",
    "roi.subtitle": "Calcula el costo real de las tareas repetitivas y descubre tu potencial de ahorro",
    "roi.hourly.title": "¿Cuánto vale tu hora?",
    "roi.hourly.desc": "Define el valor de tu tiempo",
    "roi.hourly.unit": "por hora",
    "roi.hours.title": "¿Cuántas horas pierdes en tareas repetitivas?",
    "roi.hours.desc": "Tiempo perdido por semana",
    "roi.hours.unit": "por semana",
    "roi.loss": "Pierdes al año",
    "roi.savings": "Podrías ahorrar",
    "roi.efficiency": "Eficiencia ganada",
    "roi.info": "La automatización podría recuperar el 70% de ese tiempo perdido",
    "roi.cta": "Comienza a Ahorrar Ahora",
    
    // TechStack
    "tech.title": "Tecnología de Vanguardia",
    "tech.subtitle": "Impulsamos tu transformación digital con las herramientas más avanzadas",
    "tech.process.badge1": "Paso 1",
    "tech.process.badge2": "Paso 2",
    "tech.process.badge3": "Paso 3",
    "tech.process.title1": "Análisis Inteligente",
    "tech.process.title2": "Desarrollo Ágil",
    "tech.process.title3": "Optimización Continua",
    "tech.process.desc1": "Identificamos oportunidades de automatización en tus procesos actuales mediante análisis detallado y consultoría estratégica.",
    "tech.process.desc2": "Implementamos soluciones personalizadas usando las últimas tecnologías, garantizando integración perfecta con tus sistemas.",
    "tech.process.desc3": "Monitorizamos y mejoramos constantemente el rendimiento para maximizar tu ROI y adaptarnos a tus necesidades cambiantes.",
    "tech.cta.title": "¿Listo para la Transformación?",
    "tech.cta.desc": "Agenda una consulta gratuita y descubre cómo podemos ayudarte",
    "tech.cta.button": "Hablemos de tu Proyecto",
    
    // Contact
    "contact.title": "Hablemos Contigo",
    "contact.subtitle": "¿Listo para transformar tu negocio? Contacta con nuestro equipo de expertos.",
    "contact.form.name": "Nombre Completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.message": "Mensaje",
    "contact.form.placeholder.name": "Juan Pérez",
    "contact.form.placeholder.email": "juan@ejemplo.com",
    "contact.form.placeholder.message": "Cuéntanos sobre tu proyecto...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.success": "¡Mensaje enviado! Te responderemos pronto.",
    "contact.info.title": "Ponte en Contacto",
    "contact.info.desc": "Estamos aquí para ayudarte a lograr tus objetivos de transformación digital. ¡Contáctanos hoy!",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",
    "contact.info.location.address": "Madrid, España",
    "contact.info.location.street": "Calle Tecnología 123",
    
    // Footer
    "footer.brand.desc": "Transformando negocios con automatización de vanguardia y soluciones de IA.",
    "footer.quicklinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.connect": "Conecta",
    "footer.copyright": "Todos los derechos reservados.",
  },
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.features": "Impact",
    "nav.automation": "Automation",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    
    // Hero
    "hero.badge": "Innovation at Scale",
    "hero.title": "Automate your repetitive tasks",
    "hero.subtitle": "and focus on what matters",
    "hero.description": "Recover up to 15 hours per week without losing quality in your processes.",
    "hero.cta1": "Start Now for Free",
    "hero.cta2": "Explore Services",
    "hero.trust1": "99.9% Uptime",
    "hero.trust2": "24/7 Support",
    "hero.trust3": "ISO Certified",
    
    // Services
    "services.title": "Services",
    "services.subtitle": "Comprehensive solutions designed to accelerate your digital transformation.",
    "services.automation": "Process Automation",
    "services.automation.desc": "Optimize operations and eliminate repetitive tasks with intelligent automation solutions tailored to your workflow.",
    "services.ai": "AI-Powered Solutions",
    "services.ai.desc": "Leverage the power of machine learning and AI to discover insights, predict trends, and make data-driven decisions.",
    "services.web": "Custom Web Development",
    "services.web.desc": "Build scalable, high-performance web applications with modern frameworks and cutting-edge technologies.",
    "services.seo": "SEO & Digital Strategy",
    "services.seo.desc": "Boost your online presence with comprehensive SEO optimization and strategic digital marketing campaigns.",
    "services.cta.title": "Ready to Transform Your Business?",
    "services.cta.desc": "Discover how our solutions can take your company to the next level",
    "services.cta.button": "Schedule a Free Consultation",
    
    // Stats
    "stats.title": "Measurable Impact",
    "stats.subtitle": "Real results that transform your business with intelligent automation.",
    "stats.productivity": "Productivity Increase",
    "stats.productivity.desc": "More process efficiency",
    "stats.time": "Time Reduction",
    "stats.time.desc": "In manual tasks",
    "stats.satisfaction": "Client Satisfaction",
    "stats.satisfaction.desc": "Satisfied customers",
    "stats.savings": "Cost Savings",
    "stats.savings.desc": "Reduced operational costs",
    "stats.cta.title": "Like These Results?",
    "stats.cta.desc": "Join the companies already transforming how they work",
    "stats.cta.button": "Calculate Your Savings",
    
    // ROI Calculator
    "roi.title": "How Much Do You Lose Each Year?",
    "roi.subtitle": "Calculate the real cost of repetitive tasks and discover your savings potential",
    "roi.hourly.title": "What's your hourly rate worth?",
    "roi.hourly.desc": "Define the value of your time",
    "roi.hourly.unit": "per hour",
    "roi.hours.title": "How many hours do you waste on repetitive tasks?",
    "roi.hours.desc": "Time lost per week",
    "roi.hours.unit": "per week",
    "roi.loss": "You lose per year",
    "roi.savings": "You could save",
    "roi.efficiency": "Efficiency gained",
    "roi.info": "Automation could recover 70% of that wasted time",
    "roi.cta": "Start Saving Now",
    
    // TechStack
    "tech.title": "Cutting-Edge Technology",
    "tech.subtitle": "We drive your digital transformation with the most advanced tools",
    "tech.process.badge1": "Step 1",
    "tech.process.badge2": "Step 2",
    "tech.process.badge3": "Step 3",
    "tech.process.title1": "Smart Analysis",
    "tech.process.title2": "Agile Development",
    "tech.process.title3": "Continuous Optimization",
    "tech.process.desc1": "We identify automation opportunities in your current processes through detailed analysis and strategic consulting.",
    "tech.process.desc2": "We implement custom solutions using the latest technologies, ensuring seamless integration with your systems.",
    "tech.process.desc3": "We continuously monitor and improve performance to maximize your ROI and adapt to your changing needs.",
    "tech.cta.title": "Ready for Transformation?",
    "tech.cta.desc": "Schedule a free consultation and discover how we can help you",
    "tech.cta.button": "Let's Talk About Your Project",
    
    // Contact
    "contact.title": "Let's Talk",
    "contact.subtitle": "Ready to transform your business? Contact our team of experts.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Message",
    "contact.form.placeholder.name": "John Doe",
    "contact.form.placeholder.email": "john@example.com",
    "contact.form.placeholder.message": "Tell us about your project...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Message sent! We'll respond soon.",
    "contact.info.title": "Get in Touch",
    "contact.info.desc": "We're here to help you achieve your digital transformation goals. Contact us today!",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.info.location.address": "Madrid, Spain",
    "contact.info.location.street": "Technology Street 123",
    
    // Footer
    "footer.brand.desc": "Transforming businesses with cutting-edge automation and AI solutions.",
    "footer.quicklinks": "Quick Links",
    "footer.services": "Services",
    "footer.connect": "Connect",
    "footer.copyright": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
