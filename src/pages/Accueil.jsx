import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductSection";
import References from "../components/References";
import HomeContact from "../components/HomeContact";

const Accueil = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <References />
      <HomeContact />
    </main>
  );
};

export default Accueil;
