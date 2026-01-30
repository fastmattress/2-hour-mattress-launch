import { Clock, Truck, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "2-Hour Delivery",
    description: "Lightning-fast delivery to your doorstep. If we're late, it's on us!",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "No hidden fees. Free delivery on all orders, every time.",
  },
  {
    icon: Shield,
    title: "100-Night Trial",
    description: "Sleep on it. If you don't love it, we'll pick it up for free.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Top-rated mattresses at unbeatable prices. Quality you can trust.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          Why Choose 2 Hour Mattress?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
