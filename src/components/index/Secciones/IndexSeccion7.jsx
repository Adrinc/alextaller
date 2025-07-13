import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion7.module.css";

const HomeSeccion7 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  return (
    <section id="descarga" className={styles.section}>
      <div className={styles.backgroundPattern}></div>
      
      {/* Header con badge y títulos mejorados */}
      <div className={styles.container}>
        <div className={styles.headerBadge}>
          <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>{ingles ? "Official Municipal App" : "App Oficial Municipal"}</span>
        </div>
        
        <h2 className={styles.title}>{t.cta.title}</h2>
        <h3 className={styles.subtitle}>{t.cta.subtitle}</h3>
        <p className={styles.description}>{t.cta.description}</p>
        
        {/* Sección de credenciales y confianza */}
        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
            </svg>
            <span>{ingles ? "Secure & Verified" : "Segura y Verificada"}</span>
          </div>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>{ingles ? "Government Endorsed" : "Respaldada por el Gobierno"}</span>
          </div>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>{ingles ? "Award Winning" : "Premiada"}</span>
          </div>
        </div>

        {/* Estadísticas mejoradas */}
        <div className={styles.statsSection}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4.5c0-1.1.9-2 2-2s2 .9 2 2V18h6v-7.5c0-1.1.9-2 2-2s2 .9 2 2V18h2v2H2v-2h2z"/>
                </svg>
              </div>
              <div className={styles.statNumber}>15,000+</div>
              <div className={styles.statText}>{ingles ? "Active Citizens" : "Ciudadanos Activos"}</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className={styles.statNumber}>89%</div>
              <div className={styles.statText}>{ingles ? "Resolution Rate" : "Tasa de Resolución"}</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className={styles.statNumber}>24h</div>
              <div className={styles.statText}>{ingles ? "Avg. Response" : "Respuesta Promedio"}</div>
            </div>
          </div>
        </div>
        
        {/* Botones de descarga premium */}
        <div className={styles.downloadSection}>
          <h4 className={styles.downloadTitle}>
            {ingles ? "Download the Official App" : "Descarga la App Oficial"}
          </h4>
          <div className={styles.downloadButtonsContainer}>
            <a href="#download-android" className={styles.downloadButton}>
              <div className={styles.storeIconContainer}>
                <svg className={styles.playStoreIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className={styles.storeTextContainer}>
                <span className={styles.storeLabel}>
                  {ingles ? "Get it on" : "Descárgala en"}
                </span>
                <span className={styles.storeName}>Google Play</span>
              </div>
            </a>
            <a href="#download-ios" className={styles.downloadButton}>
              <div className={styles.storeIconContainer}>
                <svg className={styles.appStoreIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
              </div>
              <div className={styles.storeTextContainer}>
                <span className={styles.storeLabel}>
                  {ingles ? "Download on the" : "Descargar en"}
                </span>
                <span className={styles.storeName}>App Store</span>
              </div>
            </a>
          </div>
          
          {/* Información adicional de descarga */}
          <div className={styles.downloadInfo}>
            <div className={styles.downloadFeature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>{ingles ? "Free Download" : "Descarga Gratuita"}</span>
            </div>
            <div className={styles.downloadFeature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
              <span>{ingles ? "Secure & Private" : "Segura y Privada"}</span>
            </div>
          </div>
        </div>

        {/* Preview de smartphones mejorado */}
        <div className={styles.previewSection}>
          <h4 className={styles.previewTitle}>
            {ingles ? "See it in Action" : "Mírala en Acción"}
          </h4>
          <div className={styles.appPreviewsContainer}>
            {/* Primer smartphone - Pantalla de Onboarding */}
            <div className={styles.appScreenshotWrapper}>
              <div className={styles.appScreenshot}>
                <div className={styles.appInterface}>
                  <div className={styles.appHeader}>
                    <div className={styles.statusBar}>
                      <span className={styles.skipButton}>Saltar</span>
                    </div>
                  </div>
                  <div className={styles.onboardingContent}>
                    <div className={styles.logoCircle}>
                      <svg className={styles.eyeIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                    <h2 className={styles.onboardingTitle}>Bienvenido a Ojo Ciudadano</h2>
                    <p className={styles.onboardingSubtitle}>Tu herramienta para reportar y dar seguimiento a problemas en tu ciudad.</p>
                    <div className={styles.dotsIndicator}>
                      <span className={styles.dot + ' ' + styles.activeDot}></span>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                    </div>
                    <button className={styles.nextButton}>Siguiente</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Segundo smartphone - Pantalla de Login */}
            <div className={styles.appScreenshotWrapper}>
              <div className={styles.appScreenshot}>
                <div className={styles.appInterface}>
                  <div className={styles.appHeader}></div>
                  <div className={styles.loginContent}>
                    <div className={styles.logoCircleSmall}>
                      <svg className={styles.eyeIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                    <h2 className={styles.loginTitle}>Ojo Ciudadano</h2>
                    <p className={styles.loginSubtitle}>Bienvenido de vuelta</p>
                    
                    <div className={styles.formContainer}>
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Correo electrónico</label>
                        <div className={styles.inputWrapper}>
                          <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          <span className={styles.inputPlaceholder}>ejemplo@correo.com</span>
                        </div>
                      </div>
                      
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Contraseña</label>
                        <div className={styles.inputWrapper}>
                          <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                          </svg>
                          <span className={styles.inputPlaceholder}>Ingresa tu contraseña</span>
                          <svg className={styles.eyeIconSmall} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <button className={styles.loginButton}>Iniciar Sesión</button>
                      <p className={styles.registerLink}>¿No tienes cuenta? <span>Regístrate</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
  {/*       <div className={styles.finalCta}>
          <a href="#reports" className={styles.ctaButton}>
            <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            {t.cta.buttons.secondary}
          </a>
          <a href="#contact" className={styles.contactButton}>
            {t.cta.buttons.contact}
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HomeSeccion7;