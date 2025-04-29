import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, excerpt, date, image, slug }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray text-sm mb-3">
          <Calendar size={16} className="mr-2" />
          <time>{date}</time>
        </div>
        <h3 className="text-xl font-semibold text-[#000000] mb-2">
          <Link
            to={`/blog/${slug}`}
            className="hover:text-[#ea384c] transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gary-700 mb-4">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-[#ea384c] font-medium hover:underline inline-flex items-center"
        >
          Lire la suite
          <svg
            className="w-4 h-4 ml-2 group-hover:ml-3 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
