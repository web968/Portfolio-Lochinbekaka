import React from 'react';
import './section.css';
import { useTranslation } from 'react-i18next';
import { featureData } from '../../util/constants';
import Section2 from './Section2';

export default function Section1() {
  const { t } = useTranslation();
  const selectedId = 1; 
  const selectedFeature = featureData.filter((feature) => feature.id === selectedId);

  const selected3Id = 3; 
  const selected3Feature = featureData.filter((feature) => feature.id === selected3Id);

  return (
    <section id="section1">
      <div className="container">
        {/* Top-1 */}
        <div className="top">
          <div className="features-container">
            {selectedFeature.map((feature) => (
              <div className="feature-item d-flex align-items-center" key={feature.id}>
                <div className="row align-items-center">
                  <div className="col-5">
                    <h1>
                      {t("feature1.title1")}
                       <span className="highlight">{t("feature1.team-sec")}</span>
                    </h1>
                    <p> <span></span> {t("feature1.description1")}</p>
                  </div>
                  <div className="col-7">
                    <img
                      src={feature.image}
                      alt={t("feature1.title1")}
                      className="feature-icon img-fluid"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main-o'rta qismi */}
        <Section2 />

        {/* footer-1 */}
        <div className="footer">
          <div className="features-container">
            {selected3Feature.map((feature) => (
              <div className="feature-item d-flex align-items-center" key={feature.id}>
                <div className="row align-items-center">
                  <div className="col-5">
                    <h1>
                      {t("feature1.title3")}<br />
                      <span className="highlight">{t("feature1.team-sec2")}</span>
                    </h1>
                    <p>{t("feature1.description3")}</p>
                  </div>
                  <div className="col-7">
                    <img
                      src={feature.image}
                      alt={t("feature1.title3")}
                      className="feature1-icon img-fluid"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
