import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaClock, FaUser, FaCalendarAlt } from "react-icons/fa";
import { blogPosts } from "../data/blogs";
import { doctorsDetail } from "../data/services";

// Blog images
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

// Doctor images
import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const blogImages = {
  "why-good-sleep": img1,
  "heart-healthy-diet": img2,
  "pediatric-vaccinations": img3,
  "navigating-mental-health": img4,
  "importance-of-exercise": img5,
  "skin-health-101": img6,
};

const doctorImages = {
  "Dr. Serena Mitchell": doc1,
  "Dr. Julian Bennett": doc2,
  "Dr. Camila Rodriguez": doc3,
  "Dr. Victor Nguyen": doc4,
  "Dr. Ethan Carter": doc5,
  "Dr. Olivia Martinez": doc6,
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-semibold mb-4">Article not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to home
        </Link>
      </div>
    );
  }

  const img = blogImages[post.slug];
  const doctor = doctorsDetail[post.author];
  const doctorImg = doctorImages[post.author];

  // Related posts = other posts in the same category, or recent ones
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 lg:pt-16 pb-20">
      {/* Back link */}
      <div className="lg:px-32 px-5 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
        >
          <FaArrowLeft size={12} /> Back to blog
        </Link>
      </div>

      {/* Article header */}
      <article className="max-w-3xl mx-auto px-5">
        <div className="mb-6">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-2">
              <FaUser size={12} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FaClock size={12} /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured image */}
        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src={img}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover"
          />
        </div>

        {/* Excerpt — larger, styled */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
          {post.excerpt}
        </p>

        {/* Body */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Author box */}
        {doctor && (
          <div className="mt-14 p-6 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col md:flex-row gap-5 items-center md:items-start">
            <img
              src={doctorImg}
              alt={post.author}
              className="w-20 h-20 rounded-2xl object-cover shrink-0"
            />
            <div className="text-center md:text-left flex-1">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-1">
                Written by
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {post.author}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {doctor.specialty}
              </p>
              <Link
                to={`/doctors/${doctor.id}`}
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                View profile →
              </Link>
            </div>
          </div>
        )}
      </article>

      {/* Related posts */}
      <section className="lg:px-32 px-5 mt-20">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-8">
          More articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/blog/${r.slug}`}
              className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={blogImages[r.slug]}
                  alt={r.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-3">
                  {r.category}
                </span>
                <h3 className="font-semibold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition">
                  {r.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {r.date} · {r.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="lg:px-32 px-5 mt-16">
        <div className="p-10 lg:p-14 rounded-2xl bg-blue-600 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            Have a health question?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Talk to a real doctor who can help. Most appointments are confirmed
            within 24 hours.
          </p>
          <Link
            to="/find-doctor"
            className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            Find a Doctor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
