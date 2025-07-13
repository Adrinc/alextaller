import React, { useEffect, useRef } from 'react';
import styles from './ContactoSeccion.module.css';
import FormContact from '../react_components/FormContacto/FormContacto.jsx';
import { isEnglish } from '../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../data/translations';

const FloatingParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear menos partículas más sutiles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.2 + 0.05,
        color: Math.random() > 0.5 ? 'rgba(196, 182, 140,' : 'rgba(255, 255, 255,'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.opacity + ')';
        ctx.fill();
        
        // Conectar solo partículas muy cercanas con líneas más sutiles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(196, 182, 140, ${0.05 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={styles.particleCanvas}
    />
  );
};

const ContactoSeccion = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en.contactoSeccion : translations.es.contactoSeccion;

  return (
    <section id="Contacto" className={styles.section}>
      <FloatingParticles />
      
      {/* Elementos decorativos de fondo */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
        <div className={styles.shape5}></div>
      </div>
      
      {/* Formas geométricas */}
      <div className={styles.geometricShapes}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.triangle3}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.formColumn}>
          <FormContact />
        </div>
      </div>
      
      <div className={styles.infoColumn}>
        <div className={styles.containerInfo}>
          <div className={styles.logoContainer}>
            <img src="./favicon.png" alt="Logo" className={styles.logo} />
            <div className={styles.logoGlow}></div>
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.titleWord}>{t.title.split(' ')[0]}</span>
            <span className={styles.titleWord}>{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <p className={styles.description}>
            {t.description}
          </p>
          
          <div className={styles.decorativeElements}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.esfera} />
    </section>
  );
};

export default ContactoSeccion;
