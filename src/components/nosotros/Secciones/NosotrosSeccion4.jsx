// NosotrosSeccion4.jsx - Conoce a nuestro equipo con cards del personal
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/NosotrosSeccion4.module.css';
import { isEnglish } from '../../../data/variables.js';
import { translationsNosotros } from '../../../data/translationsNosotros.js';

const NosotrosSeccion4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const sectionRef = useRef(null);
  
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en : translationsNosotros.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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

  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };

  const getMemberAvatar = (memberId) => {
    // Using testimonial avatars as placeholders for team members
    const avatarMap = {
      alejandro: '/image/testimonials/avatar1.png',
      jose: '/image/testimonials/avatar2.png',
      carla: '/image/testimonials/avatar3.png',
      mario: '/image/testimonials/avatar1.png',
      luis: '/image/testimonials/avatar2.png',
      ana: '/image/testimonials/avatar3.png'
    };
    return avatarMap[memberId] || '/image/testimonials/avatar1.png';
  };

  return (
    <section 
      id="nuestro-equipo"
      ref={sectionRef}
      className={`${styles.equipoSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.tagline}>
            <span className={styles.tagIcon}>👥</span>
            <span className={styles.tagText}>Nuestro Equipo</span>
          </div>
          <h2 className={styles.sectionTitle}>{t.equipo.title}</h2>
          <p className={styles.sectionSubtitle}>{t.equipo.subtitle}</p>
        </div>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {t.equipo.members.map((member, index) => (
            <div
              key={member.id}
              className={`${styles.memberCard} ${
                selectedMember?.id === member.id ? styles.selected : ''
              } ${hoveredMember === member.id ? styles.hovered : ''}`}
              onClick={() => handleMemberClick(member)}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Card Background */}
              <div className={styles.cardBackground}></div>
              
              {/* Member Photo */}
              <div className={styles.photoContainer}>
                <div className={styles.photoFrame}>
                  <img 
                    src={getMemberAvatar(member.id)}
                    alt={member.name}
                    className={styles.memberPhoto}
                  />
                  <div className={styles.photoOverlay}></div>
                </div>
                
                {/* Status Indicator */}
                <div className={styles.statusIndicator}>
                  <div className={styles.statusDot}></div>
                  <span className={styles.statusText}>Activo</span>
                </div>
              </div>

              {/* Member Info */}
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberExperience}>{member.experience}</p>
                
                {/* Specialty Badge */}
                <div className={styles.specialtyBadge}>
                  <span className={styles.specialtyIcon}>⭐</span>
                  <span className={styles.specialtyText}>{member.specialty}</span>
                </div>

                {/* Skills Bar */}
                <div className={styles.skillsContainer}>
                  <div className={styles.skillBar}>
                    <div className={styles.skillFill}></div>
                  </div>
                  <span className={styles.skillLabel}>Expertise</span>
                </div>
              </div>

              {/* Expanded Content */}
              <div className={styles.expandedContent}>
                <p className={styles.memberDescription}>
                  {member.description}
                </p>
                
                {/* Achievement Stats */}
                <div className={styles.achievements}>
                  <div className={styles.achievement}>
                    <span className={styles.achievementNumber}>
                      {member.id === 'alejandro' ? '2000+' : 
                       member.id === 'jose' ? '1500+' : 
                       member.id === 'carla' ? '3000+' :
                       member.id === 'mario' ? '5000+' :
                       member.id === 'luis' ? '800+' : '1200+'}
                    </span>
                    <span className={styles.achievementLabel}>
                      {member.id === 'carla' ? 'Clientes atendidos' : 'Reparaciones'}
                    </span>
                  </div>
                  <div className={styles.achievement}>
                    <span className={styles.achievementNumber}>100%</span>
                    <span className={styles.achievementLabel}>Satisfacción</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className={styles.contactInfo}>
                  <button className={styles.contactButton}>
                    <span className={styles.contactIcon}>💬</span>
                    <span>Consultar</span>
                  </button>
                </div>
              </div>

              {/* Hover Effects */}
              <div className={styles.hoverEffects}>
                <div className={styles.shimmer}></div>
                <div className={styles.cornerAccent}></div>
              </div>

              {/* Card Glow */}
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className={styles.teamStats}>
          <div className={styles.statsCard}>
            <h3 className={styles.statsTitle}>Nuestro Equipo en Números</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>Especialistas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Años de experiencia combinada</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15K+</span>
                <span className={styles.statLabel}>Clientes atendidos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Disponibilidad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.teamCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              ¿Listo para conocer a nuestro equipo en persona?
            </h3>
            <p className={styles.ctaDescription}>
              Visita nuestro taller y conoce a los expertos que cuidarán tu auto
            </p>
            <button className={styles.ctaButton}>
              <span className={styles.ctaButtonText}>Visítanos hoy</span>
              <span className={styles.ctaButtonIcon}>🚗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.techPattern}></div>
        <div className={styles.floatingGears}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={styles.gear}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 2}s`
              }}
            >
              ⚙️
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientMesh1}></div>
        <div className={styles.gradientMesh2}></div>
        <div className={styles.gradientMesh3}></div>
      </div>
    </section>
  );
};

export default NosotrosSeccion4;
