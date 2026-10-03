import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck, FaUserMd, FaVideo } from "react-icons/fa";
import doctorImg from "../assets/img/doc2.jpg";

const Home = () => {
  const stats = [
    { value: "15+", label: "Years of care" },
    { value: "40K+", label: "Happy patients" },
    { value: "25", label: "Specialists" },
    { value: "98%", label: "Satisfaction" },
  ];

  const features = [
    {
      icon: <FaCalendarCheck size={22} />,
      title: "Easy Appointments",
      text: "Book a visit in under 2 minutes. No phone calls, no waiting on hold.",
      link: "/find-doctor",
    },
    {
      icon: <FaUserMd size={22} />,
      title: "Verified Specialists",
      text: "Every doctor is board-certified and vetted before they join our team.",
      scrollTo: "doctors",
    },
    {
      icon: <FaVideo size={22} />,
      title: "Online Consultations",
      text: "Talk to a doctor from home via secure video — same quality, less hassle.",
      link: "/find-doctor",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="lg:px-32 px-5 pt-28 lg:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-600 mb-6">
              <span className="text-gray-400 mr-2">—</span>
              Welcome to Optima Health
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900 mb-6">
              Optimal{" "}
              <span className="text-blue-600">Health</span>,
              <br />
              One Click Away
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
              Book appointments, talk to real doctors, and manage your health
              from one simple place. No queues, no confusion — just care that
              actually works.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/find-doctor"
                className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
              >
                Book an appointment
              </Link>
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-gray-50 text-gray-900 font-medium hover:bg-gray-100 transition inline-flex items-center gap-2"
              >
                See How We Work
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src={doctorImg}
              alt="Doctor"
              className="w-full max-w-lg object-cover rounded-3xl shadow-xl"
              style={{ maxHeight: "560px" }}
            />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="lg:px-32 px-5 py-10 border-t border-gray-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900">
                {s.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="lg:px-32 px-5 py-20">
        <div className="max-w-3xl mb-14">
          <p className="text-sm text-gray-600 mb-4">
            <span className="text-gray-400 mr-2">—</span>
            Why Patients Choose Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Health care without the runaround.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => {
            const content = (
              <>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">{f.text}</p>
                <div className="text-sm font-medium text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <span>→</span>
                </div>
              </>
            );

            const cardClass =
              "group block p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300";

            if (f.scrollTo) {
              return (
                <button
                  key={f.title}
                  onClick={() =>
                    document
                      .getElementById(f.scrollTo)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`${cardClass} text-left w-full cursor-pointer`}
                >
                  {content}
                </button>
              );
            }

            return (
              <Link key={f.title} to={f.link} className={cardClass}>
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="lg:px-32 px-5 pb-24">
        <div className="rounded-3xl bg-gray-900 text-white p-12 lg:p-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-5">
              Ready to feel better?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Book your first appointment today. Most visits are confirmed
              within 24 hours.
            </p>
            <Link
              to="/find-doctor"
              className="inline-block px-8 py-4 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
