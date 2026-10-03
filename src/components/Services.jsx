import React from "react";
import { Link } from "react-router-dom";
import {
  RiMicroscopeLine,
  RiMentalHealthLine,
  RiStethoscopeLine,
} from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat, FaBaby } from "react-icons/fa";
import { servicesData } from "../data/services";

const iconMap = {
  microscope: <RiMicroscopeLine size={32} className="text-blue-600" />,
  shield: <MdHealthAndSafety size={32} className="text-blue-600" />,
  heartbeat: <FaHeartbeat size={32} className="text-blue-600" />,
  stethoscope: <RiStethoscopeLine size={32} className="text-blue-600" />,
  baby: <FaBaby size={32} className="text-blue-600" />,
  "mental-health": <RiMentalHealthLine size={32} className="text-blue-600" />,
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col lg:px-32 px-5 pt-24 lg:pt-16 pb-20">
      <div className="max-w-3xl mb-14">
        <p className="text-sm text-gray-600 mb-4">
          <span className="text-gray-400 mr-2">—</span>
          What We Offer
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-5">
          Care for every stage of life.
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Click any service to book an appointment with a recommended specialist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.tagline}</p>
            <div className="mt-5 text-sm font-medium text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 p-10 lg:p-14 rounded-2xl bg-blue-600 text-white text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
          Not sure what you need?
        </h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Book a general consultation and our doctors will point you in the
          right direction — no guesswork required.
        </p>
        <Link
          to="/services/general-checkup"
          className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-50 transition"
        >
          Book General Checkup
        </Link>
      </div>
    </div>
  );
};

export default Services;
