import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaCheck,
  FaGraduationCap,
  FaStethoscope,
  FaCalendarAlt,
  FaLanguage,
} from "react-icons/fa";
import { doctorsDetail } from "../Data/services";

// Doctor images
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

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = Object.values(doctorsDetail).find((d) => d.id === id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-semibold mb-4">Doctor not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to home
        </Link>
      </div>
    );
  }

  const img = doctorImages[doctor.name];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Scroll to top of the form so the success message is visible
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", date: "", time: "", reason: "" });
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-16 pb-20">
      {/* Back link */}
      <div className="lg:px-32 px-5 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
        >
          <FaArrowLeft size={12} /> Back to doctors
        </Link>
      </div>

      {/* Hero */}
      <section className="lg:px-32 px-5 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <img
              src={img}
              alt={doctor.name}
              className="w-full rounded-2xl object-cover aspect-square"
            />
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
              {doctor.specialty}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-5">
              {doctor.name}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700">
                <FaStar size={14} />
                <span className="font-semibold">{doctor.rating}</span>
                <span className="text-sm">({doctor.reviews} reviews)</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-700">
                <span className="font-semibold">{doctor.experience}</span>
                <span className="text-sm"> experience</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {doctor.bio}
            </p>

            <a
              href="#book"
              className="inline-block px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="lg:px-32 px-5 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <FaGraduationCap size={18} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Education & Training
              </h2>
            </div>
            <ul className="space-y-3">
              {doctor.education.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheck size={9} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">{e}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <FaStethoscope size={18} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Specialties
              </h2>
            </div>
            <ul className="space-y-3">
              {doctor.specialties.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheck size={9} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <FaCalendarAlt size={18} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Availability
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => {
                const available = doctor.availability.includes(day);
                return (
                  <span
                    key={day}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      available
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Hours: 9:00 AM – 5:00 PM
            </p>
          </div>

          {/* Languages */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <FaLanguage size={18} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Languages Spoken
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {doctor.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOOKING FORM ═══ */}
      <section id="book" className="lg:px-32 px-5">
        <div className="max-w-2xl mx-auto p-8 lg:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                <FaCheck size={28} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Appointment booked!</h3>
              <p className="text-gray-600 mb-2">
                Thanks <strong>{form.name}</strong>. Your appointment with{" "}
                <strong>{doctor.name}</strong> is confirmed for:
              </p>
              <p className="text-blue-600 font-semibold text-lg mb-6">
                {form.date} at {form.time}
              </p>
              <p className="text-gray-500 text-sm mb-8">
                We've sent a confirmation to {form.email}.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
                  Book with {doctor.name}
                </h2>
                <p className="text-gray-600">
                  Available on{" "}
                  <span className="font-medium text-blue-600">
                    {doctor.availability.join(", ")}
                  </span>{" "}
                  — most appointments confirmed within 24 hours.
                </p>
              </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred date
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred time
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-700 bg-white"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <textarea
                  name="reason"
                  placeholder="Reason for visit / symptoms (optional)"
                  rows="3"
                  value={form.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                >
                  Confirm Appointment
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By booking, you agree to our terms. You'll receive a
                  confirmation email within 24 hours.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorDetail;