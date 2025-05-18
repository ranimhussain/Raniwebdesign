
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto fade-in">
          <p className="text-primary-foreground mb-4 text-lg md:text-xl tracking-wide">Welcome to RANI Studio</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white mb-8 leading-tight">
            We Design Brands <br className="hidden sm:block" />
            That Matter
          </h1>
          <p className="text-gray-200 mb-10 text-lg md:text-xl max-w-xl mx-auto">
            Creating exceptional digital experiences that elevate your brand
            and drive meaningful connections with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-white px-8 py-6 text-lg transition duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg transition duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
