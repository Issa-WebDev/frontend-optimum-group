import React from "react";
import { Printer, File, Folder } from "lucide-react";

const ServiceBureautique = () => {
  const services = [
    {
      icon: <Printer className="w-12 h-12 text-[#ea384c]" />,
      title: "Solutions d'Impression",
      description:
        "Imprimantes et photocopieurs professionnels avec service de maintenance",
    },
    {
      icon: <File className="w-12 h-12 text-[#ea384c]" />,
      title: "Gestion Documentaire",
      description:
        "Solutions de numérisation et de gestion électronique des documents",
    },
    {
      icon: <Folder className="w-12 h-12 text-[#ea384c] " />,
      title: "Fournitures de Bureau",
      description:
        "Fourniture de matériel et consommables de bureau de qualité",
    },
  ];

  return (
    <section>
      <div className="pt-40 text-white py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Services Bureautiques
          </h1>
          <p className="text-lg text-white mb-12 max-w-3xl">
            Des solutions bureautiques complètes pour optimiser votre
            environnement de travail.
          </p>
        </div>
      </div>

      <div className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-optimum-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBureautique;
