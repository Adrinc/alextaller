import React, { useState, useEffect, useRef } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion9.module.css";
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';

const IndexSeccion9 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en.ia : translations.es.ia;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [detectionPhase, setDetectionPhase] = useState(0);
  const [matrixCode, setMatrixCode] = useState('');
  const [neuralConnections, setNeuralConnections] = useState([]);
  
  // Referencias para animaciones
  const titleRef = useRef(null);
  const controls = useAnimation();
  
  // Hook para detectar cuando la sección está en vista
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const titleInView = useInView(titleRef, { once: true });

  // Generar código Matrix estilizado
  useEffect(() => {
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const generateMatrix = () => {
      let result = '';
      for (let i = 0; i < 200; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        if (i % 20 === 0) result += '\n';
      }
      return result;
    };
    
    const interval = setInterval(() => {
      setMatrixCode(generateMatrix());
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  // Generar conexiones neuronales dinámicas
  useEffect(() => {
    const generateConnections = () => {
      const connections = [];
      for (let i = 0; i < 15; i++) {
        connections.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2
        });
      }
      setNeuralConnections(connections);
    };
    
    generateConnections();
    const interval = setInterval(generateConnections, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animación principal cuando está en vista
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      // Iniciar análisis de IA
      const timer = setTimeout(() => {
        setIsAnalyzing(true);
        
        const progressInterval = setInterval(() => {
          setScanProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressInterval);
              setIsAnalyzing(false);
              setAnalysisComplete(true);
              return 100;
            }
            return prev + 0.8;
          });
        }, 60);

        const phaseInterval = setInterval(() => {
          setDetectionPhase(prev => (prev + 1) % 4);
        }, 800);

        return () => {
          clearInterval(progressInterval);
          clearInterval(phaseInterval);
        };
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, controls]);

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
    <motion.section 
      id="ia-analisis" 
      className={styles.section}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } }
      }}
    >
      {/* Código Matrix de fondo */}
      <div className={styles.matrixBackground}>
        <pre className={styles.matrixCode}>{matrixCode}</pre>
      </div>

      {/* Red neuronal animada */}
      <div className={styles.neuralNetwork}>
        <svg className={styles.networkSvg} viewBox="0 0 100 100">
          {neuralConnections.map((conn) => (
            <motion.line
              key={conn.id}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="rgba(196, 182, 140, 0.4)"
              strokeWidth="0.1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0], 
                opacity: [0, 0.8, 0] 
              }}
              transition={{
                duration: conn.duration,
                delay: conn.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          {/* Nodos neuronales */}
          {neuralConnections.slice(0, 8).map((node) => (
            <motion.circle
              key={`node-${node.id}`}
              cx={node.x1}
              cy={node.y1}
              r="0.5"
              fill="#C4B68C"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8], 
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Partículas inteligentes */}
      <div className={styles.particlesBackground}>
        {[...Array(25)].map((_, i) => (
          <motion.div 
            key={i} 
            className={styles.particle}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Header con efectos de typewriter */}
        <motion.div 
          className={styles.header}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <motion.div 
            className={styles.headerBadge}
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: isAnalyzing 
                ? "0 0 30px rgba(196, 182, 140, 0.6)" 
                : "0 0 15px rgba(196, 182, 140, 0.3)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg 
              className={styles.badgeIcon} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
            </motion.svg>
            <span>{ingles ? "Artificial Intelligence" : "Inteligencia Artificial"}</span>
            <div className={styles.badgePulse}></div>
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            ref={titleRef}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            {titleInView && (
              <Typewriter
                options={{
                  strings: [t.title],
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  deleteSpeed: 50,
                  cursor: '',
                  wrapperClassName: styles.typewriterWrapper,
                  cursorClassName: styles.typewriterCursor,
                  onInit: (typewriter) => {
                    typewriter
                      .typeString(t.title)
                      .pauseFor(2000)
                      .callFunction(() => {
                        // Mantener el texto visible permanentemente
                        const wrapper = document.querySelector(`.${styles.typewriterWrapper}`);
                        if (wrapper) {
                          wrapper.innerHTML = t.title;
                          wrapper.style.borderRight = 'none';
                        }
                      })
                      .start();
                  }
                }}
              />
            )}
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            {inView && (
              <Typewriter
                options={{
                  strings: [t.subtitle],
                  autoStart: true,
                  loop: false,
                  delay: 30,
                  cursor: '',
                  deleteSpeed: 1000000
                }}
              />
            )}
          </motion.p>
          
          <motion.p 
            className={styles.description}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            {t.description}
          </motion.p>
        </motion.div>

        {/* Análisis Comparativo Mejorado */}
        <motion.div 
          className={styles.analysisSection}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <div className={styles.analysisContainer}>
            {/* Imagen y análisis visual con efectos holográficos */}
            <motion.div 
              className={styles.imageAnalysis}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={styles.analysisCard}
                style={{
                  background: isAnalyzing 
                    ? "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(196,182,140,0.05))"
                    : "rgba(255,255,255,0.95)"
                }}
              >
                <div className={styles.cardHeader}>
                  <motion.div 
                    className={styles.cardIcon}
                    animate={{ 
                      scale: isAnalyzing ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: isAnalyzing ? Infinity : 0 
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className={styles.cardTitle}>{t.imageAnalysis.title}</h3>
                    <p className={styles.cardSubtitle}>{t.imageAnalysis.subtitle}</p>
                  </div>
                  {/* Indicador de estado mejorado */}
                  <motion.div 
                    className={styles.statusIndicator}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div 
                      className={`${styles.statusDot} ${isAnalyzing ? styles.analyzing : analysisComplete ? styles.complete : ''}`}
                      animate={{ 
                        scale: isAnalyzing ? [1, 1.3, 1] : 1,
                        boxShadow: isAnalyzing 
                          ? ["0 0 0px rgba(245,158,11,0.8)", "0 0 15px rgba(245,158,11,0.8)", "0 0 0px rgba(245,158,11,0.8)"]
                          : "0 0 0px rgba(245,158,11,0.8)"
                      }}
                      transition={{ duration: 1, repeat: isAnalyzing ? Infinity : 0 }}
                    />
                    <span className={styles.statusText}>
                      {isAnalyzing ? (ingles ? "Live" : "En vivo") : analysisComplete ? (ingles ? "Complete" : "Completo") : (ingles ? "Ready" : "Listo")}
                    </span>
                  </motion.div>
                </div>
                
                <motion.div 
                  className={styles.imageContainer}
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(91, 43, 51, 0.25)" 
                  }}
                >
                  <img 
                    src="/image/global/semaforo.jpg" 
                    alt={ingles ? "Traffic light analysis" : "Análisis de semáforo"}
                    className={styles.analysisImage}
                  />
                  
                  {/* Overlay de análisis súper avanzado */}
                  <motion.div 
                    className={`${styles.analysisOverlay} ${isAnalyzing ? styles.active : ''} ${analysisComplete ? styles.complete : ''}`}
                    animate={{ 
                      background: isAnalyzing 
                        ? ["rgba(0,0,0,0.2)", "rgba(91,43,51,0.15)", "rgba(0,0,0,0.2)"]
                        : "rgba(0,0,0,0.3)"
                    }}
                    transition={{ duration: 3, repeat: isAnalyzing ? Infinity : 0 }}
                  >
                    
                    {/* Grid de escaneo holográfico */}
                    <div className={styles.scanGrid}>
                      {[...Array(100)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className={styles.gridLine}
                          animate={{ 
                            opacity: isAnalyzing 
                              ? [0.1, 0.8, 0.1] 
                              : 0.3 
                          }}
                          transition={{ 
                            duration: 0.5, 
                            delay: i * 0.01,
                            repeat: isAnalyzing ? Infinity : 0 
                          }}
                        />
                      ))}
                    </div>

                    {/* Línea de escaneo mejorada */}
                    <motion.div 
                      className={styles.mainScanLine} 
                      style={{ top: `${scanProgress}%` }}
                      animate={{
                        boxShadow: isAnalyzing 
                          ? ["0 0 10px #C4B68C", "0 0 30px #C4B68C", "0 0 10px #C4B68C"]
                          : "0 0 10px #C4B68C"
                      }}
                      transition={{ duration: 1, repeat: isAnalyzing ? Infinity : 0 }}
                    >
                      <div className={styles.scanBeam}></div>
                      {/* Partículas de escaneo */}
                      {isAnalyzing && [...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={styles.scanParticle}
                          initial={{ x: 0, opacity: 1 }}
                          animate={{ 
                            x: [0, 100, 200, 300, 400],
                            opacity: [1, 0.8, 0.6, 0.3, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity 
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Cajas de detección con efectos futuristas */}
                    <div className={styles.detectionBoxes}>
                      <motion.div 
                        className={`${styles.detectionBox} ${styles.primary}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={analysisComplete ? { 
                          scale: 1, 
                          opacity: 1,
                          borderColor: ["#C4B68C", "#FFFFFF", "#C4B68C"]
                        } : { scale: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.5,
                          borderColor: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <div className={styles.corners}></div>
                        <div className={styles.targetLines}></div>
                        <motion.div 
                          className={styles.detectionLabel}
                          animate={{ y: [-2, 2, -2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {ingles ? "Traffic Light" : "Semáforo"}
                          <CountUp 
                            end={95} 
                            suffix="%" 
                            duration={2}
                            delay={1}
                            className={styles.confidence}
                          />
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className={`${styles.detectionBox} ${styles.secondary}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={analysisComplete ? { 
                          scale: 1, 
                          opacity: 1 
                        } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className={styles.corners}></div>
                        <div className={styles.detectionLabel}>
                          {ingles ? "Street" : "Calle"}
                          <CountUp 
                            end={78} 
                            suffix="%" 
                            duration={2}
                            delay={1.3}
                            className={styles.confidence}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* HUD de información futurista */}
                    <motion.div 
                      className={styles.hudInfo}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className={styles.hudPanel}>
                        <div className={styles.hudText}>
                          <span className={styles.hudLabel}>{detectionLabels[detectionPhase]}</span>
                          <div className={styles.progressBar}>
                            <motion.div 
                              className={styles.progressFill} 
                              style={{ width: `${scanProgress}%` }}
                              animate={{
                                background: isAnalyzing 
                                  ? ["linear-gradient(90deg, rgba(196, 182, 140, 0.8), rgba(91, 43, 51, 0.8))",
                                     "linear-gradient(90deg, rgba(91, 43, 51, 0.8), rgba(196, 182, 140, 0.8))",
                                     "linear-gradient(90deg, rgba(196, 182, 140, 0.8), rgba(91, 43, 51, 0.8))"]
                                  : "linear-gradient(90deg, rgba(196, 182, 140, 0.8), rgba(91, 43, 51, 0.8))"
                              }}
                              transition={{ duration: 2, repeat: isAnalyzing ? Infinity : 0 }}
                            />
                          </div>
                          <span className={styles.hudPercentage}>
                            <CountUp 
                              end={scanProgress} 
                              suffix="%" 
                              duration={0.1}
                              preserveValue
                            />
                          </span>
                        </div>
                      </div>
                      
                      {/* Datos en tiempo real con efectos */}
                      <motion.div 
                        className={styles.dataStream}
                        animate={{ 
                          borderColor: isAnalyzing 
                            ? ["rgba(196, 182, 140, 0.2)", "rgba(196, 182, 140, 0.6)", "rgba(196, 182, 140, 0.2)"]
                            : "rgba(196, 182, 140, 0.2)"
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className={styles.dataPoint}>
                          <span>RES:</span>
                          <span className={styles.dataValue}>1920x1080</span>
                        </div>
                        <div className={styles.dataPoint}>
                          <span>FPS:</span>
                          <span className={styles.dataValue}>
                            <CountUp end={30} duration={2} />
                          </span>
                        </div>
                        <div className={styles.dataPoint}>
                          <span>LAT:</span>
                          <span className={styles.dataValue}>32.5149°</span>
                        </div>
                        <div className={styles.dataPoint}>
                          <span>AI:</span>
                          <span className={styles.dataValue} style={{ color: '#10B981' }}>ACTIVE</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Resultados con contadores animados */}
                <div className={styles.analysisResults}>
                  <motion.div 
                    className={styles.resultItem}
                    whileHover={{ scale: 1.02, backgroundColor: "#F9FAFB" }}
                  >
                    <span className={styles.resultLabel}>{t.imageAnalysis.detected}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      {t.example.detected}
                    </span>
                  </motion.div>
                  <motion.div 
                    className={styles.resultItem}
                    whileHover={{ scale: 1.02, backgroundColor: "#F9FAFB" }}
                  >
                    <span className={styles.resultLabel}>{t.imageAnalysis.confidence}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      <CountUp 
                        end={95} 
                        suffix="%" 
                        duration={2}
                        delay={analysisComplete ? 0.5 : 0}
                      />
                    </span>
                  </motion.div>
                  <motion.div 
                    className={styles.resultItem}
                    whileHover={{ scale: 1.02, backgroundColor: "#F9FAFB" }}
                  >
                    <span className={styles.resultLabel}>{ingles ? "Processing time:" : "Tiempo de procesamiento:"}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      <CountUp 
                        end={2.3} 
                        suffix="s" 
                        duration={2}
                        decimals={1}
                        delay={analysisComplete ? 1 : 0}
                      />
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Análisis de texto con efectos avanzados */}
            <motion.div 
              className={styles.textAnalysis}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={styles.analysisCard}
                style={{
                  background: analysisComplete 
                    ? "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(16,185,129,0.05))"
                    : "rgba(255,255,255,0.95)"
                }}
              >
                <div className={styles.cardHeader}>
                  <motion.div 
                    className={styles.cardIcon}
                    animate={{ 
                      scale: isAnalyzing ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: isAnalyzing ? Infinity : 0 
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className={styles.cardTitle}>{t.textAnalysis.title}</h3>
                    <p className={styles.cardSubtitle}>{t.textAnalysis.subtitle}</p>
                  </div>
                  {/* Indicador de sentimiento mejorado */}
                  <motion.div 
                    className={styles.sentimentIndicator}
                    animate={{ 
                      scale: analysisComplete ? [1, 1.05, 1] : 1 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className={`${styles.sentimentBar} ${analysisComplete ? styles.complete : ''}`}>
                      <motion.div 
                        className={styles.sentimentFill}
                        initial={{ width: "0%" }}
                        animate={{ 
                          width: analysisComplete ? "75%" : "0%",
                          background: analysisComplete 
                            ? ["linear-gradient(90deg, #EF4444, #F59E0B, #10B981)", 
                               "linear-gradient(90deg, #F59E0B, #EF4444, #10B981)",
                               "linear-gradient(90deg, #EF4444, #F59E0B, #10B981)"]
                            : "linear-gradient(90deg, #EF4444, #F59E0B, #10B981)"
                        }}
                        transition={{ 
                          width: { duration: 2, delay: 1 },
                          background: { duration: 3, repeat: Infinity }
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                <div className={styles.textContainer}>
                  <motion.div 
                    className={styles.userComment}
                    whileHover={{ 
                      borderLeftColor: "#5B2B33",
                      boxShadow: "0 10px 25px rgba(91, 43, 51, 0.15)"
                    }}
                  >
                    <div className={styles.commentHeader}>
                      <motion.div 
                        className={styles.userAvatar}
                        animate={{ 
                          rotate: [0, 5, -5, 0] 
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        👤
                      </motion.div>
                      <span>{ingles ? "User comment:" : "Comentario del usuario:"}</span>
                      <div className={styles.textMetrics}>
                        <span className={styles.wordCount}>
                          <CountUp 
                            end={12} 
                            suffix=" palabras" 
                            duration={2}
                            delay={analysisComplete ? 0.5 : 0}
                          />
                        </span>
                      </div>
                    </div>
                    <motion.p 
                      className={styles.commentText}
                      animate={analysisComplete ? {
                        color: ["#374151", "#EF4444", "#374151"]
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {analysisComplete ? (
                        <Typewriter
                          options={{
                            strings: [t.example.userComment],
                            autoStart: true,
                            loop: false,
                            delay: 30,
                            cursor: '',
                            deleteSpeed: 1000000
                          }}
                        />
                      ) : (
                        t.example.userComment
                      )}
                    </motion.p>
                  </motion.div>

                  {/* Indicadores de análisis emocional súper avanzados */}
                  <motion.div 
                    className={styles.emotionIndicators}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <div className={styles.emotionGraph}>
                      <motion.div 
                        className={styles.emotionBar}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className={styles.emotionLabel}>{ingles ? "Frustration" : "Frustración"}</span>
                        <div className={styles.emotionLevel}>
                          <motion.div 
                            className={`${styles.levelFill} ${analysisComplete ? styles.visible : ''}`}
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: analysisComplete ? "75%" : "0%",
                              background: [
                                "linear-gradient(90deg, #C4B68C, #5B2B33)",
                                "linear-gradient(90deg, #EF4444, #F59E0B)",
                                "linear-gradient(90deg, #C4B68C, #5B2B33)"
                              ]
                            }}
                            transition={{ 
                              width: { duration: 2, delay: 1.5 },
                              background: { duration: 4, repeat: Infinity }
                            }}
                          />
                        </div>
                        <span className={styles.emotionValue}>
                          <CountUp 
                            end={75} 
                            suffix="%" 
                            duration={2}
                            delay={analysisComplete ? 2 : 0}
                          />
                        </span>
                      </motion.div>
                      <motion.div 
                        className={styles.emotionBar}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className={styles.emotionLabel}>{ingles ? "Urgency" : "Urgencia"}</span>
                        <div className={styles.emotionLevel}>
                          <motion.div 
                            className={`${styles.levelFill} ${analysisComplete ? styles.visible : ''}`}
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: analysisComplete ? "85%" : "0%",
                              background: [
                                "linear-gradient(90deg, #C4B68C, #5B2B33)",
                                "linear-gradient(90deg, #F59E0B, #EF4444)",
                                "linear-gradient(90deg, #C4B68C, #5B2B33)"
                              ]
                            }}
                            transition={{ 
                              width: { duration: 2, delay: 2 },
                              background: { duration: 4, repeat: Infinity }
                            }}
                          />
                        </div>
                        <span className={styles.emotionValue}>
                          <CountUp 
                            end={85} 
                            suffix="%" 
                            duration={2}
                            delay={analysisComplete ? 2.5 : 0}
                          />
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Resultados con efectos holográficos */}
                <div className={styles.analysisResults}>
                  <motion.div 
                    className={styles.resultItem}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "#F3F4F6",
                      borderColor: "#C4B68C"
                    }}
                  >
                    <span className={styles.resultLabel}>{t.textAnalysis.emotion}</span>
                    <motion.span 
                      className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}
                      animate={analysisComplete ? {
                        color: ["#5B2B33", "#EF4444", "#5B2B33"]
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {t.example.emotion}
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className={styles.resultItem}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "#F3F4F6",
                      borderColor: "#C4B68C"
                    }}
                  >
                    <span className={styles.resultLabel}>{t.textAnalysis.urgency}</span>
                    <span className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}>
                      {t.example.urgency}
                    </span>
                  </motion.div>
                  <motion.div 
                    className={styles.resultItem}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "#F3F4F6",
                      borderColor: "#C4B68C"
                    }}
                  >
                    <span className={styles.resultLabel}>{ingles ? "Sentiment:" : "Sentimiento:"}</span>
                    <motion.span 
                      className={`${styles.resultValue} ${analysisComplete ? styles.visible : ''}`}
                      animate={analysisComplete ? {
                        color: ["#5B2B33", "#EF4444", "#5B2B33"]
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {ingles ? "Negative" : "Negativo"}
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Proceso de IA con efectos espectaculares */}
        <motion.div 
          className={styles.processSection}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <motion.div 
            className={styles.processHeader}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
          
            <p className={styles.processSubtitle}>{t.process.subtitle}</p>
          </motion.div>

          <div className={styles.processSteps}>
            {t.process.steps.map((step, index) => (
              <div 
                key={index} 
                className={styles.processStep}
              >
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
        </motion.div>

        {/* Sección de confianza sin efectos */}
        <div className={styles.trustSection}>
          <div className={styles.trustContent}>
            <div className={styles.trustText}>
              <h3 className={styles.trustTitle}>
                {t.trust.title}
              </h3>
              <p className={styles.trustDescription}>{t.trust.description}</p>
              
              <div className={styles.trustFeatures}>
                {t.trust.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={styles.trustFeature}
                  >
                    <div className={styles.featureIcon}>
                      ✓
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.trustVisual}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>
                    <CountUp 
                      end={85} 
                      suffix="%" 
                      duration={3}
                      delay={inView ? 1 : 0}
                    />
                  </div>
                  <div className={styles.statLabel}>
                    {ingles ? "Accuracy" : "Precisión"}
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>
                    <CountUp 
                      end={60} 
                      suffix="%" 
                      duration={3}
                      delay={inView ? 1.5 : 0}
                    />
                  </div>
                  <div className={styles.statLabel}>
                    {ingles ? "Faster" : "Más Rápido"}
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>
                    <CountUp 
                      end={99.9} 
                      suffix="%" 
                      duration={3}
                      decimals={1}
                      delay={inView ? 2 : 0}
                    />
                  </div>
                  <div className={styles.statLabel}>
                    {ingles ? "Uptime" : "Disponibilidad"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default IndexSeccion9;