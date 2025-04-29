import React from "react";
import { Monitor, Server, Network } from "lucide-react";

const ServiceInformatique = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-[#ea384c] " />,
      title: "Support Technique",
      description:
        "Assistance technique rapide et efficace pour tous vos équipements informatiques",
    },
    {
      icon: <Server className="w-12 h-12 text-[#ea384c] " />,
      title: "Infrastructure IT",
      description:
        "Installation et maintenance de serveurs, réseaux et systèmes",
    },
    {
      icon: <Network className="w-12 h-12 text-[#ea384c] " />,
      title: "Solutions Réseau",
      description: "Conception et déploiement de solutions réseau sécurisées",
    },
  ];

  return (
    <section>
      <div className="pt-40 text-white py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Services Informatiques
          </h1>
          <p className="text-lg text-white mb-12 max-w-3xl">
            Optimum Group vous propose une gamme complète de services
            informatiques pour répondre à tous vos besoins professionnels.
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

export default ServiceInformatique;
