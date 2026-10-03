import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaTooth,
  FaEye,
  FaBone,
  FaBaby,
  FaBrain,
  FaStethoscope,
  FaArrowLeft,
  FaArrowRight,
  FaRedo,
  FaCheck,
} from "react-icons/fa";
import { doctorsDetail } from "../data/services";

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

// ─── Symptom categories and their recommended doctor ───
const symptoms = [
  { id: "chest", label: "Chest or heart issues", icon: <FaHeartbeat />, doctor: "Dr. Julian Bennett" },
  { id: "skin", label: "Skin, acne, or rash", icon: <FaTooth />, doctor: "Dr. Ethan Carter" },
  { id: "eye", label: "Eye or vision problems", icon: <FaEye />, doctor: "Dr. Olivia Martinez" },
  { id: "joints", label: "Joint, bone, or muscle pain", icon: <FaBone />, doctor: "Dr. Serena Mitchell" },
  { id: "child", label: "Child health concerns", icon: <FaBaby />, doctor: "Dr. Camila Rodriguez" },
  { id: "mental", label: "Mental health or stress", icon: <FaBrain />, doctor: "Dr. Victor Nguyen" },
  { id: "general", label: "General checkup or unsure", icon: <FaStethoscope />, doctor: "Dr. Camila Rodriguez" },
];

const durations = [
  { id: "days", label: "Less than a week" },
  { id: "weeks", label: "1–4 weeks" },
  { id: "months", label: "1–3 months" },
  { id: "long", label: "More than 3 months" },
];

const urgencies = [
  { id: "routine", label: "Routine — I'm flexible" },
  { id: "soon", label: "Soon — within a week" },
  { id: "urgent", label: "Urgent — as soon as possible" },
];

const FindDoctor = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    symptom: null,
    duration: null,
    urgency: null,
  });

  const reset = () => {
    setStep(1);
    setAnswers({ symptom: null, duration: null, urgency: null });
  };

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  // ─── Result ───
  if (step === 4) {
    const selectedSymptom = symptoms.find((s) => s.id === answers.symptom);
    const doctor = doctorsDetail[selectedSymptom?.doctor];
    const img = doctorImages[selectedSymptom?.doctor];

    return (
      <div className="min-h-screen pt-24 lg:pt-16 pb-20 lg:px-32 px-5">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition mb-8"
          >
            <FaArrowLeft size={12} /> Back to home
          </Link>

          <div className="text-center mb-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-50 flex items-center justify-center">
              <FaCheck size={28} className="text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              We've found your match
            </h1>
            <p className="text-gray-600 text-lg">
              Based on your answers, this specialist is the best fit for you.
            </p>
          </div>

          {/* Doctor card */}
          {doctor && (
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                  src={img}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-2xl object-cover shrink-0"
                />
                <div className="text-center md:text-left flex-1">
                  <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
                    {doctor.specialty}
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    {doctor.name}
                  </h2>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm mb-4">
                    <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-medium">
                      ★ {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                      {doctor.experience} experience
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/doctors/${doctor.id}`}
                  className="flex-1 text-center px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                >
                  View full profile
                </Link>
                <Link
                  to={`/doctors/${doctor.id}`}
                  className="flex-1 text-center px-6 py-3.5 rounded-full bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition"
                >
                  Book appointment
                </Link>
              </div>
            </div>
          )}

          {/* Why this match */}
          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3">Why this match?</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <FaCheck size={11} className="mt-1 shrink-0" />
                You reported <strong>{selectedSymptom?.label.toLowerCase()}</strong>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={11} className="mt-1 shrink-0" />
                Duration: <strong>{durations.find((d) => d.id === answers.duration)?.label}</strong>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={11} className="mt-1 shrink-0" />
                Urgency: <strong>{urgencies.find((u) => u.id === answers.urgency)?.label}</strong>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={11} className="mt-1 shrink-0" />
                {doctor?.name} specializes in exactly this area
              </li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
            >
              <FaRedo size={12} /> Start over
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Progress bar ───
  const progress = (step / 3) * 100;

  return (
    <div className="min-h-screen pt-24 lg:pt-16 pb-20 lg:px-32 px-5">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition mb-8"
        >
          <FaArrowLeft size={12} /> Back to home
        </Link>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2">
            <span>Step {step} of 3</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step 1 — Symptom */}
        {step === 1 && (
          <>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              What's bothering you?
            </h1>
            <p className="text-gray-600 mb-8">
              Pick the option that best matches your situation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {symptoms.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    handleSelect("symptom", s.id);
                    setTimeout(next, 200);
                  }}
                  className={`group flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                    answers.symptom === s.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition ${
                      answers.symptom === s.id
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <span className="font-medium text-gray-900">{s.label}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 2 — Duration */}
        {step === 2 && (
          <>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              How long has this been going on?
            </h1>
            <p className="text-gray-600 mb-8">
              This helps us understand how urgent your situation might be.
            </p>
            <div className="space-y-3">
              {durations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => handleSelect("duration", d.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                    answers.duration === d.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <span className="font-medium text-gray-900">{d.label}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                      answers.duration === d.id
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {answers.duration === d.id && (
                      <FaCheck size={9} className="text-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={back}
                className="flex-1 px-6 py-3.5 rounded-full bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition"
              >
                Back
              </button>
              <button
                onClick={next}
                disabled={!answers.duration}
                className="flex-1 px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {/* Step 3 — Urgency */}
        {step === 3 && (
          <>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              How soon do you need care?
            </h1>
            <p className="text-gray-600 mb-8">
              We'll prioritise your booking based on your answer.
            </p>
            <div className="space-y-3">
              {urgencies.map((u) => (
                <button
                  key={u.id}
                  onClick={() => handleSelect("urgency", u.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                    answers.urgency === u.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <span className="font-medium text-gray-900">{u.label}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                      answers.urgency === u.id
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {answers.urgency === u.id && (
                      <FaCheck size={9} className="text-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={back}
                className="flex-1 px-6 py-3.5 rounded-full bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition"
              >
                Back
              </button>
              <button
                onClick={next}
                disabled={!answers.urgency}
                className="flex-1 px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition inline-flex items-center justify-center gap-2"
              >
                Find my doctor <FaArrowRight size={12} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;
