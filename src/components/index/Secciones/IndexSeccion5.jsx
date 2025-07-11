import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion5.module.css";

const HomeSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryHover = (index) => {
    setSelectedCategory(index);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="categorias" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.categorias.title}</h2>
          <p className={styles.subtitle}>{t.categorias.subtitle}</p>
        </div>

        <div className={styles.categoriesGrid}>
          {t.categorias.items.map((category, index) => (
            <div 
              key={index} 
              className={`${styles.categoryCard} ${selectedCategory === index ? styles.active : ''}`}
              onMouseEnter={() => handleCategoryHover(index)}
              onMouseLeave={handleCategoryLeave}
            >
              <div className={styles.categoryIcon}>
                {category.icon}
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
              <div className={styles.reportButton}>
                <span>{ingles ? "Report" : "Reportar"}</span>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas de categorías */}
        <div className={styles.statsSection}>
          <h3 className={styles.statsTitle}>
            {ingles ? "Report Statistics" : "Estadísticas de Reportes"}
          </h3>
          <div className={styles.statsGrid}>
            {(ingles ? translations.en.stats.items : translations.es.stats.items).map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDescription}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa interactivo preview */}
        <div className={styles.mapPreview}>
          <h3 className={styles.mapTitle}>
            {ingles ? "Interactive Incident Map" : "Mapa Interactivo de Incidencias"}
          </h3>
          <div className={styles.mapContainer}>
            <div className={styles.mapMockup}>
              <div className={styles.mapPin} style={{top: '30%', left: '40%'}}>
                <span>💡</span>
              </div>
              <div className={styles.mapPin} style={{top: '60%', right: '30%'}}>
                <span>🛣️</span>
              </div>
              <div className={styles.mapPin} style={{bottom: '25%', left: '25%'}}>
                <span>🗑️</span>
              </div>
              <div className={styles.mapPin} style={{top: '45%', right: '20%'}}>
                <span>🚨</span>
              </div>
              <div className={styles.mapOverlay}>
                <div className={styles.mapControls}>
                  <button className={styles.mapControl}>🔍</button>
                  <button className={styles.mapControl}>📍</button>
                  <button className={styles.mapControl}>🗺️</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion5;