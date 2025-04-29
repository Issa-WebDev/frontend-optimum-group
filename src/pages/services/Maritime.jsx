import React from "react";
import { Anchor, Ship, Radio } from "lucide-react";

const ServiceMaritime = () => {
  const services = [
    {
      icon: <Anchor className="w-12 h-12 text-[#ea384c] " />,
      title: "Équipement Maritime",
      description:
        "Fourniture d'équipements spécialisés pour navires et bateaux",
    },
    {
      icon: <Radio className="w-12 h-12 text-[#ea384c] " />,
      title: "Communication Maritime",
      description: "Systèmes de communication et navigation maritime",
    },
  ];

  return (
    <section>
      <div className="pt-40 text-white py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Avitaillement Maritime
          </h1>
          <p className="text-lg text-white mb-12 max-w-3xl">
            Solutions complètes d'avitaillement et d'équipement pour le secteur
            maritime.
          </p>
        </div>
      </div>

      <div className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-optimum-black mb-3">
                  {service.title}
                </h3>
                <p className="text-optimum-lightgray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMaritime;
