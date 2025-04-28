import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const HomeContact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Contactez-nous
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              Des questions concernant nos produits ou services ? Notre équipe
              est à votre disposition pour vous aider.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-[#ea384c]/10 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-[#ea384c]" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Appelez-nous</p>
                  <p className="text-gray-700 font-medium">
                    +225 27 22 59 44 45
                  </p>
                  <p className="text-gray-700 font-medium">
                    +225 07 07 08 80 54
                  </p>
                  <p className="text-gray-700 font-medium">
                    +225 07 48 59 01 18
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#ea384c]/10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-[#ea384c] " />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Email</p>
                  <p className="text-gray-700 font-medium">
                    infos@optimum-ci.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#ea384c]/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-[#ea384c]" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Adresse</p>
                  <p className="text-gray-700 font-medium">
                    Cocody Riviera Palmeraie Rue Ministre
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-optimum-black mb-6">
              Envoyez-nous un message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
