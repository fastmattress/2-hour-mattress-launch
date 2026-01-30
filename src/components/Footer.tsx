import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src={logo} 
            alt="2 Hour Mattress Logo" 
            className="w-40 brightness-0 invert"
          />
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground font-semibold text-lg">
              Call Us: 818-MATTRES
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">
              Serving Los Angeles & Surrounding Areas
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} 2 Hour Mattress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
