import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    name: "Smartphone Blaupunkt X5",
    image:
      "https://itrepairs.ie/wp-content/uploads/2024/10/blaupunkt-smart-phone-tx01-4-32gb-700x700.webp",
    description: "Smartphone haut de gamme avec caméra professionnelle",
  },
  {
    name: "PowerBank Energizer 20000mAh",
    image:
      "https://odo-cdn.imgix.net/catalog/product/1/7/1727864010.5424.jpeg?auto=compress,format&w=800&h=800&bg=fff&fit=fill",
    description: "Batterie externe haute capacité pour tous vos appareils",
  },
  {
    name: "Écouteurs sans fil Pro",
    image: "https://www.eas.ci/wp-content/uploads/2024/03/CMF_Buds_Pro-2.webp",
    description: "Son immersif avec réduction de bruit active",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Nos Produits Phares
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Découvrez notre sélection de produits technologiques de qualité
            supérieure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/devices"
            className="inline-flex items-center gap-2 bg-[#ea384c] hover:opacity-90 text-white font-medium py-2 px-6 rounded-md text-md transition-colors duration-300"
          >
            Voir tous nos produits
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
