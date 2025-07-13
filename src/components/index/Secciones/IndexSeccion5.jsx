import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import MunicipalMapComponent from '../components/MunicipalMapComponent.jsx';
import styles from "../css/indexSeccion5.module.css";

const HomeSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryHover = (index) => {
    setSelectedCategory(index);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory(null);
  };

  // Características específicas para cada categoría
  const categoryFeatures = [
    // Alumbrado público
    {
      features: [
        {
          icon: "M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,10.68 7.8,12.17 9,13.18V16H15V13.18C16.2,12.17 17,10.68 17,9A5,5 0 0,0 12,4Z",
          text: ingles ? "Light intensity meter" : "Medidor de intensidad"
        },
        {
          icon: "M12,18.5A2.5,2.5 0 0,1 9.5,16A2.5,2.5 0 0,1 12,13.5A2.5,2.5 0 0,1 14.5,16A2.5,2.5 0 0,1 12,18.5M12,7A9,9 0 0,0 3,16A9,9 0 0,0 12,25A9,9 0 0,0 21,16A9,9 0 0,0 12,7Z",
          text: ingles ? "Night mode photos" : "Fotos modo nocturno"
        },
        {
          icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",
          text: ingles ? "Pole numbering" : "Numeración de postes"
        }
      ]
    },
    // Bacheo
    {
      features: [
        {
          icon: "M19,17H22V19H19V17M19,10H22V16H19V10M2,17H18V19H2V17M2,10H18V16H2V10M6,2V5H9V2H11V5H14V2H16V5H17A2,2 0 0,1 19,7V9H2V7A2,2 0 0,1 4,5H5V2H6Z",
          text: ingles ? "Depth measurement" : "Medición de profundidad"
        },
        {
          icon: "M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L21.66,6.22L16.04,11.84C15.53,12.75 14.55,13.36 13.43,13.36C13.29,13.36 13.15,13.35 13,13.32V16A1,1 0 0,1 12,17A1,1 0 0,1 11,16H12M12,3A9,9 0 0,1 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12A9,9 0 0,1 12,3M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z",
          text: ingles ? "Traffic impact level" : "Nivel de afectación vial"
        },
        {
          icon: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
          text: ingles ? "Risk classification" : "Clasificación de riesgo"
        }
      ]
    },
    // Basura y limpieza
    {
      features: [
        {
          icon: "M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H9L3,7V9H21M20,10H4V15L6,18V19A1,1 0 0,0 7,20H17A1,1 0 0,0 18,19V18L20,15V10Z",
          text: ingles ? "Container capacity" : "Capacidad de contenedores"
        },
        {
          icon: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",
          text: ingles ? "Collection schedule" : "Horario de recolección"
        },
        {
          icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z",
          text: ingles ? "Waste type classification" : "Clasificación tipo de residuo"
        }
      ]
    },
    // Vehículos abandonados
    {
      features: [
        {
          icon: "M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z",
          text: ingles ? "License plate capture" : "Captura de placas"
        },
        {
          icon: "M18,18.5A0.5,0.5 0 0,1 17.5,19A0.5,0.5 0 0,1 17,18.5A0.5,0.5 0 0,1 17.5,18A0.5,0.5 0 0,1 18,18.5M19.5,9.5L20.5,9.5L20.5,8L19.5,8V9.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17.75,16.25A0.75,0.75 0 0,1 17,17A0.75,0.75 0 0,1 16.25,16.25A0.75,0.75 0 0,1 17,15.5A0.75,0.75 0 0,1 17.75,16.25Z",
          text: ingles ? "Vehicle condition report" : "Reporte estado del vehículo"
        },
        {
          icon: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",
          text: ingles ? "Time estimation" : "Estimación de tiempo"
        }
      ]
    },
    // Exceso de ruido
    {
      features: [
        {
          icon: "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",
          text: ingles ? "Decibel meter" : "Medidor de decibeles"
        },
        {
          icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",
          text: ingles ? "Audio recording" : "Grabación de audio"
        },
        {
          icon: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",
          text: ingles ? "Time period tracking" : "Seguimiento por horarios"
        }
      ]
    },
    // Maltrato animal
    {
      features: [
        {
          icon: "M4.5,12.5C4.5,13.88 5.62,15 7,15S9.5,13.88 9.5,12.5S8.38,10 7,10S4.5,11.12 4.5,12.5M14.5,12.5C14.5,13.88 15.62,15 17,15S19.5,13.88 19.5,12.5S18.38,10 17,10S14.5,11.12 14.5,12.5M22,12C22,18.08 17.08,23 11,23S0,18.08 0,12S4.92,1 11,1S22,5.92 22,12M12,4C12,4 6,5 6,11C6,13 10,15 10,18H14C14,15 18,13 18,11C18,5 12,4 12,4Z",
          text: ingles ? "Animal identification" : "Identificación del animal"
        },
        {
          icon: "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",
          text: ingles ? "Evidence video" : "Video de evidencia"
        },
        {
          icon: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z",
          text: ingles ? "Rescue priority" : "Prioridad de rescate"
        }
      ]
    },
    // Inseguridad
    {
      features: [
        {
          icon: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.9 16,12.4 16,13V16C16,17 15,18 14,18H10C9,18 8,17 8,16V13C8,12.4 8.4,11.9 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z",
          text: ingles ? "Anonymous reporting" : "Reporte anónimo"
        },
        {
          icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",
          text: ingles ? "Real-time alerts" : "Alertas en tiempo real"
        },
        {
          icon: "M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M11,7H13A2,2 0 0,1 15,9V10.5H13V9H11V15H13V13.5H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7Z",
          text: ingles ? "Emergency contacts" : "Contactos de emergencia"
        }
      ]
    },
    // Señalización
    {
      features: [
        {
          icon: "M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,10.68 7.8,12.17 9,13.18V16H15V13.18C16.2,12.17 17,10.68 17,9A5,5 0 0,0 12,4Z",
          text: ingles ? "Signal status check" : "Verificación de estado"
        },
        {
          icon: "M18,18.5A0.5,0.5 0 0,1 17.5,19A0.5,0.5 0 0,1 17,18.5A0.5,0.5 0 0,1 17.5,18A0.5,0.5 0 0,1 18,18.5M19.5,9.5L20.5,9.5L20.5,8L19.5,8V9.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17.75,16.25A0.75,0.75 0 0,1 17,17A0.75,0.75 0 0,1 16.25,16.25A0.75,0.75 0 0,1 17,15.5A0.75,0.75 0 0,1 17.75,16.25Z",
          text: ingles ? "Traffic flow analysis" : "Análisis de flujo vial"
        },
        {
          icon: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
          text: ingles ? "Safety impact" : "Impacto en seguridad"
        }
      ]
    },
    // Temas de género
    {
      features: [
        {
          icon: "M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M11,7H13A2,2 0 0,1 15,9V10.5H13V9H11V15H13V13.5H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7Z",
          text: ingles ? "Confidential reports" : "Reportes confidenciales"
        },
        {
          icon: "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",
          text: ingles ? "Testimony recording" : "Grabación de testimonio"
        },
        {
          icon: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25Z",
          text: ingles ? "Support network" : "Red de apoyo"
        }
      ]
    },
    // Accesibilidad
    {
      features: [
        {
          icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",
          text: ingles ? "Barrier measurement" : "Medición de barreras"
        },
        {
          icon: "M18,18.5A0.5,0.5 0 0,1 17.5,19A0.5,0.5 0 0,1 17,18.5A0.5,0.5 0 0,1 17.5,18A0.5,0.5 0 0,1 18,18.5M19.5,9.5L20.5,9.5L20.5,8L19.5,8V9.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17.75,16.25A0.75,0.75 0 0,1 17,17A0.75,0.75 0 0,1 16.25,16.25A0.75,0.75 0 0,1 17,15.5A0.75,0.75 0 0,1 17.75,16.25Z",
          text: ingles ? "Compliance verification" : "Verificación normativa"
        },
        {
          icon: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25Z",
          text: ingles ? "Inclusion assessment" : "Evaluación de inclusión"
        }
      ]
    },
    // Trámites
    {
      features: [
        {
          icon: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z",
          text: ingles ? "Document scanner" : "Escáner de documentos"
        },
        {
          icon: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
          text: ingles ? "Process tracking" : "Seguimiento de procesos"
        },
        {
          icon: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",
          text: ingles ? "Appointment booking" : "Agenda de citas"
        }
      ]
    },
    // Otros eventos
    {
      features: [
        {
          icon: "M9,11H15L13,9L15,7H9V9L11,11L9,13V11M7,9V7H5V9H7M7,13V11H5V13H7M7,17V15H5V17H7M19,7V9H17V7H19M19,11V13H17V11H19M19,15V17H17V15H19Z",
          text: ingles ? "Custom forms" : "Formularios personalizados"
        },
        {
          icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z",
          text: ingles ? "GPS location" : "Ubicación GPS"
        },
        {
          icon: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",
          text: ingles ? "Priority levels" : "Niveles de prioridad"
        }
      ]
    }
  ];

  return (
    <section id="categorias" className={styles.section}>
      <div className={styles.container}>
        {/* Header institucional */}
        <div className={styles.header}>
          <div className={styles.platformBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z"/>
            </svg>
            <span>{ingles ? "Mobile Platform Features" : "Características de la Plataforma Móvil"}</span>
          </div>

          <h2 className={styles.title}>
            {ingles 
              ? "Comprehensive Municipal Issue Reporting System" 
              : "Sistema Integral de Reporte de Incidencias Municipales"
            }
          </h2>
          <p className={styles.subtitle}>
            {ingles 
              ? "Our mobile application provides citizens with specialized tools to report municipal issues across multiple categories, ensuring efficient communication with local government departments in Ensenada, Baja California."
              : "Nuestra aplicación móvil proporciona a los ciudadanos herramientas especializadas para reportar incidencias municipales en múltiples categorías, asegurando comunicación eficiente con los departamentos de gobierno local en Ensenada, Baja California."
            }
          </p>

          {/* Indicadores de la plataforma */}
          <div className={styles.platformIndicators}>
            <div className={styles.indicator}>
              <svg className={styles.indicatorIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z"/>
              </svg>
              <div className={styles.indicatorText}>
                <strong>{ingles ? "Citizen App" : "App Ciudadana"}</strong>
                <span>{ingles ? "iOS & Android" : "iOS y Android"}</span>
              </div>
            </div>
            
            <div className={styles.indicator}>
              <svg className={styles.indicatorIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
              </svg>
              <div className={styles.indicatorText}>
                <strong>{ingles ? "Admin Dashboard" : "Panel Administrativo"}</strong>
                <span>{ingles ? "Web Platform" : "Plataforma Web"}</span>
              </div>
            </div>
            
            <div className={styles.indicator}>
              <svg className={styles.indicatorIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
              </svg>
              <div className={styles.indicatorText}>
                <strong>{ingles ? "Real-time Tracking" : "Seguimiento en Tiempo Real"}</strong>
                <span>{ingles ? "GPS Integration" : "Integración GPS"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de categorías mejorado */}
        <div className={styles.categoriesSection}>
          <div className={styles.categoriesHeader}>
            <h3 className={styles.categoriesTitle}>
              {ingles ? "Municipal Issue Categories" : "Categorías de Incidencias Municipales"}
            </h3>
            <p className={styles.categoriesDescription}>
              {ingles 
                ? "Citizens can report issues across specialized categories, each with customized forms and priority levels for optimal municipal response."
                : "Los ciudadanos pueden reportar incidencias en categorías especializadas, cada una con formularios personalizados y niveles de prioridad para una respuesta municipal óptima."
              }
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {t.categorias.items.map((category, index) => (
              <div 
                key={index} 
                className={`${styles.categoryCard} ${selectedCategory === index ? styles.active : ''}`}
                onMouseEnter={() => handleCategoryHover(index)}
                onMouseLeave={handleCategoryLeave}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    {category.icon}
                  </div>
                  <div className={styles.categoryBadge}>
                    <span className={styles.categoryCode}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <div className={styles.categoryContent}>
                  <h4 className={styles.categoryTitle}>{category.title}</h4>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  
                  <div className={styles.categoryFeatures}>
                    {categoryFeatures[index]?.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={styles.feature}>
                        <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                          <path d={feature.icon}/>
                        </svg>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.categoryFooter}>
                  <div className={styles.departmentTag}>
                    <svg className={styles.departmentIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25Z"/>
                    </svg>
                    <span>
                      {ingles ? "Municipal Dept." : "Depto. Municipal"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas de rendimiento del sistema */}
        <div className={styles.performanceSection}>
          <div className={styles.performanceHeader}>
            <div className={styles.performanceBadge}>
              <svg className={styles.performanceBadgeIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
              </svg>
              <span>{ingles ? "System Performance" : "Rendimiento del Sistema"}</span>
            </div>
            
            <h3 className={styles.performanceTitle}>
              {ingles ? "Municipal Impact Metrics" : "Métricas de Impacto Municipal"}
            </h3>
            <p className={styles.performanceSubtitle}>
              {ingles 
                ? "Real data from municipal implementations demonstrating the platform's effectiveness in improving citizen-government communication."
                : "Datos reales de implementaciones municipales que demuestran la efectividad de la plataforma en mejorar la comunicación ciudadano-gobierno."
              }
            </p>
          </div>

          <div className={styles.performanceGrid}>
            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>15,347</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Reports Processed" : "Reportes Procesados"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "Last 12 months" : "Últimos 12 meses"}
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>94.2%</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Resolution Rate" : "Tasa de Resolución"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "Average completion" : "Completado promedio"}
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>3.2hrs</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Avg Response Time" : "Tiempo Promedio de Respuesta"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "First contact" : "Primer contacto"}
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>4.7/5</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Citizen Satisfaction" : "Satisfacción Ciudadana"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "User ratings" : "Calificaciones de usuarios"}
              </div>
            </div>
          </div>
        </div>

        {/* Mapa interactivo municipal */}
        <MunicipalMapComponent />
      </div>
    </section>
  );
};

export default HomeSeccion5;