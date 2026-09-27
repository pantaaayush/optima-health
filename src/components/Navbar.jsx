import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onHomePage = location.pathname === "/";

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => setShowForm(false);

  const handleNavClick = (section) => (e) => {
    e.preventDefault();
    closeMenu();
    if (onHomePage) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const links = [
    { label: "Home", section: "home" },
    { label: "About Us", section: "about" },
    { label: "Services", section: "services" },
    { label: "Doctors", section: "doctors" },
    { label: "Blog", section: "blog" },
  ];

  return (
    <div className="fixed w-full z-10 text-white">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
        <div className="flex flex-row items-center cursor-pointer">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-semibold">
              Optima<span className="text-blue-200">Health</span>
            </h1>
          </Link>
        </div>

        <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={`#${link.section}`}
              onClick={handleNavClick(link.section)}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Contact Us
          </button>
        </div>

        {showForm && <Contact closeForm={closeForm} />}

        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={`#${link.section}`}
            onClick={handleNavClick(link.section)}
            className="hover:text-hoverColor transition-all cursor-pointer"
          >
            {link.label}
          </a>
        ))}

        <div className="lg:hidden">
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;