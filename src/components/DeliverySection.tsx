import deliveryVan from "@/assets/delivery-van.jpg";

const DeliverySection = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Delivered in <span className="text-accent">2 Hours</span> or It's Free!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're so confident in our speedy delivery, we guarantee it. No waiting days for your new mattress.
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={deliveryVan} 
            alt="2 Hour Mattress Delivery Van" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
