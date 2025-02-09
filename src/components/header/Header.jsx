import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n.js'; // Tarjima sozlamalarini import qilish
import './header.css';
import { header } from '../../util/constants';
export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Tilni o'zgartirish
  };

  return (
    <section id="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            {/* Chap qism */}
            <div className="left">
              <h1>
                {t("title")} <br /> <span>{t("subtitle")}</span>
              </h1>
              <p>{t("description")}</p>
              {/* Email shakli */}
              <form className='d-flex align-items-center'>
                <input type="email" placeholder={t("email_placeholder")} />
                <button>{t("send")}</button>
              </form>
              {/* Ilovalar */}
              <div className="apps d-flex">
                <div className="app-left">
                  <img src={header[1]?.image} alt="Google Play" className='img-fluid' />
                </div>
                <div className="app-right">
                  <img src={header[2]?.image} alt="App Store" className='img-fluid' />
                </div>
              </div>
     
            </div>
          </div>
          <div className="col-12 col-md-5">
            {/* O'ng qism */}
            <div className="right">
              <img src={header[0]?.image} alt="Header" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
