import React from "react";
import { Instagram, YouTube, Facebook, Telegram } from "@mui/icons-material";
import './footer.css';
import { useTranslation } from "react-i18next"; // i18n kutubxonasini import qilish

const socialIcons = [
  { icon: <Instagram className="icon" />, link: "https://instagram.com" },
  { icon: <YouTube className="icon" />, link: "https://youtube.com" },
  { icon: <Facebook className="icon" />, link: "https://facebook.com/" },
  { icon: <Telegram className="icon" />, link: "https://t.me" },
];

const Footer = () => {
  const { t } = useTranslation(); // useTranslation hook orqali tarjima olish

  return (
    <section id="footer">
      <div className="container">
        <div className="content d-flex justify-content-between">
          {/* Manzil */}
          <div className="left">
            <h1>{t('footer.address')}</h1>
            <p>Lorem ipsum dolor sit <br /> amet consectetur. Amet <br /> parturient mauris.</p>
          </div>
          {/* Bosh sahifa */}
          <div className="main">
            <h1>{t('footer.homepage')}</h1>
            <ul>
              {t('menuLinks', { returnObjects: true }).map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Ijtimoiy tarmoqlar */}
          <div className="right">
            <h1>{t('footer.socialNetwork')}</h1>
            <div className="icons">
              {socialIcons.map((item, index) => (
                <a target="_blank" key={index} href={item.link}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
