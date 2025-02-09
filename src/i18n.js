import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/locales/en/translation.json";
import uz from "../public/locales/uz/translation.json";

 i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uz: { translation: uz }
  },
  lng: "en", // Dastlabki til
  fallbackLng: "en", // Agar tarjima topilmasa, ingliz tilida ko'rsatiladi
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
