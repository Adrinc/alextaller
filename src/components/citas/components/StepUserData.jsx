// StepUserData.jsx - Paso 3: Datos del usuario
import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/StepUserData.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

const StepUserData = ({ userData, onUserDataChange, onNext, onBack, canProceed }) => {
  const [formData, setFormData] = useState(userData);
  const [errors, setErrors] = useState({});
  
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsCitas.en : translationsCitas.es;

  useEffect(() => {
    onUserDataChange(formData);
  }, [formData, onUserDataChange]);

  const validateField = (section, field, value) => {
    const fieldKey = `${section}.${field}`;
    const newErrors = { ...errors };

    if (!value && ['fullName', 'email', 'phone', 'brand', 'model', 'year'].includes(field)) {
      newErrors[fieldKey] = t.userData.validation.required;
    } else if (field === 'email' && value && !isValidEmail(value)) {
      newErrors[fieldKey] = t.userData.validation.email;
    } else if (field === 'phone' && value && !isValidPhone(value)) {
      newErrors[fieldKey] = t.userData.validation.phone;
    } else if (field === 'vin' && value && !isValidVIN(value)) {
      newErrors[fieldKey] = 'VIN debe tener 17 caracteres alfanuméricos';
    } else {
      delete newErrors[fieldKey];
    }

    setErrors(newErrors);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const isValidVIN = (vin) => {
    // VIN debe tener exactamente 17 caracteres alfanuméricos (excluyendo I, O, Q)
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
    return vinRegex.test(vin.toUpperCase());
  };

  const handleVINInput = (value) => {
    // Auto-complete vehicle info based on VIN
    const cleanVIN = value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
    
    if (cleanVIN.length === 17 && isValidVIN(cleanVIN)) {
      // Simulate VIN decoding (in real app, you'd call a VIN decode API)
      const mockVINData = decodeVIN(cleanVIN);
      
      setFormData(prev => ({
        ...prev,
        vehicle: {
          ...prev.vehicle,
          vin: cleanVIN,
          brand: mockVINData.brand || prev.vehicle.brand,
          model: mockVINData.model || prev.vehicle.model,
          year: mockVINData.year || prev.vehicle.year,
          engine: mockVINData.engine || prev.vehicle.engine
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        vehicle: {
          ...prev.vehicle,
          vin: cleanVIN
        }
      }));
    }
  };

  const decodeVIN = (vin) => {
    // Mock VIN decoder - en una app real usarías una API de decodificación VIN
    const brands = {
      '1': { brand: 'Chevrolet', model: 'Malibu', year: '2020', engine: '1.5L Turbo' },
      '2': { brand: 'Ford', model: 'Focus', year: '2019', engine: '2.0L' },
      '3': { brand: 'Toyota', model: 'Camry', year: '2021', engine: '2.5L' },
      'J': { brand: 'Honda', model: 'Civic', year: '2020', engine: '1.5L Turbo' },
      'K': { brand: 'Hyundai', model: 'Elantra', year: '2021', engine: '2.0L' },
      'W': { brand: 'Volkswagen', model: 'Jetta', year: '2020', engine: '1.4L TSI' }
    };
    
    return brands[vin.charAt(0)] || {};
  };

  const handleInputChange = (section, field, value) => {
    if (field === 'vin') {
      handleVINInput(value);
      validateField(section, field, value);
      return;
    }

    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    
    validateField(section, field, value);
  };

  const renderInput = (section, field, config) => {
    const value = formData[section][field] || '';
    const fieldKey = `${section}.${field}`;
    const hasError = errors[fieldKey];

    return (
      <div className={`${styles.inputGroup} ${hasError ? styles.error : ''}`}>
        <label className={styles.label}>
          {config.label}
          {['fullName', 'email', 'phone', 'brand', 'model', 'year'].includes(field) && (
            <span className={styles.required}>*</span>
          )}
        </label>
        {field === 'vin' ? (
          <div className={styles.vinContainer}>
            <input
              type="text"
              className={`${styles.input} ${styles.vinInput}`}
              placeholder={config.placeholder}
              value={value}
              onChange={(e) => handleInputChange(section, field, e.target.value)}
              onBlur={() => validateField(section, field, value)}
              maxLength="17"
              style={{ textTransform: 'uppercase' }}
            />
            <div className={styles.vinInfo}>
              <span className={styles.vinIcon}>🔍</span>
              <span className={styles.vinText}>
                {value.length}/17 - {value.length === 17 && isValidVIN(value) ? '✅ VIN válido' : 'Ingresa 17 caracteres'}
              </span>
            </div>
          </div>
        ) : (
          <input
            type={field === 'email' ? 'email' : field === 'year' ? 'number' : 'text'}
            className={styles.input}
            placeholder={config.placeholder}
            value={value}
            onChange={(e) => handleInputChange(section, field, e.target.value)}
            onBlur={() => validateField(section, field, value)}
            min={field === 'year' ? '1950' : undefined}
            max={field === 'year' ? new Date().getFullYear() + 1 : undefined}
          />
        )}
        {hasError && (
          <span className={styles.errorMessage}>{hasError}</span>
        )}
      </div>
    );
  };

  return (
    <div className={styles.stepUserData}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.stepTitle}>{t.userData.title}</h3>
        <p className={styles.stepSubtitle}>{t.userData.subtitle}</p>
      </div>

      <div className={styles.content}>
        {/* Personal Information */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>👤</div>
            <h4 className={styles.sectionTitle}>{t.userData.personal.title}</h4>
          </div>
          
          <div className={styles.inputGrid}>
            {Object.entries(t.userData.personal.fields).map(([field, config]) => (
              <div key={field} className={styles.inputColumn}>
                {renderInput('personal', field, config)}
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Information */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>🚗</div>
            <h4 className={styles.sectionTitle}>{t.userData.vehicle.title}</h4>
          </div>
          
          <div className={styles.inputGrid}>
            {Object.entries(t.userData.vehicle.fields).map(([field, config]) => (
              <div key={field} className={styles.inputColumn}>
                {renderInput('vehicle', field, config)}
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Brands Quick Select */}
        <div className={styles.quickSelect}>
          <h5 className={styles.quickSelectTitle}>Marcas populares:</h5>
          <div className={styles.brandButtons}>
            {['Toyota', 'Nissan', 'Ford', 'Chevrolet', 'Honda', 'Volkswagen', 'Hyundai', 'Mazda'].map((brand) => (
              <button
                key={brand}
                className={`${styles.brandButton} ${
                  formData.vehicle.brand === brand ? styles.selected : ''
                }`}
                onClick={() => handleInputChange('vehicle', 'brand', brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form Summary */}
      <div className={styles.formSummary}>
        <div className={styles.summarySection}>
          <div className={styles.summaryIcon}>📋</div>
          <div className={styles.summaryContent}>
            <div className={styles.summaryTitle}>Resumen de datos</div>
            {formData.personal.fullName && (
              <div className={styles.summaryItem}>
                <strong>Cliente:</strong> {formData.personal.fullName}
              </div>
            )}
            {formData.vehicle.brand && formData.vehicle.model && (
              <div className={styles.summaryItem}>
                <strong>Vehículo:</strong> {formData.vehicle.brand} {formData.vehicle.model} {formData.vehicle.year}
                {formData.vehicle.color && ` - ${formData.vehicle.color}`}
              </div>
            )}
            {formData.vehicle.vin && (
              <div className={styles.summaryItem}>
                <strong>VIN:</strong> {formData.vehicle.vin}
              </div>
            )}
            {formData.personal.phone && (
              <div className={styles.summaryItem}>
                <strong>Contacto:</strong> {formData.personal.phone}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.backButton} onClick={onBack}>
          <span className={styles.buttonIcon}>←</span>
          <span className={styles.buttonText}>{t.common.back}</span>
        </button>

        <button
          className={`${styles.nextButton} ${canProceed ? styles.enabled : styles.disabled}`}
          onClick={onNext}
          disabled={!canProceed}
        >
          <span className={styles.buttonText}>{t.common.next}</span>
          <span className={styles.buttonIcon}>→</span>
          <div className={styles.buttonGlow}></div>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className={styles.progressIndicator}>
        <div className={styles.progressText}>
          Completa todos los campos obligatorios (*)
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ 
              width: `${(Object.keys(errors).length === 0 && canProceed) ? 100 : 60}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StepUserData;
