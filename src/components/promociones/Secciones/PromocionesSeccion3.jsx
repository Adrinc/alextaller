// PromocionesSeccion3.jsx - Carrusel épico rehecho desde cero
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import styles from '../css/PromocionesSeccion3.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsPromociones } from '../../../data/translationsPromociones.js';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const PromocionesSeccion3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsPromociones.en : translationsPromociones.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const handleWhatsApp = (offer) => {
    const phone = "525555555555";
    const message = encodeURIComponent(
      `¡Hola! Me interesa la oferta de ${offer.title} por ${offer.discountPrice}. ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.offersSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.quickOffers.title}
            <span className={styles.titleIcon}>⚡</span>
          </h2>
          <p className={styles.subtitle}>
            {t.quickOffers.subtitle}
          </p>
        </div>

        {/* Swiper Container */}
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            pagination={{
              el: `.${styles.swiperPagination}`,
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              },
            }}
            speed={600}
            loop={true}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className={styles.swiper}
          >
            {t.quickOffers.offers.map((offer, index) => (
              <SwiperSlide key={offer.id} className={styles.swiperSlide}>
                <div className={`${styles.offerCard} ${offer.popular ? styles.popular : ''}`}>
                  {/* Popular Badge */}
                  {offer.popular && (
                    <div className={styles.popularBadge}>
                      <span className={styles.popularIcon}>🔥</span>
                      {t.common.popular}
                    </div>
                  )}

                  {/* Discount Badge */}
                  <div className={styles.discountBadge}>
                    {offer.discount}
                  </div>

                  {/* Icon Container */}
                  <div className={styles.iconContainer}>
                    <div className={styles.offerIcon}>
                      {offer.icon}
                    </div>
                    <div className={styles.iconGlow}></div>
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.offerTitle}>
                      {offer.title}
                    </h3>

                    <div className={styles.pricing}>
                      <div className={styles.originalPrice}>
                        {offer.originalPrice}
                      </div>
                      <div className={styles.discountPrice}>
                        {offer.discountPrice}
                      </div>
                    </div>

                    <div className={styles.duration}>
                      <span className={styles.durationIcon}>⏱️</span>
                      {t.common.duration} {offer.duration}
                    </div>

                    <div className={styles.includes}>
                      <span className={styles.includesIcon}>✓</span>
                      {t.quickOffers.includes}
                    </div>

                    <button
                      className={styles.ctaButton}
                      onClick={() => handleWhatsApp(offer)}
                    >
                      <span className={styles.buttonText}>{t.quickOffers.cta}</span>
                      <span className={styles.buttonIcon}>📱</span>
                    </button>
                  </div>

                  {/* Card Background Effects */}
                  <div className={styles.cardGlow}></div>
                  <div className={styles.hoverOverlay}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className={`${styles.swiperButtonPrev} ${styles.navButton}`}>
            <span>‹</span>
          </div>
          <div className={`${styles.swiperButtonNext} ${styles.navButton}`}>
            <span>›</span>
          </div>

          {/* Custom Pagination */}
          <div className={styles.swiperPagination}></div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>6</span>
            <span className={styles.statLabel}>Ofertas Express</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>45%</span>
            <span className={styles.statLabel}>Descuento Promedio</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2hrs</span>
            <span className={styles.statLabel}>Tiempo Máximo</span>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className={styles.backgroundParticles}>
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PromocionesSeccion3;
