
import { Code, Search, Palette } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { language, t } = useLanguage();
  
  const services = [
    {
      id: 1,
      titleKey: "services.web.title",
      descriptionKey: "services.web.description",
      icon: Code,
      features: [
        "services.web.feature1",
        "services.web.feature2",
        "services.web.feature3",
        "services.web.feature4"
      ],
    },
    {
      id: 2,
      titleKey: "services.seo.title",
      descriptionKey: "services.seo.description",
      icon: Search,
      features: [
        "services.seo.feature1",
        "services.seo.feature2",
        "services.seo.feature3",
        "services.seo.feature4"
      ],
    },
    {
      id: 3,
      titleKey: "services.visual.title",
      descriptionKey: "services.visual.description",
      icon: Palette,
      features: [
        "services.visual.feature1",
        "services.visual.feature2",
        "services.visual.feature3",
        "services.visual.feature4"
      ],
    },
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white rounded-lg shadow-lg p-8 flex flex-col h-full"
            >
              <div className="mb-6">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 mb-6">{t(service.descriptionKey)}</p>
              </div>
              <div className="mt-auto">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
                      <span className="text-gray-700">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
