import React from 'react';
import { useTranslation } from 'react-i18next';
import './service.css';
import { services } from '../../util/constants';

export default function Service() {
    const { t } = useTranslation(); // Tilni o'zgartirish funksiyasini ishlatish

    return (
        <section id="service">
            <div className="container ">
                <div className="top text-center">
                    <h1>{t('servicesTitle')}</h1>
                </div>
                <div className="content">
                    <div className="row justify-content-center">
                        {services.map((service2, index) => (
                            <div className="col-md-6 " key={index}>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="card-top d-flex align-items-center justify-content-between">
                                            {/* Title */}
                                            <h4 className="card-title">{t(`services2.${index}.title`)}</h4>
                                            {/* Icon */}
                                            <img src={service2.image} alt={service2.title} className='img-fluid' />
                                        </div>
                                        {/* Description */}
                                        <p className="card-text">{t(`services2.${index}.description`)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}