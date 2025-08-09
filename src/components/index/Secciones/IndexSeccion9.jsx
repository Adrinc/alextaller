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

  useEffect(() => {
    // Actualizar reloj cada segundo
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Ciclo continuo de análisis de IA
    const startAnalysisCycle = () => {
      setIsAnalyzing(true);
      
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
        
        // Reiniciar después de un tiempo
        setTimeout(() => {
          setAnalysisComplete(false);
          // Reiniciar el ciclo después de una pausa
          setTimeout(startAnalysisCycle, 3000);
        }, 4000);
      }, 6000);
    };

    // Iniciar el primer ciclo después de un delay inicial
    const initialTimer = setTimeout(startAnalysisCycle, 2000);

    return () => {
      clearInterval(clockInterval);
      clearTimeout(initialTimer);
    };
  }, []);

 

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
                <path d="M12,2L13.09,8.26L22,9L14.32,14.18L17,22L12,18.27L7,22L9.68,14.18L2,9L10.91,8.26L12,2Z"/>
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

            {/* Panel Central - Flujo de Datos */}
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

              <div className={`${styles.processingFlow} ${isAnalyzing ? styles.active : ''}`}>
                <div className={styles.flowStep}>
                  <div className={`${styles.stepNode} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={styles.nodeIcon}>📷</div>
                    <div className={styles.nodeLabel}>
                      {ingles ? "IMAGE" : "IMAGEN"}
                    </div>
                  </div>
                  <div className={`${styles.dataStream} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={`${styles.streamLine} ${isAnalyzing ? styles.flowing : ''}`}></div>
                  </div>
                </div>

                <div className={styles.flowStep}>
                  <div className={`${styles.stepNode} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={styles.nodeIcon}>🎥</div>
                    <div className={styles.nodeLabel}>
                      {ingles ? "VIDEO" : "VIDEO"}
                    </div>
                  </div>
                  <div className={`${styles.dataStream} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={`${styles.streamLine} ${isAnalyzing ? styles.flowing : ''}`}></div>
                  </div>
                </div>

                <div className={styles.flowStep}>
                  <div className={`${styles.stepNode} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={styles.nodeIcon}>📄</div>
                    <div className={styles.nodeLabel}>
                      {ingles ? "DOCUMENTS" : "DOCUMENTOS"}
                    </div>
                  </div>
                  <div className={`${styles.dataStream} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={`${styles.streamLine} ${isAnalyzing ? styles.flowing : ''}`}></div>
                  </div>
                </div>

                <div className={styles.flowStep}>
                  <div className={`${styles.stepNode} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={styles.nodeIcon}>📝</div>
                    <div className={styles.nodeLabel}>
                      {ingles ? "TEXT" : "TEXTO"}
                    </div>
                  </div>
                  <div className={`${styles.dataStream} ${isAnalyzing ? styles.active : ''}`}>
                    <div className={`${styles.streamLine} ${isAnalyzing ? styles.flowing : ''}`}></div>
                  </div>
                </div>

                {/* Nodo Central de IA */}
                <div className={styles.aiCentralNode}>
                  <div className={styles.robotContainer}>
                    <div className={styles.energyRings}>
                      <div className={styles.energyRing}></div>
                      <div className={styles.energyRing}></div>
                      <div className={styles.energyRing}></div>
                    </div>
                    <div className={styles.robotGlow}></div>
                    <img 
                      src="/image/global/robot3.png" 
                      alt="IA Robot Analyzer"
                      className={`${styles.robotImage} ${isAnalyzing ? styles.processing : ''}`}
                    />
                    <div className={styles.robotTooltip}>
                      {ingles ? translations.en.ia.robotTooltip : translations.es.ia.robotTooltip}
                    </div>
                  </div>
                  <div className={styles.aiLabel}>
                    {ingles ? "AI ENGINE" : "MOTOR IA"}
                  </div>
                  {isAnalyzing && (
                    <div className={styles.processingIndicator}>
                      {ingles ? "ANALYZING..." : "ANALIZANDO..."}
                    </div>
                  )}
                </div>

                {/* Output */}
                <div className={styles.outputNode}>
                  <div className={`${styles.resultNode} ${analysisComplete ? styles.complete : ''}`}>
                    <div className={styles.resultIcon}>📊</div>
                    <div className={styles.resultLabel}>
                      {ingles ? "RESULTS" : "RESULTADOS"}
                    </div>
                    {analysisComplete && (
                      <div className={styles.completionBadge}>
                        ✓ {ingles ? "COMPLETE" : "COMPLETO"}
                      </div>
                    )}
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