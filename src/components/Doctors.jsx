import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStethoscope, FaStar } from "react-icons/fa";

import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const Doctors = () => {
  const data = [
    {
      id: "serena-mitchell",
      img: doc1,
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
      experience: "12 years experience",
      rating: 4.9,
    },
    {
      id: "julian-bennett",
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
      experience: "15 years experience",
      rating: 4.8,
    },
    {
      id: "camila-rodriguez",
      img: doc3,
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
      experience: "10 years experience",
      rating: 5.0,
    },
    {
      id: "victor-nguyen",
      img: doc4,
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
      experience: "18 years experience",
      rating: 4.9,
    },
    {
      id: "ethan-carter",
      img: doc5,
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
      experience: "8 years experience",
      rating: 4.7,
    },
    {
      id: "olivia-martinez",
      img: doc6,
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
      experience: "14 years experience",
      rating: 4.9,
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1023, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col lg:px-32 px-5 pt-24 lg:pt-16 pb-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Our Team
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Meet the specialists who'll be looking after you.
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Every doctor on our team is board-certified and has spent years
            treating real patients — not just reading textbooks. We'll match
            you with the right specialist for your needs.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => slider.current?.slickPrev()}
            aria-label="Previous doctor"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={() => slider.current?.slickNext()}
            aria-label="Next doctor"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="doctors-slider -mx-3">
        <Slider ref={slider} {...settings}>
          {data.map((doc) => (
            <div key={doc.id} className="px-3 pb-4">
              <Link
                to={`/doctors/${doc.id}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-gray-800 shadow-sm">
                    <FaStar className="text-amber-400" size={11} />
                    {doc.rating}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
                    <FaStethoscope size={12} />
                    {doc.specialties}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{doc.experience}</p>
                  <div className="text-sm font-medium text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View profile <span>→</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-16 p-10 lg:p-14 rounded-2xl bg-blue-600 text-white text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
          Not sure which doctor you need?
        </h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Answer 3 quick questions and we'll match you with the right specialist.
        </p>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Tell us your symptoms and we'll match you with the right specialist —
          usually within 24 hours.
        </p>
        <Link
          to="/find-doctor"
          className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-50 transition"
        >
          Find my doctor
        </Link>
      </div>

      <style>{`
        .doctors-slider .slick-dots {
          bottom: -40px;
        }
        .doctors-slider .slick-dots li button:before {
          font-size: 10px;
          color: #2563eb;
          opacity: 0.4;
        }
        .doctors-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default Doctors;
