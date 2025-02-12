import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n.js";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Silliq skroll
    }
    setIsOpen(false); // Mobil menyuni yopish
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Tilni o'zgartiradi
  };

  // Menyu elementlari bitta array ichida bo‘ladi
  const menuItems = [
    { name: "home", id: "header" },
    { name: "about", id: "section1" },
    { name: "service", id: "service" },
    { name: "portfolio", id: "portfolio" },
    { name: "contact", id: "contact" },
  ];

  return (
    <section id="navbar">
      <div className="container">
        <div className="nav-content d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="#" className="brand">
              <h1>Logos</h1>
            </a>
          </div>

          {/* Asosiy Navbar */}
          <ul className={`menu ${isOpen ? "show" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); handleScroll(item.id); }}>
                  {t(item.name)} {/* Tilga mos tarjima */}
                </a>
              </li>
            ))}
          </ul>

          <div className="left">
            <span>+998 94 253 40 99</span>
            <button type="submit" onClick={() => changeLanguage("uz")}>UZB</button>
            <button type="submit" onClick={() => changeLanguage("en")}>ENG</button>
            <div className="open-bar" onClick={toggleSidebar}>
              <DehazeIcon className="opener" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobil menyu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="closer">
          <CloseIcon className="close-icon" onClick={closeSidebar} />
        </div>
        <ul className="text-center">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleScroll(item.id)}>
              <a href={`#${item.id}`} onClick={(e) => e.preventDefault()}>
                {t(item.name)} {/* Tilga mos tarjima */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
