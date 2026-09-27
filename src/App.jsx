import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import DoctorDetail from "./components/DoctorDetail";
import FindDoctor from "./components/FindDoctor";
import BlogPost from "./components/BlogPost";

const HomePage = () => (
  <main>
    <div id="home"><Home /></div>
    <div id="about"><About /></div>
    <div id="services"><Services /></div>
    <div id="doctors"><Doctors /></div>
    <div id="blog"><Blogs /></div>
  </main>
);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/doctors/:id" element={<DoctorDetail />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;