import React from "react";
import BlogCard from "../components/BlogCard";

const blogPosts = [
  {
    title: "Nouveaux Produits Technologiques 2024",
    excerpt:
      "Découvrez notre nouvelle gamme de produits technologiques pour l'année 2024.",
    date: "15 Avril 2024",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    slug: "nouveaux-produits-2024",
  },
  {
    title: "L'importance de la Maintenance Informatique",
    excerpt:
      "Comment une maintenance régulière peut prolonger la durée de vie de vos équipements.",
    date: "10 Avril 2024",
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=800&q=80",
    slug: "importance-maintenance-informatique",
  },
  {
    title: "Innovation Maritime : Nouvelles Solutions",
    excerpt:
      "Les dernières innovations en matière d'équipements maritimes et de navigation.",
    date: "5 Avril 2024",
    image:
      "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=800&q=80",
    slug: "innovation-maritime",
  },
];

const Blog = () => {
  return (
    <section className="pb-16">
      <div className="bg-[#000000] pt-40 text-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Restez informé des dernières nouvelles et innovations d'OPTIMUM
            GROUP.
          </p>
        </div>
      </div>

      <div className="pt-12 mx-auto max-w-7xl pb-16">
        <div className="container px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
