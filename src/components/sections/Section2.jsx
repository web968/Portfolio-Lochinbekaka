import React from 'react';
import './section.css';
import { useTranslation } from 'react-i18next';
import { featureData } from '../../util/constants';

export default function Section2() {
    const { t } = useTranslation();
    const selectedId = 2;
    const selectedFeature = featureData.filter((feature) => feature.id === selectedId);

    return (
        <section id="section1">
            <div className="container">
                <div className="main">
                    <div className="features-container">
                        {selectedFeature.map((feature) => (
                            <div className="feature-item d-flex align-items-center" key={feature.id}>
                                <div className="row align-items-center">
                                    <div className="col-7 col-sm-7">
                                        <img
                                            src={feature.image}
                                            alt={t("feature.title")}
                                            className="feature-icon img-fluid"
                                        />
                                    </div>
                                    <div className="col-5 col-sm-5">
                                        <h1>
                                            {t("feature.title")} <br />
                                            <span className="highlight">{t("feature.price")}</span>
                                        </h1>
                                        <p>{t("feature.description")}</p>
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
