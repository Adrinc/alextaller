import React, { useState, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion9.module.css";

const IndexSeccion9 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en.ia : translations.es.ia;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [detectionPhase, setDetectionPhase] = useState(0);

  useEffect(() => {
    // Simular análisis de IA cuando aparece en vista
    const timer = setTimeout(() => {
      setIsAnalyzing(true);
      
      // Simular progreso de escaneo más lento y sutil
      const progressInterval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setIsAnalyzing(false);
            setAnalysisComplete(true);
            return 100;
          }
          return prev + 0.8; // Cambiado de 2 a 0.8 para más lentitud
        });
      }, 60); // Cambiado de 40 a 60ms para más suavidad

      // Cambiar fases de detección más lento
      const phaseInterval = setInterval(() => {
        setDetectionPhase(prev => (prev + 1) % 4);
      }, 800); // Cambiado de 800 a 1200ms

      return () => {
        clearInterval(progressInterval);
        clearInterval(phaseInterval);
      };
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const ProcessIcon = ({ step }) => {
    const icons = {
      0: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
        </svg>
      ),
      1: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1A11,11 0 0,0 1,12A11,11 0 0,0 12,23A11,11 0 0,0 23,12A11,11 0 0,0 12,1M12,3A9,9 0 0,1 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12A9,9 0 0,1 12,3M8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12Z"/>
        </svg>
      ),
      2: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
        </svg>
      ),
      3: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
        </svg>
      )
    };
    return icons[step];
  };

  const detectionLabels = [
    ingles ? "Scanning..." : "Escaneando...",
    ingles ? "Analyzing..." : "Analizando...",
    ingles ? "Processing..." : "Procesando...",
    ingles ? "Completing..." : "Completando..."
  ];

  return (
    <section id="ia-analisis" className={styles.section}>
      {/* Partículas de fondo */}
      <div className={styles.particlesBackground}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
            </svg>
            <span>{ingles ? "Artificial Intelligence" : "Inteligencia Artificial"}</span>
            <div className={styles.badgePulse}></div>
          </div>
          
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <p className={styles.description}>{t.description}</p>
        </div>

        {/* Análisis Comparativo */}
        <div className={styles.analysisSection}>
          <div className={styles.analysisContainer}>
            {/* Imagen y análisis visual */}
            <div className={styles.imageAnalysis}>
              <div className={styles.analysisCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{t.imageAnalysis.title}</h3>
                    <p className={styles.cardSubtitle}>{t.imageAnalysis.subtitle}</p>
                  </div>
                  {/* Indicador de estado */}
                  <div className={styles.statusIndicator}>
                    <div className={`${styles.statusDot} ${isAnalyzing ? styles.analyzing : analysisComplete ? styles.complete : ''}`}></div>
                    <span className={styles.statusText}>
                      {isAnalyzing ? (ingles ? "Live" : "En vivo") : analysisComplete ? (ingles ? "Complete" : "Completo") : (ingles ? "Ready" : "Listo")}
                    </span>
                  </div>
                </div>
                
                <div className={styles.imageContainer}>
                  <img 
                    src="/image/global/semaforo.jpg" 
                    alt={ingles ? "Traffic light analysis" : "Análisis de semáforo"}
                    className={styles.analysisImage}
                  />
                  
                  {/* Overlay de análisis avanzado */}
                  <div className={`${styles.analysisOverlay} ${isAnalyzing ? styles.active : ''} ${analysisComplete ? styles.complete : ''}`}>
                    
                    {/* Grid de escaneo */}
                    <div className={styles.scanGrid}>
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className={styles.gridLine}></div>
                      ))}
                    </div>

                    {/* Línea de escaneo principal */}
                    <div className={styles.mainScanLine} style={{ top: `${scanProgress}%` }}>
                      <div className={styles.scanBeam}></div>
                    </div>

                    {/* Múltiples cajas de detección */}
                    <div className={styles.detectionBoxes}>
                      <div className={`${styles.detectionBox} ${styles.primary}`}>
                        <div className={styles.corners}></div>
                        <div className={styles.targetLines}></div>
                        <div className={styles.detectionLabel}>
                          {ingles ? "Traffic Light" : "Semáforo"}
                          <span className={styles.confidence}>95%</span>
                        </div>
                      </div>
                      
                      <div className={`${styles.detectionBox} ${styles.secondary}`}>
                        <div className={styles.corners}></div>
                        <div className={styles.detectionLabel}>
                          {ingles ? "Street" : "Calle"}
                          <span className={styles.confidence}>78%</span>
                        </div>
                      </div>
                    </div>

                    {/* HUD de información */}
                    <div className={styles.hudInfo}>
                      <div className={styles.hudPanel}>
                        <div className={styles.hudText}>
                          <span className={styles.hudLabel}>{detectionLabels[detectionPhase]}</span>
                          <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${scanProgress}%` }}></div>
                          </div>
                          <span className={styles.hudPercentage}>{Math.round(scanProgress)}%</span>
                        </div>
                      </div>
                      
                      {/* Datos en tiempo real */}
                      <div className={styles.dataStream}>
                        <div className={styles.dataPoint}>
                          <span>RES:</span>
                          <span className={styles.dataValue}>1920x1080</span>
                        </div>
                        <div className={styles.dataPoint}>
                          <span>FPS:</span>
                          <span className={styles.dataValue}>30</span>
                        </div>
                        <div className={styles.dataPoint}>
                          <span>LAT:</span>
                          <span className={styles.dataValue}>32.5149°</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.analysisResults}>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>{t.imageAnalysis.detected}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      {t.example.detected}
                    </span>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>{t.imageAnalysis.confidence}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      {t.example.confidence}
                    </span>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>{ingles ? "Processing time:" : "Tiempo de procesamiento:"}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      2.3s
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Análisis de texto */}
            <div className={styles.textAnalysis}>
              <div className={styles.analysisCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{t.textAnalysis.title}</h3>
                    <p className={styles.cardSubtitle}>{t.textAnalysis.subtitle}</p>
                  </div>
                  {/* Indicador de sentimiento */}
                  <div className={styles.sentimentIndicator}>
                    <div className={`${styles.sentimentBar} ${analysisComplete ? styles.complete : ''}`}>
                      <div className={styles.sentimentFill}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.textContainer}>
                  <div className={styles.userComment}>
                    <div className={styles.commentHeader}>
                      <div className={styles.userAvatar}>👤</div>
                      <span>{ingles ? "User comment:" : "Comentario del usuario:"}</span>
                      <div className={styles.textMetrics}>
                        <span className={styles.wordCount}>12 palabras</span>
                      </div>
                    </div>
                    <p className={styles.commentText}>{t.example.userComment}</p>
                  </div>

                  {/* Indicadores de análisis emocional */}
                  <div className={styles.emotionIndicators}>
                    <div className={styles.emotionGraph}>
                      <div className={styles.emotionBar}>
                        <span className={styles.emotionLabel}>{ingles ? "Frustration" : "Frustración"}</span>
                        <div className={styles.emotionLevel}>
                          <div className={`${styles.levelFill} ${analysisComplete ? styles.visible : ''}`} style={{ width: '75%' }}></div>
                        </div>
                        <span className={styles.emotionValue}>75%</span>
                      </div>
                      <div className={styles.emotionBar}>
                        <span className={styles.emotionLabel}>{ingles ? "Urgency" : "Urgencia"}</span>
                        <div className={styles.emotionLevel}>
                          <div className={`${styles.levelFill} ${analysisComplete ? styles.visible : ''}`} style={{ width: '85%' }}></div>
                        </div>
                        <span className={styles.emotionValue}>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.analysisResults}>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>{t.textAnalysis.emotion}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      {t.example.emotion}
                    </span>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>{t.textAnalysis.urgency}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      {t.example.urgency}
                    </span>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.resultLabel}>{ingles ? "Sentiment:" : "Sentimiento:"}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      {ingles ? "Negative" : "Negativo"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso de IA */}
        <div className={styles.processSection}>
          <div className={styles.processHeader}>
            <h3 className={styles.processTitle}>{t.process.title}</h3>
            <p className={styles.processSubtitle}>{t.process.subtitle}</p>
          </div>

          <div className={styles.processSteps}>
            {t.process.steps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepIcon}>
                  <ProcessIcon step={index} />
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
                {index < t.process.steps.length - 1 && (
                  <div className={styles.stepConnector}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sección de confianza */}
        <div className={styles.trustSection}>
          <div className={styles.trustContent}>
            <div className={styles.trustText}>
              <h3 className={styles.trustTitle}>{t.trust.title}</h3>
              <p className={styles.trustDescription}>{t.trust.description}</p>
              
              <div className={styles.trustFeatures}>
                {t.trust.features.map((feature, index) => (
                  <div key={index} className={styles.trustFeature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.trustVisual}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>85%</div>
                  <div className={styles.statLabel}>
                    {ingles ? "Accuracy" : "Precisión"}
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>60%</div>
                  <div className={styles.statLabel}>
                    {ingles ? "Faster" : "Más Rápido"}
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>99.9%</div>
                  <div className={styles.statLabel}>
                    {ingles ? "Uptime" : "Disponibilidad"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion9;