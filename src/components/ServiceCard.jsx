import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="text-[#ea384c] mb-4 group-hover:scale-110 transition-transform">
        <Icon size={40} />
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        to={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-[#ea384c] font-medium inline-flex items-center group-hover:underline"
      >
        En savoir plus
        <ArrowRight
          size={16}
          className="ml-1 group-hover:ml-2 transition-all"
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
