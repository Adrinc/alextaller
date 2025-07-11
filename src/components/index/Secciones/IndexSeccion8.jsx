import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion8.module.css";

const TagIcon = ({ tag }) => {
  switch (tag) {
    case 'usage':
      return (
        <svg className={styles.tagIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      );
    case 'privacy':
      return (
        <svg className={styles.tagIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case 'technical':
      return (
        <svg className={styles.tagIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'emergency':
      return (
        <svg className={styles.tagIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case 'account':
      return (
        <svg className={styles.tagIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    default:
      return null;
  }
};

const HomeSeccion8 = () => {
  const ingles = useStore(isEnglish);
  const [openIndex, setOpenIndex] = useState(null);
  const t = ingles ? translations.en : translations.es;

  const faqContent = {
    es: {
      faqs: [
        {
          question: "¿Los reportes son anónimos?",
          answer: "Puedes elegir hacer reportes anónimos o con tu información personal. Los reportes identificados reciben seguimiento preferencial y te permiten recibir notificaciones sobre el progreso. La privacidad de tus datos personales está garantizada conforme a las leyes de protección de datos vigentes.",
          tag: "privacy"
        },
        {
          question: "¿Qué pasa si envío un reporte falso?",
          answer: "Los reportes pasan por un proceso de verificación inicial. Si se determina que un reporte es falso, podrías recibir una advertencia. En casos reiterados de reportes falsos, tu cuenta podría ser suspendida temporalmente. Fomentamos el uso responsable de la plataforma para beneficio de toda la comunidad.",
          tag: "usage"
        },
        {
          question: "¿Cómo veo el estado de mi reporte?",
          answer: "Puedes revisar todos tus reportes y su estado actual en la sección 'Mis Reportes' dentro de la aplicación. Allí encontrarás actualizaciones en tiempo real, fotos de la resolución cuando estén disponibles, y comentarios de las autoridades encargadas de atender cada caso.",
          tag: "technical"
        },
        {
          question: "¿Puedo usar la app sin internet?",
          answer: "Sí, la aplicación está diseñada para funcionar incluso sin conexión a internet. Puedes crear reportes completos con fotos y descripción cuando no tengas señal, y estos se enviarán automáticamente en cuanto recuperes la conexión, sin necesidad de ninguna acción adicional de tu parte.",
          tag: "technical"
        },
        {
          question: "¿Cómo funciona el botón SOS?",
          answer: "El botón SOS activa una alerta de emergencia que envía tu ubicación en tiempo real a tus contactos de confianza preconfigurados y a las autoridades locales si así lo has establecido. Puede activarse presionando el botón en la app, sacudiendo el teléfono, presionando tres veces el botón de encendido o desconectando audífonos (si has habilitado estas opciones en la configuración).",
          tag: "emergency"
        }
      ]
    },
    en: {
      faqs: [
        {
          question: "Are reports anonymous?",
          answer: "You can choose to make anonymous reports or include your personal information. Identified reports receive preferential follow-up and allow you to receive notifications about progress. The privacy of your personal data is guaranteed in accordance with current data protection laws.",
          tag: "privacy"
        },
        {
          question: "What happens if I send a false report?",
          answer: "Reports go through an initial verification process. If a report is determined to be false, you may receive a warning. In repeated cases of false reports, your account could be temporarily suspended. We encourage responsible use of the platform for the benefit of the entire community.",
          tag: "usage"
        },
        {
          question: "How do I see the status of my report?",
          answer: "You can check all your reports and their current status in the 'My Reports' section within the app. There you will find real-time updates, resolution photos when available, and comments from the authorities in charge of handling each case.",
          tag: "technical"
        },
        {
          question: "Can I use the app without internet?",
          answer: "Yes, the application is designed to work even without an internet connection. You can create complete reports with photos and descriptions when you don't have a signal, and these will be sent automatically as soon as you regain connection, without requiring any additional action on your part.",
          tag: "technical"
        },
        {
          question: "How does the SOS button work?",
          answer: "The SOS button activates an emergency alert that sends your real-time location to your pre-configured trusted contacts and to local authorities if you have set it up that way. It can be activated by pressing the button in the app, shaking the phone, pressing the power button three times, or disconnecting headphones (if you have enabled these options in the settings).",
          tag: "emergency"
        }
      ]
    }
  };

  const testimonials = ingles ? t.testimonios.items : t.testimonios.items;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getTagClass = (tag) => {
    switch (tag) {
      case 'privacy':
        return styles.tagSecurity;
      case 'usage':
        return styles.tagSupport;
      case 'technical':
        return styles.tagIntegration;
      case 'emergency':
        return styles.tagMigration;
      case 'account':
        return styles.tagAccount;
      default:
        return '';
    }
  };

  return (
    <section id="preguntas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.faq.title}</h2>
          <p className={styles.subtitle}>
            <strong>{t.faq.subtitle}</strong>
            <br />
            {ingles ? "Find answers to the most common questions about our app" : "Encuentra respuestas a las preguntas más comunes sobre nuestra aplicación"}
          </p>
        </div>
        
        {/* Testimonios */}
        <div className={styles.testimonialsContainer}>
          <h3 className={styles.testimonialsTitle}>{t.testimonios.title}</h3>
          <p className={styles.testimonialsSubtitle}>{t.testimonios.subtitle}</p>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>"</div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className={styles.testimonialInfo}>
                    <p className={styles.authorName}>{testimonial.author}</p>
                    <p className={styles.authorLocation}>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Preguntas frecuentes */}
        <div className={styles.faqsGrid}>
          {(ingles ? faqContent.en.faqs : faqContent.es.faqs).map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.faqItemOpen : ''}`}>
              <button 
                className={styles.faqHeader}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.question}>
                  <span className={`${styles.tag} ${getTagClass(faq.tag)}`}>
                    <TagIcon tag={faq.tag} />
                    {faq.tag.charAt(0).toUpperCase() + faq.tag.slice(1)}
                  </span>
                  {faq.question}
                </span>
                <svg 
                  className={`${styles.icon} ${openIndex === index ? styles.iconRotated : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ''}`}
                role="region"
                aria-hidden={openIndex !== index}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contacto simplificado */}
        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>
            {ingles ? "Still have questions?" : "¿Aún tienes preguntas?"}
          </h3>
          <p className={styles.contactText}>
            {ingles ? "Contact our support team and we'll help you" : "Contacta a nuestro equipo de soporte y te ayudaremos"}
          </p>
          <a href="/contacto" className={styles.contactButton}>
            {ingles ? "Contact Support" : "Contactar Soporte"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion8;