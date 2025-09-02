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

  // Configuración de navegación por páginas para Alex Taller Mecánico
  const navSections = {
    es: [
      { id: "inicio", name: "Inicio", href: "/" },
      { id: "servicios", name: "Servicios", href: "/servicios" },
      { id: "promociones", name: "Promociones", href: "/promociones" },
      { id: "citas", name: "Citas", href: "/citas" },
      { id: "nosotros", name: "Nosotros", href: "/nosotros" },
      { id: "contacto", name: "Contacto", href: "/contacto" }
    ],
    en: [
      { id: "inicio", name: "Home", href: "/" },
      { id: "servicios", name: "Services", href: "/servicios" },
      { id: "promociones", name: "Promotions", href: "/promociones" },
      { id: "citas", name: "Appointments", href: "/citas" },
      { id: "nosotros", name: "About Us", href: "/nosotros" },
      { id: "contacto", name: "Contact", href: "/contacto" }
    ]
  };

  const currentSections = ingles ? navSections.en : navSections.es;

  useEffect(() => {
    // Detectar scroll para efectos de navbar
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Detectar página activa basada en la URL
    const detectActivePage = () => {
      if (typeof window === 'undefined') return;
      
      const currentPath = window.location.pathname;
      
      // Mapear rutas a IDs de sección
      const routeMapping = {
        '/': 'inicio',
        '/servicios': 'servicios',
        '/promociones': 'promociones',
        '/citas': 'citas',
        '/nosotros': 'nosotros',
        '/contacto': 'contacto'
      };
      
      const activePageId = routeMapping[currentPath] || 'inicio';
      setActiveSection(activePageId);
    };

    // Detectar página activa al cargar
    detectActivePage();

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

  // Función para navegar a páginas específicas
  const navigateToPage = (href, sectionId) => {
    // Cerrar el menú móvil si está abierto
    setIsOpen(false);
    
    // Navegar a la página correspondiente
    if (typeof window !== 'undefined') {
      // Si es la misma página, no recargar
      if (window.location.pathname === href) {
        return;
      }
      
      // Navegar a la nueva página
      window.location.href = href;
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
      
      {/* Logo con nombre de Alex Taller Mecánico */}
      <div className={styles.logopic} onClick={() => navigateToPage('/', 'inicio')}>
        <img src="/favicon.png" alt="Alex Taller Mecánico Logo" />
        <div className={styles.logoText}>
          <span className={styles.appName}>Alex Taller</span>
          <span className={styles.appTagline}>
            {ingles ? "Professional Service" : "Servicio Profesional"}
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
              onClick={() => navigateToPage(section.href, section.id)}
              className={`${styles.navLink} ${isActiveLink(section.id) ? styles.activeLink : ""}`}
            >
              {section.name}
            </button>
          </li>
        ))}
        
        {/* Botón de login para móvil */}
        <li className={`${styles.navItem} ${styles.mobileContactItem} ${styles.mobileOnly}`}>
          <button 
            className={`${styles.contactButton} ${styles.mobileContactButton}`} 
            onClick={() => navigateToPage('/login', 'login')}
          >
            <span className={styles.buttonText}>
              {ingles ? "Login" : "Iniciar Sesión"}
            </span>
            <div className={styles.buttonShine}></div>
          </button>
        </li>
      </ul>

      {/* Grupo de íconos sociales del taller */}
      <div className={styles.socialIconsGroup}>
        <a href="https://www.facebook.com/AlexTallerMecanico" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/facebook.svg" alt="Facebook Alex Taller" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="https://www.instagram.com/alextaller" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/insta.svg" alt="Instagram Alex Taller" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="tel:+526641234567" className={styles.socialLink}>
          <img src="/icons/phone.svg" alt="Teléfono" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
      </div>

      {/* Botón de login con efectos premium */}
      <div className={styles.desktopOnly}>
        <button 
          className={styles.contactButton} 
          onClick={() => navigateToPage('/login', 'login')}
        >
          <span className={styles.buttonText}>
            {ingles ? "Login" : "Iniciar Sesión"}
          </span>
          <span className={styles.buttonIcon}>�</span>
          <div className={styles.buttonShine}></div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
