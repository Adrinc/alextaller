import React, { useState, useEffect } from "react";
import styles from "./SmartphoneDemo.module.css";

const SmartphoneDemo = ({ isEnglish = false }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const steps = [
    {
      screen: "camera",
      title: isEnglish ? "Capture Evidence" : "Capturar Evidencia",
      subtitle: isEnglish ? "Take photo of incident" : "Tomar foto del incidente"
    },
    {
      screen: "form",
      title: isEnglish ? "Add Details" : "Añadir Detalles",
      subtitle: isEnglish ? "Describe what happened" : "Describir lo ocurrido"
    },
    {
      screen: "location",
      title: isEnglish ? "Verify Location" : "Verificar Ubicación",
      subtitle: isEnglish ? "Confirm exact address" : "Confirmar dirección exacta"
    },
    {
      screen: "processing",
      title: isEnglish ? "AI Processing" : "Procesamiento IA",
      subtitle: isEnglish ? "Analyzing report..." : "Analizando reporte..."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 3) {
          setIsAnalyzing(true);
          setTimeout(() => setIsAnalyzing(false), 2000);
          return 0;
        }
        return prev + 1;
      });
    }, 5000); // Cambiado de 3000 a 5000ms para ser más lento

    return () => clearInterval(interval);
  }, []);

  const CameraScreen = () => (
    <div className={styles.screen}>
      <div className={styles.statusBar}>
        <span>9:41</span>
        <div className={styles.statusIcons}>
          <div className={styles.signal}></div>
          <div className={styles.battery}></div>
        </div>
      </div>
      
      <div className={styles.cameraHeader}>
        <button className={styles.backBtn}>×</button>
        <h3>{isEnglish ? "Report Incident" : "Reportar Incidente"}</h3>
        <div className={styles.folioNumber}>FOL-2024-001247</div>
      </div>

      <div className={styles.cameraViewfinder}>
        <img 
          src="/image/global/semaforo.jpg" 
          alt="Traffic light"
          className={styles.capturedImage}
        />
        <div className={styles.captureOverlay}>
          <div className={styles.crosshair}>
            <div className={styles.crosshairLine}></div>
            <div className={styles.crosshairLine}></div>
          </div>
          <div className={styles.detectionBox}>
            <span>{isEnglish ? "Traffic Signal Detected" : "Semáforo Detectado"}</span>
          </div>
        </div>
      </div>

      <div className={styles.cameraControls}>
        <div className={styles.captureButton}>
          <div className={styles.captureInner}></div>
        </div>
        <div className={styles.cameraOptions}>
          <span className={styles.active}>FOTO</span>
          <span>VIDEO</span>
          <span>DOC</span>
        </div>
      </div>
    </div>
  );

  const FormScreen = () => (
    <div className={styles.screen}>
      <div className={styles.statusBar}>
        <span>9:41</span>
        <div className={styles.statusIcons}>
          <div className={styles.signal}></div>
          <div className={styles.battery}></div>
        </div>
      </div>
      
      <div className={styles.formHeader}>
        <button className={styles.backBtn}>←</button>
        <h3>{isEnglish ? "Report Details" : "Detalles del Reporte"}</h3>
        <span className={styles.step}>2/4</span>
      </div>

      <div className={styles.formContent}>
        <div className={styles.categorySelector}>
          <div className={`${styles.categoryItem} ${styles.selected}`}>
            🚦 {isEnglish ? "Traffic Signals" : "Semáforos"}
          </div>
          <div className={styles.categoryItem}>
            🚧 {isEnglish ? "Infrastructure" : "Infraestructura"}
          </div>
        </div>

        <div className={styles.textArea}>
          <label>{isEnglish ? "Describe the problem:" : "Describe el problema:"}</label>
          <div className={styles.textInput}>
            <p>{isEnglish 
              ? "Traffic light has been malfunctioning for 3 days. Very dangerous intersection..."
              : "Semáforo lleva 3 días descompuesto. Cruce muy peligroso..."
            }</p>
            <div className={styles.typingCursor}></div>
          </div>
        </div>

        <div className={styles.urgencySelector}>
          <label>{isEnglish ? "Urgency Level:" : "Nivel de Urgencia:"}</label>
          <div className={styles.urgencyOptions}>
            <div className={styles.urgencyItem}>🟢 {isEnglish ? "Low" : "Baja"}</div>
            <div className={styles.urgencyItem}>🟡 {isEnglish ? "Medium" : "Media"}</div>
            <div className={`${styles.urgencyItem} ${styles.selected}`}>
              🔴 {isEnglish ? "High" : "Alta"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LocationScreen = () => (
    <div className={styles.screen}>
      <div className={styles.statusBar}>
        <span>9:41</span>
        <div className={styles.statusIcons}>
          <div className={styles.signal}></div>
          <div className={styles.battery}></div>
        </div>
      </div>
      
      <div className={styles.locationHeader}>
        <button className={styles.backBtn}>←</button>
        <h3>{isEnglish ? "Verify Location" : "Verificar Ubicación"}</h3>
        <span className={styles.step}>3/4</span>
      </div>

      <div className={styles.mapContainer}>
        <img 
          src="/image/global/maplg.jpg" 
          alt="Google Maps"
          className={styles.mapImage}
        />
        <div className={styles.locationMarker}>📍</div>
        <div className={styles.accuracyCircle}></div>
      </div>

      <div className={styles.addressInfo}>
        <div className={styles.addressTitle}>
          {isEnglish ? "Detected Address:" : "Dirección Detectada:"}
        </div>
        <div className={styles.addressText}>
          Av. Zapata #1234<br />
          Zona Río, C.P. 22000<br />
          Tijuana, Baja California
        </div>
        <div className={styles.accuracyInfo}>
          <span className={styles.gpsIcon}>🛰️</span>
          {isEnglish ? "GPS Accuracy: ±3m" : "Precisión GPS: ±3m"}
        </div>
      </div>
    </div>
  );

  const ProcessingScreen = () => (
    <div className={styles.screen}>
      <div className={styles.statusBar}>
        <span>9:41</span>
        <div className={styles.statusIcons}>
          <div className={styles.signal}></div>
          <div className={styles.battery}></div>
        </div>
      </div>
      
      <div className={styles.processingHeader}>
        <h3>{isEnglish ? "AI Analysis" : "Análisis IA"}</h3>
        <span className={styles.step}>4/4</span>
      </div>

      <div className={styles.processingContent}>
        <div className={styles.aiLogo}>
          <img 
            src="/image/global/robot3.png" 
            alt="AI Robot"
            className={`${styles.robotIcon} ${isAnalyzing ? styles.processing : ''}`}
          />
          <div className={styles.aiPulse}></div>
        </div>

        <div className={styles.processingSteps}>
          <div className={`${styles.processStep} ${isAnalyzing ? styles.active : styles.completed}`}>
            <div className={styles.stepIcon}>📷</div>
            <span>{isEnglish ? "Image Analysis" : "Análisis de Imagen"}</span>
            <div className={styles.stepStatus}>✓</div>
          </div>
          
          <div className={`${styles.processStep} ${isAnalyzing ? styles.active : ''}`}>
            <div className={styles.stepIcon}>📝</div>
            <span>{isEnglish ? "Text Processing" : "Procesamiento de Texto"}</span>
            <div className={styles.stepStatus}>⚡</div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepIcon}>🎯</div>
            <span>{isEnglish ? "Priority Assignment" : "Asignación de Prioridad"}</span>
            <div className={styles.stepStatus}>⏳</div>
          </div>
        </div>

        <div className={styles.resultsPreview}>
          <div className={styles.resultItem}>
            <span>{isEnglish ? "Confidence:" : "Confianza:"}</span>
            <span className={styles.confidence}>94%</span>
          </div>
          <div className={styles.resultItem}>
            <span>{isEnglish ? "Priority:" : "Prioridad:"}</span>
            <span className={styles.priority}>{isEnglish ? "HIGH" : "ALTA"}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (steps[currentStep].screen) {
      case "camera": return <CameraScreen />;
      case "form": return <FormScreen />;
      case "location": return <LocationScreen />;
      case "processing": return <ProcessingScreen />;
      default: return <CameraScreen />;
    }
  };

  return (
    <div className={styles.smartphoneContainer}>
      <div className={styles.smartphone}>
        <div className={styles.phoneFrame}>
          {renderScreen()}
        </div>
        <div className={styles.homeIndicator}></div>
      </div>
      
      <div className={styles.stepIndicator}>
        <div className={styles.stepTitle}>{steps[currentStep].title}</div>
        <div className={styles.stepSubtitle}>{steps[currentStep].subtitle}</div>
        <div className={styles.stepDots}>
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.dot} ${index === currentStep ? styles.active : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartphoneDemo;
