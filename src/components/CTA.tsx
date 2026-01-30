import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta-gradient py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Ready for Better Sleep?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Call us now or visit our showroom. Your dream mattress is just 2 hours away!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg">
            <Phone className="mr-2 h-5 w-5" />
            818-MATTRES
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
            <MapPin className="mr-2 h-5 w-5" />
            Find a Store
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
