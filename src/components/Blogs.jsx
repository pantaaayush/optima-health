import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogs";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const blogImages = {
  "why-good-sleep": img1,
  "heart-healthy-diet": img2,
  "pediatric-vaccinations": img3,
  "navigating-mental-health": img4,
  "importance-of-exercise": img5,
  "skin-health-101": img6,
};

const Blogs = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col lg:px-32 px-5 pt-24 lg:pt-16 pb-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Health Blog
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Practical health advice, written by our doctors.
          </h1>
          <p className="text-gray-600 leading-relaxed">
            No jargon. No scare tactics. Just honest guidance from the
            specialists who see these cases every day — so you can make
            better decisions about your own health.
          </p>
        </div>
      </div>

      {/* Featured post */}
      <div className="mb-12">
        <Link
          to={`/blog/${blogPosts[0].slug}`}
          className="group block relative overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 overflow-hidden">
              <img
                src={blogImages[blogPosts[0].slug]}
                alt={blogPosts[0].title}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-semibold mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-400">Featured</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold leading-snug mb-4 group-hover:text-blue-700 transition">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{blogPosts[0].date}</span>
                <span>·</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Grid */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">More from the blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={blogImages[post.slug]}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-3 self-start">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold leading-snug mb-3 group-hover:text-blue-700 transition">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100 mt-auto">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 p-10 lg:p-14 rounded-2xl bg-blue-600 text-white text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
          Get one health tip per week
        </h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Short, useful, and written by real doctors. No spam, unsubscribe anytime.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white">
            <span className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm font-bold">
              ✓
            </span>
            <span className="font-medium">
              You're subscribed! Check your inbox for a welcome email.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-50 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Blogs;
