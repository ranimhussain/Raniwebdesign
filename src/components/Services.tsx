
import { Code, Search, Palette } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "We create stunning, responsive websites that combine visual appeal with seamless functionality to deliver exceptional user experiences.",
    icon: Code,
    features: ["Custom Website Design", "Responsive Development", "CMS Integration", "E-commerce Solutions"],
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic with our data-driven SEO strategies tailored to your business goals.",
    icon: Search,
    features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Performance Analytics"],
  },
  {
    id: 3,
    title: "Visual Identity Design",
    description:
      "We craft distinctive brand identities that capture your essence and create meaningful connections with your audience.",
    icon: Palette,
    features: ["Logo Design", "Brand Guidelines", "Marketing Collateral", "Brand Strategy"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business stand out in today's competitive landscape.
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
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              <div className="mt-auto">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
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
