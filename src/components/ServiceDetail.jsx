import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  RiMicroscopeLine,
  RiMentalHealthLine,
  RiStethoscopeLine,
} from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat, FaBaby, FaCheck, FaArrowLeft } from "react-icons/fa";
import { servicesData, doctorsData, doctorsDetail } from "../data/services";

// Import doctor images
import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const doctorImages = {
  "Dr. Serena Mitchell": doc1,
  "Dr. Julian Bennett": doc2,
  "Dr. Camila Rodriguez": doc3,
  "Dr. Victor Nguyen": doc4,
  "Dr. Ethan Carter": doc5,
  "Dr. Olivia Martinez": doc6,
};

const iconMap = {
  microscope: <RiMicroscopeLine size={48} className="text-blue-600" />,
  shield: <MdHealthAndSafety size={48} className="text-blue-600" />,
  heartbeat: <FaHeartbeat size={48} className="text-blue-600" />,
  stethoscope: <RiStethoscopeLine size={48} className="text-blue-600" />,
  baby: <FaBaby size={48} className="text-blue-600" />,
  "mental-health": <RiMentalHealthLine size={48} className="text-blue-600" />,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-semibold mb-4">Service not found</h1>
        <Link to="/services" className="text-blue-600 hover:underline">
          ← Back to all services
        </Link>
      </div>
    );
  }

  const recommendedDoctors = doctorsData.filter((d) =>
    service.doctors.includes(d.name)
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-16 pb-20">
      {/* Back link */}
      <div className="lg:px-32 px-5 mb-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
        >
          <FaArrowLeft size={12} /> Back to Services
        </Link>
      </div>

      {/* Hero */}
      <section className="lg:px-32 px-5 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              {iconMap[service.icon]}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-6">
              {service.tagline}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50">
            <h3 className="font-semibold text-lg mb-5">What's included</h3>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheck size={10} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="lg:px-32 px-5 mb-16">
        <div className="max-w-2xl mx-auto p-8 lg:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-2 text-center">
            Book your {service.title.toLowerCase()} appointment
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Fill in the form and we'll confirm within 24 hours.
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                <FaCheck size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Appointment requested!</h3>
              <p className="text-gray-600 mb-6">
                Thanks {form.name}. We'll email you at {form.email} to confirm
                your {service.title.toLowerCase()} appointment.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", date: "", notes: "" });
                }}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Book another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-700"
              />
              <textarea
                name="notes"
                placeholder="Any symptoms or notes? (optional)"
                rows="3"
                value={form.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
              >
                Request Appointment
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Recommended doctors */}
      <section className="lg:px-32 px-5">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
            Recommended specialists
          </h2>
          <p className="text-gray-600">
            Doctors best suited for {service.title.toLowerCase()}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendedDoctors.map((doc) => (
            <Link
              key={doc.name}
              to={`/doctors/${doctorsDetail[doc.name]?.id || ""}`}
              className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={doctorImages[doc.name]}
                alt={doc.name}
                className="w-24 h-24 rounded-2xl object-cover shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition">
                  {doc.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {doc.specialties}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{doc.experience} experience</span>
                  <span>★ {doc.rating}</span>
                </div>
                <div className="mt-3 text-sm font-medium text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View profile <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
