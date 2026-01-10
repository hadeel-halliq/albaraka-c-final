import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import ProductionProcess from "./Components/ProductionProcess";

import { useEffect } from "react";
import ProductsSection from "./Components/ProductsSection";

export default function Home() {
  useEffect(() => {
    document.title = "الصفحة الرئيسية | معادن البركة";
    
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductionProcess />
      <ProductsSection/>
    </>
  );
}
