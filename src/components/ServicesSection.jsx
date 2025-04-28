import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Laptop,
  Printer,
  Anchor,
  Smartphone,
  Building,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Informatique",
    description:
      "Solutions informatiques sur mesure pour votre entreprise, incluant le matériel, les logiciels et le support technique.",
    Icon: Laptop,
  },
  {
    title: "Bureautique",
    description:
      "Équipements et fournitures de bureau de qualité supérieure pour optimiser votre espace de travail.",
    Icon: Printer,
  },
  {
    title: "Avitaillement Maritime",
    description:
      "Services spécialisés pour le secteur maritime, incluant la fourniture d'équipements de navigation et de communication.",
    Icon: Anchor,
  },
  {
    title: "Devices",
    description:
      "Produits technologiques de pointe des meilleures marques pour les particuliers et professionnels.",
    Icon: Smartphone,
  },
  {
    title: "Génie Civil",
    description:
      "Services d'ingénierie et de construction pour les projets d'infrastructure et de bâtiment.",
    Icon: Building,
  },
  {
    title: "Support & Maintenance",
    description:
      "Services de maintenance préventive et corrective pour assurer le bon fonctionnement de vos équipements.",
    Icon: Wrench,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-optimum-black">
            Nos Services
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Découvrez l'ensemble de nos solutions technologiques adaptées aux
            besoins de votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
