import React from "react";

const BlogCard = ({ img, headlines, category, date, readTime }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={headlines}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {category && (
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-3 self-start">
            {category}
          </span>
        )}

        <h3 className="text-lg font-semibold leading-snug mb-3 group-hover:text-blue-700 transition">
          {headlines}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          A short and useful read with practical advice from our doctors —
          written to help you make better everyday health decisions.
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100 mt-auto">
          <span>{date || "Recent"}</span>
          <span>{readTime || "5 min read"}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;