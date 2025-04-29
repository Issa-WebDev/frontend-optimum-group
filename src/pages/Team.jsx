import React from "react";
import TeamCard from "../components/TeamCard";

const teamMembers = [
  {
    name: "John Doe",
    role: "Directeur Général",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jane Smith",
    role: "Directrice Commerciale",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Johnson",
    role: "Responsable Technique",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Responsable Marketing",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
];

const Team = () => {
  return (
    <section className="pb-16">
      <div className="bg-[#000000] pt-40 text-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Équipe</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Une équipe passionnée et expérimentée dédiée à votre réussite.
          </p>
        </div>
      </div>

      <div className="pt-12 mx-auto max-w-7xl pb-16">
        <div className="container px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
