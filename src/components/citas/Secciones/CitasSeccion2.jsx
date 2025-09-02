// CitasSeccion2.jsx - Stepper principal para agendamiento de citas
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/CitasSeccion2.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

// Import step components
import StepServices from '../components/StepServices';
import StepDateTime from '../components/StepDateTime';
import StepUserData from '../components/StepUserData';
import StepConfirmation from '../components/StepConfirmation';

const CitasSeccion2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    services: [],
    datetime: null,
    userData: {
      personal: {
        fullName: '',
        email: '',
        phone: ''
      },
      vehicle: {
        brand: '',
        model: '',
        year: '',
        plates: '',
        vin: '',
        color: ''
      }
    }
  });

  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsCitas.en : translationsCitas.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
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

  const handleStepChange = (step) => {
    if (step >= 1 && step <= 4) {
      setCurrentStep(step);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateAppointmentData = (section, data) => {
    setAppointmentData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return appointmentData.services.length > 0;
      case 2:
        return appointmentData.datetime !== null;
      case 3:
        const { personal, vehicle } = appointmentData.userData;
        return personal.fullName && personal.email && personal.phone && 
               vehicle.brand && vehicle.model && vehicle.year;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepServices
            selectedServices={appointmentData.services}
            onServicesChange={(services) => updateAppointmentData('services', services)}
            onNext={handleNext}
            canProceed={canProceedToNext()}
          />
        );
      case 2:
        return (
          <StepDateTime
            selectedDateTime={appointmentData.datetime}
            onDateTimeChange={(datetime) => updateAppointmentData('datetime', datetime)}
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedToNext()}
          />
        );
      case 3:
        return (
          <StepUserData
            userData={appointmentData.userData}
            onUserDataChange={(userData) => updateAppointmentData('userData', userData)}
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedToNext()}
          />
        );
      case 4:
        return (
          <StepConfirmation
            appointmentData={appointmentData}
            onBack={handleBack}
            onEdit={(step) => setCurrentStep(step)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="booking-stepper"
      ref={sectionRef}
      className={`${styles.stepperSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Agenda tu cita paso a paso
          </h2>
          <p className={styles.subtitle}>
            Sigue estos simples pasos para agendar tu cita
          </p>
        </div>

        {/* Progress Stepper */}
        <div className={styles.progressStepper}>
          {t.stepper.steps.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.stepItem} ${
                currentStep === step.id ? styles.active :
                currentStep > step.id ? styles.completed : styles.pending
              }`}
              onClick={() => {
                // Only allow going back to completed steps
                if (currentStep > step.id) {
                  handleStepChange(step.id);
                }
              }}
            >
              <div className={styles.stepCircle}>
                {currentStep > step.id ? (
                  <span className={styles.checkIcon}>✓</span>
                ) : (
                  <span className={styles.stepIcon}>{step.icon}</span>
                )}
              </div>
              
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDescription}>{step.description}</div>
              </div>
              
              {index < t.stepper.steps.length - 1 && (
                <div className={`${styles.stepConnector} ${
                  currentStep > step.id ? styles.connectorCompleted : ''
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className={styles.stepContent}>
          {renderStepContent()}
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>

        {/* Step Indicator */}
        <div className={styles.stepIndicator}>
          <span className={styles.currentStep}>{currentStep}</span>
          <span className={styles.stepSeparator}>/</span>
          <span className={styles.totalSteps}>4</span>
        </div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
    </section>
  );
};

export default CitasSeccion2;
