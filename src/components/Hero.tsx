
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { language, t } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="hero-section min-h-screen flex items-center justify-center px-4" 
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto fade-in">
          <p className="text-primary-foreground mb-4 text-lg md:text-xl tracking-wide">
            {t("hero.welcome")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white mb-8 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-gray-200 mb-10 text-lg md:text-xl max-w-xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-white px-8 py-6 text-lg transition duration-300"
            >
              {t("hero.getStarted")}
              <ArrowRight className={`${language === "ar" ? "mr-2 rtl:rotate-180" : "ml-2"} h-5 w-5`} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg transition duration-300"
            >
              {t("hero.viewWork")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
