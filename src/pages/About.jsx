import React from "react";
import { Medal, Users, Book, Target } from "lucide-react";

const About = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="bg-[#000000] pt-40 text-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À propos d'OPTIMUM GROUP
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Leader dans la fourniture de solutions technologiques innovantes en
            Côte d'Ivoire, servant les entreprises et les particuliers depuis
            plus de 10 ans.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="text-[#ea384c] w-8 h-8 mr-3" />
              <h2 className="text-xl font-bold text-optimum-black">
                Notre Mission
              </h2>
            </div>
            <p className="text-gray-700">
              Fournir des solutions technologiques innovantes et des services de
              qualité supérieure pour répondre aux besoins spécifiques de nos
              clients, tout en contribuant au développement numérique de
              l'Afrique.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Book className="text-[#ea384c] w-8 h-8 mr-3" />
              <h2 className="text-xl font-bold text-optimum-black">
                Notre Vision
              </h2>
            </div>
            <p className="text-gray-700">
              Devenir le leader incontesté des solutions technologiques en
              Afrique de l'Ouest, reconnu pour notre excellence, notre
              innovation et notre engagement envers la satisfaction client.
            </p>
          </div>
        </div>
      </div>

      {/* Valeurs */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-optimum-black text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Medal className="text-[#ea384c] w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-md font-semibold text-black mb-3">
                Excellence
              </h3>
              <p className="text-gray-700">
                Nous nous efforçons d'atteindre l'excellence dans chaque aspect
                de notre travail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="text-[#ea384c] w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-md font-semibold text-black mb-3">
                Innovation
              </h3>
              <p className="text-gray-700">
                Nous encourageons l'innovation continue pour fournir les
                meilleures solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Medal className="text-[#ea384c] w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-md font-semibold text-black mb-3">
                Intégrité
              </h3>
              <p className="text-gray-700">
                Nous maintenons les plus hauts standards d'éthique et de
                professionnalisme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
