import React from "react";
import { Building, Building2, Briefcase } from "lucide-react";

const ServiceGenieCivil = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-[#ea384c] " />,
      title: "Construction",
      description: "Services de construction et rénovation de bâtiments",
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#ea384c] " />,
      title: "Infrastructure",
      description: "Développement et maintenance d'infrastructures",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#ea384c] " />,
      title: "Conseil",
      description: "Conseil en ingénierie et gestion de projets",
    },
  ];

  return (
    <section>
      <div className="pt-40 text-white py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Génie Civil
          </h1>
          <p className="text-lg text-white mb-12 max-w-3xl">
            Services d'ingénierie et de construction pour vos projets
            d'infrastructure.
          </p>
        </div>
      </div>

      <div className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#000000] mb-3">
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

export default ServiceGenieCivil;
