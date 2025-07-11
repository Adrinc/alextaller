import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";

import { useStore } from "@nanostores/react";
import { isEnglish, selectedCountry } from "../../data/variables"; 
import { useLang } from "../../data/signals";
import { translations } from "../../data/translations";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const country = useStore(selectedCountry);
  const { t, changeLang, lang } = useLang();
  const ingles = useStore(isEnglish);

  // Configuración de las secciones de navegación
  const navSections = {
    es: [
      { id: "inicio", name: "Inicio", href: "#hero" },
      { id: "app", name: "La App", href: "#que-es" },
      { id: "funciones", name: "Funciones", href: "#caracteristicas" },
      { id: "reportar", name: "Reportar", href: "#categorias" },
      { id: "gobierno", name: "Gobierno", href: "#soporte-institucional" },
      { id: "faq", name: "FAQ", href: "#preguntas" }
    ],
    en: [
      { id: "inicio", name: "Home", href: "#hero" }, // Mismo ID, diferente nombre
      { id: "app", name: "The App", href: "#que-es" },
      { id: "funciones", name: "Features", href: "#caracteristicas" },
      { id: "reportar", name: "Report", href: "#categorias" },
      { id: "gobierno", name: "Government", href: "#soporte-institucional" },
      { id: "faq", name: "FAQ", href: "#preguntas" }
    ]
  };

  const currentSections = ingles ? navSections.en : navSections.es;

  useEffect(() => {
    // Detectar scroll para efectos de navbar
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Detectar sección activa basada en scroll
      detectActiveSection();
      
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Detectar sección activa - usar siempre los mismos selectores
    const detectActiveSection = () => {
      const sections = [
        { id: "inicio", element: document.querySelector('#hero') },
        { id: "app", element: document.querySelector('#que-es') },
        { id: "funciones", element: document.querySelector('#caracteristicas') },
        { id: "reportar", element: document.querySelector('#categorias') },
        { id: "gobierno", element: document.querySelector('#soporte-institucional') },
        { id: "faq", element: document.querySelector('#preguntas') }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Detectar cambios de tamaño de ventana
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
      }
    };

    // Event listeners
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el cambio de país en el switch
  const handleSwitch = (country) => {
    selectedCountry.set(country);
    if (country === "mex") {
      isEnglish.set(false);
      changeLang("es");
    } else if (country === "usa") {
      isEnglish.set(true);
      changeLang("en");
    }
  };

  // Función para navegación suave a secciones
  const scrollToSection = (href, sectionId) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Función para verificar si el enlace está activo
  const isActiveLink = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Overlay para móvil */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu} />}
      
      {/* Logo con nombre de la app */}
      <div className={styles.logopic} onClick={() => scrollToSection('#hero', 'inicio')}>
        <img src="/favicon.png" alt="Ojo Ciudadano Logo" />
        <div className={styles.logoText}>
          <span className={styles.appName}>Ojo Ciudadano</span>
          <span className={styles.appTagline}>
            {ingles ? "Your voice counts" : "Tu voz cuenta"}
          </span>
        </div>
        <div className={styles.logoGlow}></div>
      </div>

      {/* Switch de países mejorado */}
      <div className={styles.countrySwitch}>
        <div
          className={`${styles.switchIconContainer} ${country === "mex" ? styles.active : styles.inactive}`}
          onClick={() => handleSwitch("mex")}
        >
          <img src="/icons/icon_mex.webp" alt="Mexico" className={styles.switchIcon} />
        </div>
        <div
          className={`${styles.switchIconContainer} ${country === "usa" ? styles.active : styles.inactive}`}
          onClick={() => handleSwitch("usa")}
        >
          <img src="/icons/icon_usa.webp" alt="USA" className={styles.switchIcon} />
        </div>
        <div className={styles.switchIndicator}></div>
      </div>

      {/* Ícono de menú hamburguesa animado */}
      <div 
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`} 
        onClick={toggleMenu} 
        ref={buttonRef}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Menú de navegación con indicadores activos */}
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`} ref={menuRef}>
        {currentSections.map((section, index) => (
          <li key={section.id} className={styles.navItem}>
            <button 
              onClick={() => scrollToSection(section.href, section.id)}
              className={`${styles.navLink} ${isActiveLink(section.id) ? styles.activeLink : ""}`}
            >
              {section.name}
            </button>
          </li>
        ))}
        
        {/* Botón de contacto para móvil */}
        <li className={`${styles.navItem} ${styles.mobileContactItem} ${styles.mobileOnly}`}>
          <a className={`${styles.contactButton} ${styles.mobileContactButton}`} href="/contacto">
            <span className={styles.buttonText}>
              {ingles ? "Contact" : "Contacto"}
            </span>
            <div className={styles.buttonShine}></div>
          </a>
        </li>
      </ul>

      {/* Grupo de íconos sociales gubernamentales */}
      <div className={styles.socialIconsGroup}>
        <a href="https://www.facebook.com/MunicipioEnsenada" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/facebook.svg" alt="Facebook Municipal" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="https://twitter.com/EnsenadaAyto" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/twitter.svg" alt="Twitter Municipal" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="mailto:ojociudadano@ensenada.gob.mx" className={styles.socialLink}>
          <img src="/icons/email.svg" alt="Email" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
      </div>

      {/* Botón de contacto con efectos premium */}
      <div className={styles.desktopOnly}>
        <a className={styles.contactButton} href="/contacto">
          <span className={styles.buttonText}>
            {ingles ? "Contact" : "Contacto"}
          </span>
          <div className={styles.buttonShine}></div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
