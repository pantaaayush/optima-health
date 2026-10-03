import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const aboutLinks = [
    { label: "About Us", section: "about" },
    { label: "Doctors", section: "doctors" },
    { label: "Services", section: "services" },
    { label: "Find a Doctor", route: "/find-doctor" },
  ];

  const blogLinks = [
    { label: "Why Good Sleep Matters", slug: "why-good-sleep" },
    { label: "The Heart-Healthy Diet", slug: "heart-healthy-diet" },
    { label: "Pediatric Vaccinations", slug: "pediatric-vaccinations" },
    { label: "Navigating Mental Health", slug: "navigating-mental-health" },
  ];

  const socials = [
    { icon: <FaFacebookF size={16} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter size={16} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram size={16} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaYoutube size={16} />, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-backgroundColor text-white rounded-t-3xl mt-8">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-32 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-lg bg-white text-backgroundColor flex items-center justify-center font-bold text-lg">
              O
            </div>
            <h1 className="font-semibold text-xl">
              Optima<span className="text-hoverColor">Health</span>
            </h1>
          </div>
          <p className="text-sm text-white/80 leading-relaxed mb-6">
            A team of dedicated doctors across orthopedics, cardiology,
            pediatrics, neurology, dermatology, and more — here to look after
            you and your family.
          </p>

          {/* Mini contact items */}
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={13} className="mt-1 shrink-0 text-hoverColor" />
              <span>123 Elm Street, Suite 456, Springfield, IL 62701</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={13} className="shrink-0 text-hoverColor" />
              <a href="mailto:support@optimahealth.com" className="hover:text-hoverColor transition">
                support@optimahealth.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone size={13} className="shrink-0 text-hoverColor" />
              <a href="tel:+1234567890" className="hover:text-hoverColor transition">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Company column */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <div className="w-10 h-0.5 bg-hoverColor mb-5 rounded-full" />
          <nav className="flex flex-col gap-3">
            {aboutLinks.map((link) =>
              link.route ? (
                <Link
                  key={link.label}
                  to={link.route}
                  className="text-sm text-white/80 hover:text-hoverColor transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <ScrollLink
                  key={link.label}
                  to={link.section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-sm text-white/80 hover:text-hoverColor transition-colors cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              )
            )}
          </nav>
        </div>

        {/* Blog column */}
        <div>
          <h2 className="font-semibold text-lg mb-4">From the Blog</h2>
          <div className="w-10 h-0.5 bg-hoverColor mb-5 rounded-full" />
          <nav className="flex flex-col gap-3">
            {blogLinks.map((link) => (
              <Link
                key={link.slug}
                to={`/blog/${link.slug}`}
                className="text-sm text-white/80 hover:text-hoverColor transition-colors leading-snug"
              >
                {link.label}
              </Link>
            ))}
            <ScrollLink
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="text-sm font-medium text-hoverColor hover:opacity-80 transition cursor-pointer mt-1"
            >
              See all articles →
            </ScrollLink>
          </nav>
        </div>

        {/* Connect column */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Connect With Us</h2>
          <div className="w-10 h-0.5 bg-hoverColor mb-5 rounded-full" />
          <div className="flex flex-wrap gap-3 mb-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-backgroundColor hover:border-white transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Follow us for health tips, updates, and new doctor announcements.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-5 md:px-32 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} Optima Health. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Crafted with care by
            <span className="text-hoverColor font-medium">Optima Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
