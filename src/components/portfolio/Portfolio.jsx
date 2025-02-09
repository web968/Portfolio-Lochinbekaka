import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import { portfolioItems } from "../../util/constants";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio">
      <div className="container">
        <div className="top text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("portfolio")}
          </motion.h1>
        </div>
        <div className="content">
          <div className="portfolio-container row">
            {portfolioItems.map((item) => (
              <motion.div
                className="portfolio-item col-md-6"
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={item.image}
                  alt={t(item.title)}
                  className="img-fluid"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="portfolio-text"
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.description)}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="more text-center">
            <motion.a
              target="_blank"
              href="https://t.me/abdulatifProjects"
              whileHover={{ scale: 1.1, backgroundColor: "#4f29d4" }}
              transition={{ duration: 0.3 }}
            >
              <button>{t("viewAll")}</button>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
