import React, { useState, useEffect } from 'react';
import styles from '../css/demoApp.module.css';

const DemoApp = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-avanzar las pantallas cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScreen((prev) => (prev + 1) % 3);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleScreenChange = (screenIndex) => {
    if (screenIndex !== currentScreen) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentScreen(screenIndex);
        setIsAnimating(false);
      }, 300);
    }
  };

  const LoginScreen = () => (
    <div className={styles.screen}>
      <div className={styles.loginContent}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <div className={styles.eyeIcon}>👁️</div>
          </div>
        </div>
        
        <h2 className={styles.appTitle}>Ojo Ciudadano</h2>
        <p className={styles.welcomeBack}>Bienvenido de vuelta</p>
        
        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Correo electrónico</label>
            <div className={styles.inputContainer}>
              <span className={styles.inputIcon}>📧</span>
              <input 
                type="email" 
                placeholder="ejemplo@correo.com"
                className={styles.input}
              />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Contraseña</label>
            <div className={styles.inputContainer}>
              <span className={styles.inputIcon}>🔒</span>
              <input 
                type="password" 
                placeholder="Ingresa tu contraseña"
                className={styles.input}
              />
              <span className={styles.eyeToggle}>👁️</span>
            </div>
          </div>
          
          <button className={styles.loginButton}>Iniciar Sesión</button>
          
          <p className={styles.registerText}>
            ¿No tienes cuenta? <span className={styles.registerLink}>Regístrate</span>
          </p>
        </div>
      </div>
    </div>
  );

  const OnboardingScreen = () => (
    <div className={styles.screen}>
      <button className={styles.skipButton}>Saltar</button>
      
      <div className={styles.onboardingContent}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <div className={styles.eyeIcon}>👁️</div>
          </div>
        </div>
        
        <h2 className={styles.welcomeTitle}>Bienvenido a Ojo Ciudadano</h2>
        <p className={styles.welcomeSubtitle}>
          Tu herramienta para reportar y dar seguimiento a problemas en tu ciudad.
        </p>
        
        <div className={styles.dotsIndicator}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        
        <button className={styles.nextButton}>Siguiente</button>
      </div>
    </div>
  );

  const CategoriesScreen = () => (
    <div className={styles.screen}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Ojo Ciudadano</h2>
        <div className={styles.notificationIcon}>🔔</div>
      </div>
      
      <div className={styles.categoriesGrid}>
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#FEF3C7'}}>💡</div>
          <span className={styles.categoryText}>Alumbrado</span>
        </div>
        
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#FED7AA'}}>❌</div>
          <span className={styles.categoryText}>Bacheo</span>
        </div>
        
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#D1FAE5'}}>🗑️</div>
          <span className={styles.categoryText}>Recolección de basura</span>
        </div>
        
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#DBEAFE'}}>💧</div>
          <span className={styles.categoryText}>Tiraderos de agua</span>
        </div>
        
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#F3F4F6'}}>🚗</div>
          <span className={styles.categoryText}>Vehículos abandonados</span>
        </div>
        
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#FEE2E2'}}>🔊</div>
          <span className={styles.categoryText}>Exceso de ruido</span>
        </div>
        
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#F3F4F6'}}>🐾</div>
          <span className={styles.categoryText}>Maltrato animal</span>
        </div>
        
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon} style={{backgroundColor: '#FEE2E2'}}>🛡️</div>
          <span className={styles.categoryText}>Inseguridad</span>
        </div>
      </div>
      
      <div className={styles.bottomNav}>
        <div className={`${styles.navItem} ${styles.active}`}>
          <span className={styles.navIcon}>🏠</span>
          <span className={styles.navText}>Inicio</span>
        </div>
        <div className={styles.navItem}>
          <span className={styles.navIcon}>📋</span>
          <span className={styles.navText}>Reportes</span>
        </div>
        <div className={styles.navItem}>
          <span className={styles.navIcon}>👤</span>
          <span className={styles.navText}>Perfil</span>
        </div>
      </div>
    </div>
  );

  // Orden correcto: LoginScreen, OnboardingScreen, CategoriesScreen
  const screens = [LoginScreen, OnboardingScreen, CategoriesScreen];
  const CurrentScreen = screens[currentScreen];

  return (
    <div className={styles.phonePreview}>
      <div className={styles.phoneFrame}>
        <div className={styles.phoneScreen}>
          <div className={`${styles.screenContainer} ${isAnimating ? styles.animating : ''}`}>
            <CurrentScreen />
          </div>
        </div>
        
        {/* Indicadores de pantalla */}
        <div className={styles.screenIndicators}>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentScreen ? styles.active : ''}`}
              onClick={() => handleScreenChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoApp;