import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src={logo} 
          alt="2 Hour Mattress Logo" 
          className="w-64 md:w-80 lg:w-96 mx-auto mb-8 animate-float"
        />
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Your Dream Mattress, <span className="text-accent">Delivered Fast</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get your perfect mattress delivered to your door in just 2 hours — or it's free!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg">
            <Phone className="mr-2 h-5 w-5" />
            Call 818-MATTRES
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full">
            Shop Mattresses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
