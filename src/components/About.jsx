import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  const values = [
    { icon: "❤️", title: "Patient First", text: "Every decision we make starts with the person in front of us — not the paperwork." },
    { icon: "🔬", title: "Modern Medicine", text: "We use evidence-based treatments and up-to-date equipment, not guesswork." },
    { icon: "🤝", title: "Honest Care", text: "We tell you what you need to hear, in plain language, without the jargon." },
    { icon: "⏱️", title: "On Time", text: "Your time matters. We respect appointments and keep wait times short." },
  ];

  const stats = [
    { value: "15+", label: "Years of care" },
    { value: "40K+", label: "Happy patients" },
    { value: "25", label: "Specialists" },
    { value: "98%", label: "Satisfaction" },
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-16">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 gap-10">
        <div className="w-full lg:w-1/2 space-y-5">
          <span className="inline-block text-sm font-semibold tracking-widest text-blue-600 uppercase">
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Health care that treats you like a person, not a file.
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We started WellnessVista with one goal — make good health care
            simple, honest, and actually accessible. No endless waiting rooms.
            No confusing medical terms. Just real doctors who listen, diagnose
            carefully, and explain things in a way you can actually understand.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we serve over 40,000 patients across the city, with a team
            of 25 specialists covering everything from general checkups to
            advanced diagnostics. Whether it's a routine visit or something
            more serious, we're here — and we take it seriously.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            className="rounded-2xl w-full object-cover shadow-lg"
            src={img}
            alt="Our medical team"
          />
        </div>
      </div>

      <div className="lg:px-32 px-5 mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl bg-blue-50">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-700">
                {s.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:px-32 px-5 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-semibold">What we stand for</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Four things we refuse to compromise on, no matter what.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:px-32 px-5 mt-20 mb-20">
        <div className="p-10 lg:p-14 rounded-2xl bg-blue-600 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            Ready to see a doctor who actually listens?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Book an appointment online in under 2 minutes — no phone calls,
            no waiting on hold.
          </p>
          <a
            href="#doctors"
            className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
