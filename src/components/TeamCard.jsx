import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-optimum-black">{name}</h3>
        <p className="text-optimum-lightgray">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
