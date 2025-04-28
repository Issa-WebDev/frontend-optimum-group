import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-optimum-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="banner.webp"
          alt="Technologies de pointe"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Background pattern */}
        <div className="absolute w-96 h-96 rounded-full bg-[#ea384c] blur-3xl -top-20 -right-20 opacity-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#ea384c] blur-3xl -bottom-20 -left-20 opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-0 flex flex-col items-center text-center z-10">
        <div className="w-full md:w-3/4 lg:w-1/2 text-white space-y-6 animate-fade-in mt-16 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Solutions Technologiques{" "}
            <span className="text-optimum-red">Innovantes</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-xl mx-auto">
            OPTIMUM GROUP fournit des solutions informatiques, bureautiques et
            technologiques de pointe pour les entreprises et particuliers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/devices"
              className="inline-flex items-center px-6 py-2 bg-red-600 hover:opacity-95 text-white font-medium rounded-md text-md transition"
            >
              Découvrir nos produits
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2  font-medium rounded-md text-md bg-white text-gray-800 hover:text-white hover:bg-red-600  transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
