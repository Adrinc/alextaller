import React from "react";
import styles from "./AnalysisDashboard.module.css";

const AnalysisDashboard = ({ isEnglish = false, analysisComplete = false, isAnalyzing = false }) => {
  
  const analysisData = {
    image: {
      title: isEnglish ? "VISUAL ANALYSIS" : "ANÁLISIS VISUAL",
      confidence: 94,
      objects: [
        { name: isEnglish ? "Traffic Signal" : "Semáforo", confidence: 95 },
        { name: isEnglish ? "Street" : "Calle", confidence: 78 },
        { name: isEnglish ? "Vehicles" : "Vehículos", confidence: 89 }
      ],
      metadata: {
        resolution: "1920x1080",
        format: "JPEG",
        size: "2.4MB",
        timestamp: "2024-08-08 09:41:23"
      }
    },
    text: {
      title: isEnglish ? "TEXT ANALYSIS" : "ANÁLISIS DE TEXTO",
      sentiment: {
        emotion: isEnglish ? "High Frustration" : "Alta Frustración",
        urgency: isEnglish ? "Medium-High" : "Medio-Alto",
        credibility: 92
      },
      keywords: [
        { word: isEnglish ? "traffic light" : "semáforo", relevance: 95 },
        { word: isEnglish ? "dangerous" : "peligroso", relevance: 87 },
        { word: isEnglish ? "weeks" : "semanas", relevance: 82 }
      ],
      stats: {
        words: 47,
        chars: 312,
        readability: isEnglish ? "Clear" : "Claro"
      }
    },
    document: {
      title: isEnglish ? "DOCUMENT PROCESSING" : "PROCESAMIENTO DE DOCUMENTOS",
      types: [
        { type: "PDF", processed: 3, accuracy: 96 },
        { type: "IMG", processed: 8, accuracy: 94 },
        { type: "DOC", processed: 1, accuracy: 98 }
      ]
    },
    video: {
      title: isEnglish ? "VIDEO ANALYSIS" : "ANÁLISIS DE VIDEO",
      duration: "00:45",
      frames: 1350,
      motionDetected: true,
      objectTracking: isEnglish ? "Active" : "Activo"
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <div className={styles.dashboardHeader}>
        <div className={styles.headerTitle}>
          <div className={styles.governmentSeal}>🏛️</div>
          <div>
            <h3>{isEnglish ? "AI ANALYSIS CONTROL CENTER" : "CENTRO DE CONTROL DE ANÁLISIS IA"}</h3>
            <div className={styles.classification}>
              {isEnglish ? "GOVERNMENTAL USE ONLY" : "USO EXCLUSIVO GUBERNAMENTAL"}
            </div>
          </div>
        </div>
        <div className={styles.systemStatus}>
          <div className={`${styles.statusLight} ${isAnalyzing ? styles.processing : analysisComplete ? styles.complete : styles.standby}`}></div>
          <span>{isAnalyzing ? (isEnglish ? "PROCESSING" : "PROCESANDO") : analysisComplete ? (isEnglish ? "COMPLETE" : "COMPLETO") : (isEnglish ? "STANDBY" : "ESPERA")}</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className={styles.analysisGrid}>
        
        {/* Image Analysis Panel */}
        <div className={styles.analysisPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon}>📷</div>
            <div className={styles.panelTitle}>{analysisData.image.title}</div>
            <div className={styles.confidenceScore}>
              {analysisData.image.confidence}%
            </div>
          </div>
          
          <div className={styles.panelContent}>
            <div className={styles.objectsList}>
              {analysisData.image.objects.map((obj, index) => (
                <div key={index} className={styles.objectItem}>
                  <span className={styles.objectName}>{obj.name}</span>
                  <div className={styles.confidenceBar}>
                    <div 
                      className={styles.confidenceFill} 
                      style={{ width: `${obj.confidence}%` }}
                    ></div>
                  </div>
                  <span className={styles.confidenceValue}>{obj.confidence}%</span>
                </div>
              ))}
            </div>
            
            <div className={styles.metadata}>
              <div className={styles.metadataTitle}>{isEnglish ? "METADATA:" : "METADATOS:"}</div>
              {Object.entries(analysisData.image.metadata).map(([key, value]) => (
                <div key={key} className={styles.metadataItem}>
                  <span className={styles.metaKey}>{key.toUpperCase()}:</span>
                  <span className={styles.metaValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Analysis Panel */}
        <div className={styles.analysisPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon}>📝</div>
            <div className={styles.panelTitle}>{analysisData.text.title}</div>
            <div className={styles.credibilityScore}>
              {analysisData.text.sentiment.credibility}%
            </div>
          </div>
          
          <div className={styles.panelContent}>
            <div className={styles.sentimentAnalysis}>
              <div className={styles.sentimentItem}>
                <span className={styles.sentimentLabel}>{isEnglish ? "EMOTION:" : "EMOCIÓN:"}</span>
                <span className={styles.sentimentValue}>{analysisData.text.sentiment.emotion}</span>
              </div>
              <div className={styles.sentimentItem}>
                <span className={styles.sentimentLabel}>{isEnglish ? "URGENCY:" : "URGENCIA:"}</span>
                <span className={styles.sentimentValue}>{analysisData.text.sentiment.urgency}</span>
              </div>
            </div>
            
            <div className={styles.keywordsList}>
              <div className={styles.keywordsTitle}>{isEnglish ? "KEY TERMS:" : "TÉRMINOS CLAVE:"}</div>
              {analysisData.text.keywords.map((keyword, index) => (
                <div key={index} className={styles.keywordItem}>
                  <span className={styles.keywordText}>"{keyword.word}"</span>
                  <span className={styles.keywordRelevance}>{keyword.relevance}%</span>
                </div>
              ))}
            </div>

            <div className={styles.textStats}>
              <div className={styles.statItem}>
                <span>{isEnglish ? "WORDS:" : "PALABRAS:"}</span>
                <span>{analysisData.text.stats.words}</span>
              </div>
              <div className={styles.statItem}>
                <span>{isEnglish ? "CHARS:" : "CARACTERES:"}</span>
                <span>{analysisData.text.stats.chars}</span>
              </div>
              <div className={styles.statItem}>
                <span>{isEnglish ? "CLARITY:" : "CLARIDAD:"}</span>
                <span>{analysisData.text.stats.readability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Document Processing Panel */}
        <div className={styles.analysisPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon}>📄</div>
            <div className={styles.panelTitle}>{analysisData.document.title}</div>
            <div className={styles.processingCount}>
              {analysisData.document.types.reduce((sum, type) => sum + type.processed, 0)} {isEnglish ? "files" : "archivos"}
            </div>
          </div>
          
          <div className={styles.panelContent}>
            <div className={styles.documentTypes}>
              {analysisData.document.types.map((docType, index) => (
                <div key={index} className={styles.documentType}>
                  <div className={styles.docTypeHeader}>
                    <span className={styles.docFormat}>{docType.type}</span>
                    <span className={styles.docCount}>{docType.processed}</span>
                  </div>
                  <div className={styles.docAccuracy}>
                    <span>{isEnglish ? "OCR Accuracy:" : "Precisión OCR:"}</span>
                    <span className={styles.docAccuracyValue}>{docType.accuracy}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.documentCapabilities}>
              <div className={styles.capabilityTitle}>{isEnglish ? "CAPABILITIES:" : "CAPACIDADES:"}</div>
              <div className={styles.capabilityList}>
                <div className={styles.capabilityItem}>✓ {isEnglish ? "Text Extraction" : "Extracción de Texto"}</div>
                <div className={styles.capabilityItem}>✓ {isEnglish ? "Form Recognition" : "Reconocimiento de Formularios"}</div>
                <div className={styles.capabilityItem}>✓ {isEnglish ? "Signature Detection" : "Detección de Firmas"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Analysis Panel */}
        <div className={styles.analysisPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon}>🎥</div>
            <div className={styles.panelTitle}>{analysisData.video.title}</div>
            <div className={styles.videoDuration}>
              {analysisData.video.duration}
            </div>
          </div>
          
          <div className={styles.panelContent}>
            <div className={styles.videoStats}>
              <div className={styles.videoStat}>
                <span className={styles.statLabel}>{isEnglish ? "DURATION:" : "DURACIÓN:"}</span>
                <span className={styles.statValue}>{analysisData.video.duration}</span>
              </div>
              <div className={styles.videoStat}>
                <span className={styles.statLabel}>{isEnglish ? "FRAMES:" : "FOTOGRAMAS:"}</span>
                <span className={styles.statValue}>{analysisData.video.frames.toLocaleString()}</span>
              </div>
              <div className={styles.videoStat}>
                <span className={styles.statLabel}>{isEnglish ? "MOTION:" : "MOVIMIENTO:"}</span>
                <span className={`${styles.statValue} ${analysisData.video.motionDetected ? styles.detected : ''}`}>
                  {analysisData.video.motionDetected ? (isEnglish ? "DETECTED" : "DETECTADO") : (isEnglish ? "NONE" : "NINGUNO")}
                </span>
              </div>
              <div className={styles.videoStat}>
                <span className={styles.statLabel}>{isEnglish ? "TRACKING:" : "SEGUIMIENTO:"}</span>
                <span className={styles.statValue}>{analysisData.video.objectTracking}</span>
              </div>
            </div>
            
            <div className={styles.videoFeatures}>
              <div className={styles.featureTitle}>{isEnglish ? "ANALYSIS FEATURES:" : "CARACTERÍSTICAS DE ANÁLISIS:"}</div>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>🎯 {isEnglish ? "Object Tracking" : "Seguimiento de Objetos"}</div>
                <div className={styles.featureItem}>👤 {isEnglish ? "Face Recognition" : "Reconocimiento Facial"}</div>
                <div className={styles.featureItem}>🚗 {isEnglish ? "Vehicle Detection" : "Detección de Vehículos"}</div>
                <div className={styles.featureItem}>⚡ {isEnglish ? "Event Detection" : "Detección de Eventos"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processing Status */}
      <div className={styles.processingStatus}>
        <div className={styles.statusTitle}>
          {isEnglish ? "SYSTEM STATUS" : "ESTADO DEL SISTEMA"}
        </div>
        <div className={styles.statusItems}>
          <div className={styles.statusItem}>
            <div className={`${styles.statusIndicator} ${styles.online}`}></div>
            <span>{isEnglish ? "AI Engine: ONLINE" : "Motor IA: EN LÍNEA"}</span>
          </div>
          <div className={styles.statusItem}>
            <div className={`${styles.statusIndicator} ${styles.online}`}></div>
            <span>{isEnglish ? "Database: CONNECTED" : "Base de Datos: CONECTADA"}</span>
          </div>
          <div className={styles.statusItem}>
            <div className={`${styles.statusIndicator} ${styles.online}`}></div>
            <span>{isEnglish ? "Security: ACTIVE" : "Seguridad: ACTIVA"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDashboard;
