// IndexSeccion3.jsx - Promociones con Neumorphism
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables.js';
import { useEffect, useState, useRef } from 'react';
import styles from '../css/indexSeccion3.module.css';
import CardComponent from '../components/CardComponent.jsx';

export default function IndexSeccion3() {
  const $isEnglish = useStore(isEnglish);
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const sectionRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promotions = [
    {
      icon: "🚀",
      title: $isEnglish ? "Digital Transformation" : "Transformación Digital",
      description: $isEnglish 
        ? "Complete automation of your business processes with AI and modern tools"
        : "Automatización completa de tus procesos empresariales con IA y herramientas modernas",
      price: "$2,999",
      originalPrice: "$4,999",
      discount: "40% OFF"
    },
    {
      icon: "⚡",
      title: $isEnglish ? "Smart Infrastructure" : "Infraestructura Inteligente",
      description: $isEnglish
        ? "Cloud implementation and optimization for maximum performance and security"
        : "Implementación y optimización en la nube para máximo rendimiento y seguridad",
      price: "$1,999",
      originalPrice: "$3,499",
      discount: "43% OFF"
    },
    {
      icon: "🎯",
      title: $isEnglish ? "Strategic Consulting" : "Consultoría Estratégica",
      description: $isEnglish
        ? "Expert guidance for digital growth and technological innovation"
        : "Asesoría experta para crecimiento digital e innovación tecnológica",
      price: "$999",
      originalPrice: "$1,999",
      discount: "50% OFF"
    }
  ];

  return (
    <section className={styles.promotions} ref={sectionRef}>
      {/* Elementos flotantes */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingIcon} style={{'--delay': '0s'}}>�</div>
        <div className={styles.floatingIcon} style={{'--delay': '1s'}}>⚡</div>
        <div className={styles.floatingIcon} style={{'--delay': '2s'}}>�</div>
        <div className={styles.floatingIcon} style={{'--delay': '3s'}}>🎯</div>
        <div className={styles.floatingIcon} style={{'--delay': '4s'}}>✨</div>
      </div>

      {/* Partículas */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={styles.particle}
            style={{
              '--delay': `${i * 0.5}s`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🔥</span>
            {$isEnglish ? "LIMITED TIME OFFER" : "OFERTA POR TIEMPO LIMITADO"}
          </div>
          
          <h2 className={styles.title}>
            {$isEnglish ? "EPIC PROMOTIONS" : "PROMOCIONES ÉPICAS"}
          </h2>
          
          <p className={styles.subtitle}>
            {$isEnglish 
              ? "Transform your business with our most powerful solutions at unbeatable prices"
              : "Transforma tu negocio con nuestras soluciones más potentes a precios imbatibles"
            }
          </p>

          {/* Countdown Timer */}
          <div className={styles.countdown}>
            <p className={styles.countdownText}>
              {$isEnglish ? "Offer expires in:" : "La oferta expira en:"}
            </p>
            <div className={styles.timer}>
              <div className={styles.timeUnit}>
                <div className={styles.timeNumber}>{countdown.hours.toString().padStart(2, '0')}</div>
                <div className={styles.timeLabel}>{$isEnglish ? "hours" : "horas"}</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeNumber}>{countdown.minutes.toString().padStart(2, '0')}</div>
                <div className={styles.timeLabel}>{$isEnglish ? "min" : "min"}</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeNumber}>{countdown.seconds.toString().padStart(2, '0')}</div>
                <div className={styles.timeLabel}>{$isEnglish ? "sec" : "seg"}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {promotions.map((promo, index) => (
            <CardComponent
              key={index}
              icon={promo.icon}
              title={promo.title}
              description={promo.description}
              price={promo.price}
              originalPrice={promo.originalPrice}
              discount={promo.discount}
              isVisible={isVisible}
              delay={index * 200}
              isEnglish={$isEnglish}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
