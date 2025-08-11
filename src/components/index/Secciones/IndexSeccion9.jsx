import React, { useState, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import SmartphoneDemo from '../components/SmartphoneDemo';
import AnalysisDashboard from '../components/AnalysisDashboard';
import styles from "../css/indexSeccion9.module.css";

const IndexSeccion9 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en.ia : translations.es.ia;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // 0: Motor IA, 1: Estado IA, 2: Resultados

  // Mensajes automáticos para el robot
  const processingMessages = {
    es: [
      "Procesando imágenes JPG, PNG, WEBP...",
      "Analizando videos MP4, AVI, MOV...", 
      "Revisando documentos PDF, DOCX...",
      "Procesando audio MP3, WAV, M4A...",
      "Detectando contenido visual...",
      "Identificando patrones...",
      "Procesamiento en tiempo real...",
      "Verificando metadatos..."
    ],
    en: [
      "Processing JPG, PNG, WEBP images...",
      "Analyzing MP4, AVI, MOV videos...",
      "Reviewing PDF, DOCX documents...", 
      "Processing MP3, WAV, M4A audio...",
      "Detecting visual content...",
      "Identifying patterns...",
      "Real-time processing...",
      "Verifying metadata..."
    ]
  };

  useEffect(() => {
    // Reloj
    const clockInterval = setInterval(() => setCurrentTime(new Date()), 1000);

    // Mensajes del robot
    const messageInterval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setCurrentMessage(prev => (prev + 1) % processingMessages.es.length), 100);
      setTimeout(() => setShowMessage(false), 3000);
    }, 5000);

    // Carrusel de 3 pasos
    const carouselInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(messageInterval);
      clearInterval(carouselInterval);
    };
  }, []);

  // Reflejar el estado de análisis según el slide actual
  useEffect(() => {
    if (currentSlide === 0) {
      setIsAnalyzing(true);
      setAnalysisComplete(false);
    } else if (currentSlide === 1) {
      setIsAnalyzing(true);
      setAnalysisComplete(false);
    } else {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }
  }, [currentSlide]);

 

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-MX', { 
      hour12: false,
      timeZone: 'America/Mexico_City'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="ia-analisis" className={styles.section}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern}></div>

      <div className={styles.container}>
        {/* Header Institucional */}
        <div className={styles.header}>
          <div className={styles.institutionalBadge}>
            <div className={styles.governmentSeal}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
              </svg>
            </div>
            <div className={styles.badgeContent}>
              <span className={styles.badgeTitle}>
                {ingles ? "CERTIFIED AI TECHNOLOGY" : "TECNOLOGÍA IA CERTIFICADA"}
              </span>
              <span className={styles.badgeSubtitle}>
                {ingles ? "Government Security Approved" : "Aprobada por Seguridad Gubernamental"}
              </span>
            </div>
            <div className={styles.certificationNumber}>
              <span>CERT-IA-2024-MX</span>
            </div>
          </div>
          
          <h2 className={styles.title}>
            {ingles 
              ? "Intelligent Analysis System for Citizen Reports" 
              : "Sistema de Análisis Inteligente para Reportes Ciudadanos"
            }
          </h2>
          <p className={styles.subtitle}>
            {ingles 
              ? "Advanced artificial intelligence that processes multimedia content in real time"
              : "Inteligencia artificial avanzada que procesa contenido multimedia en tiempo real"
            }
          </p>
          <p className={styles.description}>
            {ingles 
              ? "Our AI system analyzes images, videos, text documents and audio recordings to validate, prioritize and route citizen reports efficiently and accurately."
              : "Nuestro sistema de IA analiza imágenes, videos, documentos de texto y grabaciones de audio para validar, priorizar y enrutar reportes ciudadanos de manera eficiente y precisa."
            }
          </p>

          {/* Official Time and Status */}
          <div className={styles.officialInfo}>
            <div className={styles.timeDisplay}>
              <div className={styles.timeLabel}>
                {ingles ? "OFFICIAL TIME" : "HORA OFICIAL"}
              </div>
              <div className={styles.timeValue}>
                {formatTime(currentTime)}
              </div>
              <div className={styles.dateValue}>
                {formatDate(currentTime)}
              </div>
            </div>
            <div className={styles.statusIndicators}>
              <div className={styles.statusItem}>
                <div className={`${styles.statusDot} ${styles.online}`}></div>
                <span>{ingles ? "System: ONLINE" : "Sistema: EN LÍNEA"}</span>
              </div>
              <div className={styles.statusItem}>
                <div className={`${styles.statusDot} ${styles.online}`}></div>
                <span>{ingles ? "Processing: 1,247/hour" : "Procesando: 1,247/hora"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centro de Control Principal */}
        <div className={styles.controlCenter}>
          <div className={styles.centerHeader}>
            <h3 className={styles.centerTitle}>
              {ingles ? "AI ANALYSIS CONTROL CENTER" : "CENTRO DE CONTROL DE ANÁLISIS IA"}
            </h3>
            <div className={styles.securityBadge}>
              <span>{ingles ? "SECURE" : "SEGURO"}</span>
            </div>
          </div>

          <div className={styles.mainWorkspace}>
            {/* Panel Izquierdo - Smartphone Demo */}
            <div className={styles.workspacePanel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelIcon}>📱</div>
                <h4 className={styles.panelTitle}>
                  {ingles ? "CITIZEN INTERFACE" : "INTERFAZ CIUDADANA"}
                </h4>
                <div className={styles.folioNumber}>
                  FOL-2024-001247
                </div>
              </div>
              <div className={styles.panelContent}>
                <SmartphoneDemo isEnglish={ingles} />
              </div>
            </div>

            {/* Panel Central - Flujo simple + Carrusel */}
            <div className={styles.dataFlowPanel}>
              <div className={styles.flowHeader}>
                <h4 className={styles.flowTitle}>
                  {ingles ? "AI PROCESSING PIPELINE" : "TUBERÍA DE PROCESAMIENTO IA"}
                </h4>
                <div className={styles.throughputInfo}>
                  <span>{ingles ? "Throughput:" : "Rendimiento:"}</span>
                  <span className={styles.throughputValue}>3.2 req/s</span>
                </div>
              </div>
              <div className={styles.simpleFlow}>
                {/* Fuentes de entrada con barras individuales */}
                <div className={styles.inputSection}>
                  <h5 className={styles.sectionTitle}>
                    {ingles ? "INPUT SOURCES" : "FUENTES DE ENTRADA"}
                  </h5>
                  <div className={styles.inputGrid}>
                    <div className={`${styles.inputNode} ${isAnalyzing ? styles.active : ''}`}>
                      <div className={styles.inputIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                          <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z"/>
                        </svg>
                      </div>
                      <div className={styles.inputLabel}>{ingles ? "IMAGES" : "IMÁGENES"}</div>
                      <div className={styles.inputFormats}>JPG • PNG • WEBP</div>
                      <div className={styles.individualProgressBar}>
                        <div className={`${styles.individualProgressFill} ${isAnalyzing ? styles.animating : ''}`} 
                             style={{ animationDelay: '0s' }}></div>
                      </div>
                    </div>
                    <div className={`${styles.inputNode} ${isAnalyzing ? styles.active : ''}`}>
                      <div className={styles.inputIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                          <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>
                        </svg>
                      </div>
                      <div className={styles.inputLabel}>{ingles ? "VIDEOS" : "VIDEOS"}</div>
                      <div className={styles.inputFormats}>MP4 • AVI • MOV</div>
                      <div className={styles.individualProgressBar}>
                        <div className={`${styles.individualProgressFill} ${isAnalyzing ? styles.animating : ''}`}
                             style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                    <div className={`${styles.inputNode} ${isAnalyzing ? styles.active : ''}`}>
                      <div className={styles.inputIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                          <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"/>
                        </svg>
                      </div>
                      <div className={styles.inputLabel}>{ingles ? "DOCUMENTS" : "DOCUMENTOS"}</div>
                      <div className={styles.inputFormats}>PDF • DOCX • XLS</div>
                      <div className={styles.individualProgressBar}>
                        <div className={`${styles.individualProgressFill} ${isAnalyzing ? styles.animating : ''}`}
                             style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                    <div className={`${styles.inputNode} ${isAnalyzing ? styles.active : ''}`}>
                      <div className={styles.inputIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                          <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
                        </svg>
                      </div>
                      <div className={styles.inputLabel}>AUDIO</div>
                      <div className={styles.inputFormats}>MP3 • WAV • M4A</div>
                      <div className={styles.individualProgressBar}>
                        <div className={`${styles.individualProgressFill} ${isAnalyzing ? styles.animating : ''}`}
                             style={{ animationDelay: '1.5s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carrusel de 3 etapas centrado */}
                <div className={styles.carousel}>
                  <div className={styles.carouselContainer}>
                    <div className={styles.carouselViewport}>
                      <div
                        className={styles.carouselTrack}
                        style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                      >
                        {/* Slide 1 - Motor IA */}
                        <div className={styles.carouselSlide}>
                          <div className={styles.aiEngineBox}>
                            <div className={styles.aiEngineHeader}>
                              <span className={styles.aiEngineTitle}>
                                {ingles ? "AI ENGINE" : "MOTOR IA"}
                              </span>
                              <div className={styles.aiEngineStatus}>
                                <div className={`${styles.statusDot} ${currentSlide === 0 ? styles.active : ''}`}></div>
                                <span>{ingles ? "ONLINE" : "EN LÍNEA"}</span>
                              </div>
                            </div>
                            <div className={styles.robotSection}>
                              <div className={styles.robotContainer}>
                                <div className={styles.energyRings}>
                                  <div className={styles.energyRing}></div>
                                  <div className={styles.energyRing}></div>
                                  <div className={styles.energyRing}></div>
                                </div>
                                <img
                                  src="/image/global/robot3.png"
                                  alt="IA Robot Analyzer"
                                  className={`${styles.robotImage} ${currentSlide === 0 ? styles.processing : ''}`}
                                />
                              </div>
                            </div>
                            <div className={styles.processingStatus}>
                              <div className={styles.processingText}>
                                {ingles ? "ANALYZING..." : "ANALIZANDO..."}
                              </div>
                              <div className={styles.processingBar}>
                                <div className={styles.processingFill}></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Slide 2 - Estado IA */}
                        <div className={styles.carouselSlide}>
                          <div className={styles.statusCard}>
                            <div className={styles.statusHeader}>
                              <div className={styles.statusIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                  <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"/>
                                </svg>
                              </div>
                              <div className={styles.statusTitle}>
                                {ingles ? "AI STATUS" : "ESTADO IA"}
                              </div>
                            </div>
                            <div className={styles.statusBody}>
                              {ingles ? "Reviewing document, checking sections and metadata..." : "Revisando documento, verificando secciones y metadatos..."}
                            </div>
                            <div className={styles.processingBar}>
                              <div className={styles.processingFill}></div>
                            </div>
                          </div>
                        </div>

                        {/* Slide 3 - Resultados */}
                        <div className={styles.carouselSlide}>
                          <div className={`${styles.resultCard} ${currentSlide === 2 ? styles.complete : ''}`}>
                            <div className={styles.resultIcon}>
                              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
                              </svg>
                            </div>
                            <div className={styles.resultContent}>
                              <div className={styles.resultTitle}>
                                {ingles ? "STATISTICAL ANALYSIS" : "ANÁLISIS ESTADÍSTICO"}
                              </div>
                              <div className={styles.resultStatus}>
                                {currentSlide === 2 ? (ingles ? "✓ COMPLETE" : "✓ COMPLETO") : (ingles ? "PENDING..." : "PENDIENTE...")}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dots del carrusel */}
                  <div className={styles.carouselDots}>
                    {[0,1,2].map(i => (
                      <span key={i} className={`${styles.dot} ${currentSlide === i ? styles.active : ''}`}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Derecho - Dashboard de Análisis */}
            <div className={styles.workspacePanel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelIcon}>📊</div>
                <h4 className={styles.panelTitle}>
                  {ingles ? "ANALYSIS DASHBOARD" : "DASHBOARD DE ANÁLISIS"}
                </h4>
                <div className={styles.accuracyBadge}>
                  94.7% {ingles ? "ACC" : "PREC"}
                </div>
              </div>
              <div className={styles.panelContent}>
                <AnalysisDashboard 
                  isEnglish={ingles} 
                  analysisComplete={analysisComplete}
                  isAnalyzing={isAnalyzing}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Capacidades de IA - Estilo Gubernamental */}
        <div className={styles.capabilitiesSection}>
          <div className={styles.capabilitiesHeader}>
            <h3 className={styles.capabilitiesTitle}>
              {ingles 
                ? "ARTIFICIAL INTELLIGENCE CAPABILITIES" 
                : "CAPACIDADES DE INTELIGENCIA ARTIFICIAL"
              }
            </h3>
            <div className={styles.capabilitiesSubtitle}>
              {ingles 
                ? "Advanced multimedia processing for government applications"
                : "Procesamiento multimedia avanzado para aplicaciones gubernamentales"
              }
            </div>
          </div>

          <div className={styles.capabilitiesGrid}>
            <div className={styles.capabilityCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>📷</div>
                <div className={styles.cardTitle}>
                  {ingles ? "IMAGE ANALYSIS" : "ANÁLISIS DE IMÁGENES"}
                </div>
                <div className={styles.accuracyScore}>97.3%</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Object Detection" : "Detección de Objetos"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Scene Analysis" : "Análisis de Escena"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "OCR Processing" : "Procesamiento OCR"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Quality Assessment" : "Evaluación de Calidad"}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.capabilityCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🎥</div>
                <div className={styles.cardTitle}>
                  {ingles ? "VIDEO PROCESSING" : "PROCESAMIENTO DE VIDEO"}
                </div>
                <div className={styles.accuracyScore}>94.8%</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Motion Detection" : "Detección de Movimiento"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Object Tracking" : "Seguimiento de Objetos"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Event Recognition" : "Reconocimiento de Eventos"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Temporal Analysis" : "Análisis Temporal"}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.capabilityCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>📄</div>
                <div className={styles.cardTitle}>
                  {ingles ? "DOCUMENT ANALYSIS" : "ANÁLISIS DE DOCUMENTOS"}
                </div>
                <div className={styles.accuracyScore}>98.1%</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Text Extraction" : "Extracción de Texto"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Form Recognition" : "Reconocimiento de Formularios"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Signature Detection" : "Detección de Firmas"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Document Classification" : "Clasificación de Documentos"}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.capabilityCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🧠</div>
                <div className={styles.cardTitle}>
                  {ingles ? "EMOTIONAL ANALYSIS" : "ANÁLISIS EMOCIONAL"}
                </div>
                <div className={styles.accuracyScore}>91.6%</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Sentiment Detection" : "Detección de Sentimientos"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Urgency Assessment" : "Evaluación de Urgencia"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Credibility Analysis" : "Análisis de Credibilidad"}
                  </div>
                  <div className={styles.feature}>
                    ✓ {ingles ? "Context Understanding" : "Comprensión de Contexto"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marco Técnico y Legal */}
        <div className={styles.technicalFramework}>
          <div className={styles.frameworkHeader}>
            <h3 className={styles.frameworkTitle}>
              {ingles 
                ? "TECHNICAL AND LEGAL FRAMEWORK" 
                : "MARCO TÉCNICO Y LEGAL"
              }
            </h3>
          </div>

          <div className={styles.frameworkContent}>
            <div className={styles.complianceSection}>
              <h4 className={styles.complianceTitle}>
                {ingles ? "REGULATORY COMPLIANCE" : "CUMPLIMIENTO NORMATIVO"}
              </h4>
              <div className={styles.complianceItems}>
                <div className={styles.complianceItem}>
                  <div className={styles.complianceIcon}>⚖️</div>
                  <span>{ingles ? "Data Protection Law (LGPDP)" : "Ley General de Protección de Datos (LGPDP)"}</span>
                </div>
                <div className={styles.complianceItem}>
                  <div className={styles.complianceIcon}>🔍</div>
                  <span>{ingles ? "Transparency and Access Law" : "Ley de Transparencia y Acceso"}</span>
                </div>
                <div className={styles.complianceItem}>
                  <div className={styles.complianceIcon}>🛡️</div>
                  <span>{ingles ? "Cybersecurity National Strategy" : "Estrategia Nacional de Ciberseguridad"}</span>
                </div>
              </div>
            </div>

            <div className={styles.certificationsSection}>
              <h4 className={styles.certificationsTitle}>
                {ingles ? "CERTIFICATIONS" : "CERTIFICACIONES"}
              </h4>
              <div className={styles.certificationBadges}>
                <div className={styles.certBadge}>
                  <div className={styles.certIcon}>🏅</div>
                  <div className={styles.certText}>
                    <div className={styles.certTitle}>ISO 27001</div>
                    <div className={styles.certDesc}>{ingles ? "Information Security" : "Seguridad de la Información"}</div>
                  </div>
                </div>
                <div className={styles.certBadge}>
                  <div className={styles.certIcon}>🔒</div>
                  <div className={styles.certText}>
                    <div className={styles.certTitle}>SOC 2 Type II</div>
                    <div className={styles.certDesc}>{ingles ? "Data Protection" : "Protección de Datos"}</div>
                  </div>
                </div>
                <div className={styles.certBadge}>
                  <div className={styles.certIcon}>⚡</div>
                  <div className={styles.certText}>
                    <div className={styles.certTitle}>FIPS 140-2</div>
                    <div className={styles.certDesc}>{ingles ? "Cryptographic Standards" : "Estándares Criptográficos"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas de Impacto Gubernamental */}
        <div className={styles.impactMetrics}>
          <div className={styles.metricsHeader}>
            <h3 className={styles.metricsTitle}>
              {ingles 
                ? "GOVERNMENTAL IMPACT METRICS" 
                : "MÉTRICAS DE IMPACTO GUBERNAMENTAL"
              }
            </h3>
            <div className={styles.metricsSubtitle}>
              {ingles 
                ? "Real data from government implementations"
                : "Datos reales de implementaciones gubernamentales"
              }
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>94.7%</div>
              <div className={styles.metricLabel}>
                {ingles ? "Analysis Accuracy" : "Precisión de Análisis"}
              </div>
              <div className={styles.metricChange}>+2.3% este mes</div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricValue}>67%</div>
              <div className={styles.metricLabel}>
                {ingles ? "Response Time Reduction" : "Reducción en Tiempo de Respuesta"}
              </div>
              <div className={styles.metricChange}>vs. proceso manual</div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricValue}>99.9%</div>
              <div className={styles.metricLabel}>
                {ingles ? "System Uptime" : "Disponibilidad del Sistema"}
              </div>
              <div className={styles.metricChange}>24/7/365</div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricValue}>1,247</div>
              <div className={styles.metricLabel}>
                {ingles ? "Reports/Hour" : "Reportes/Hora"}
              </div>
              <div className={styles.metricChange}>capacidad actual</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion9;