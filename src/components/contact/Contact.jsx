import React, { useState } from "react";
import "./contact.css";
import { useTranslation } from "react-i18next"; // i18n kutubxonasini import qilish

export default function Contact() {
  const { t } = useTranslation(); // useTranslation hook orqali tarjima olish
  const [selectedTypes, setSelectedTypes] = useState([]); // Bir nechta tanlangan checkboxlar
  // const [selectedDescription, setSelectedDescription] = useState("");

  const descriptions = {
    type1: t('descriptions.type1'),
    type2: t('descriptions.type2'),
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type); // Agar oldin tanlangan bo'lsa, olib tashlash
      } else if (prev.length < 5) { // Maksimal 5 ta tanlash mumkin
        return [...prev, type];
      }
      return prev; // Agar limitga yetgan bo‘lsa, hech narsa o'zgarmaydi
    });

    // setSelectedDescription(descriptions[type] || "");
  };

  // Project types uchun tarjima qilish
  const projectTypes = [
    t('projectTypes.type1'),
    t('projectTypes.type2'),
    t('projectTypes.type3'),
    t('projectTypes.type4'),
    t('projectTypes.type5'),
    t('projectTypes.type6'),
    t('projectTypes.type7'),
    t('projectTypes.type8')
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-content">
          <h1 className="text-center">{t('contact1.title')}</h1>
          <form>
            <div className="content">
              <div className="text">
              <h3>{t('contact1.titlee')}</h3>
                <p>{t('contact1.formDescription')}</p>
              </div>
              <div className="content2 d-flex justify-content-between">
                <div className="left">
                  <div>
                    <label>{t('contact1.companyName')}</label>
                    <br />
                    <input type="text" />
                  </div>
                  <div>
                    <label>{t('contact1.fullName')}</label>
                    <br />
                    <input type="text" />
                  </div>
                  <div>
                    <label>{t('contact1.phoneNumber')}</label>
                    <br />
                    <input type="number" placeholder="+998" />
                  </div>
                  <div>
                    <label>{t('contact1.projectDescription')}</label>
                    <br />
                    <textarea></textarea>
                  </div>
                </div>
                <div className="right">
                  <p className="block font-semibold mb-2">{t('contact1.projectType')}:</p>
                  <div>
                    {projectTypes.map((type, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          name="projectType"
                          value={type}
                          checked={selectedTypes.includes(type)}
                          onChange={() => handleTypeChange(type)}
                        />
                        <span>{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit">{t('contact1.submit')}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
