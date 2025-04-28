import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, image, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#000000] mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          to="/devices"
          className="inline-block w-full text-center text-md bg-[#000000] hover:opacity-90 text-white font-medium py-2 rounded-md transition-colors duration-300"
        >
          Voir le produit
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
