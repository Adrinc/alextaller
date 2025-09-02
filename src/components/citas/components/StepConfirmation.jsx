// StepConfirmation.jsx - Paso 4: Confirmación de cita
import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/StepConfirmation.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

const StepConfirmation = ({ appointmentData, onBack, onEdit }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const ingles = useStore(isEnglish);
  const t = ingles ? translationsCitas.en : translationsCitas.es;

  const calculateEstimatedTime = () => {
    return appointmentData.services.reduce((total, service) => {
      const timeMatch = service.duration.match(/(\d+)/);
      return total + (timeMatch ? parseInt(timeMatch[1]) : 60);
    }, 0);
  };

  const calculateEstimatedCost = () => {
    return appointmentData.services.reduce((total, service) => {
      const priceMatch = service.price.match(/\$(\d+)/);
      return total + (priceMatch ? parseInt(priceMatch[1]) : 0);
    }, 0);
  };

  const generateConfirmationNumber = () => {
    return 'ALX' + Date.now().toString().slice(-6) + Math.random().toString(36).substr(2, 3).toUpperCase();
  };

  const handleConfirm = async () => {
    if (!acceptedTerms) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const confNumber = generateConfirmationNumber();
      setConfirmationNumber(confNumber);
      setIsSuccess(true);
      
      // Here you would typically send the data to your backend
      console.log('Appointment Data:', appointmentData);
    } catch (error) {
      console.error('Error submitting appointment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phone = "525555555555";
    const services = appointmentData.services.map(s => s.name).join(', ');
    const datetime = appointmentData.datetime?.formatted || '';
    const message = encodeURIComponent(
      `¡Hola! Acabo de agendar una cita:\n\n` +
      `📅 Fecha: ${datetime}\n` +
      `🔧 Servicios: ${services}\n` +
      `🚗 Vehículo: ${appointmentData.userData.vehicle.brand} ${appointmentData.userData.vehicle.model}\n` +
      `📋 Confirmación: ${confirmationNumber}\n\n` +
      `¿Podrían confirmar mi cita?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  if (isSuccess) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successIcon}>✅</div>
        <h3 className={styles.successTitle}>{t.success.title}</h3>
        <p className={styles.successSubtitle}>{t.success.subtitle}</p>
        
        <div className={styles.confirmationCard}>
          <div className={styles.confirmationNumber}>
            <span className={styles.confirmationLabel}>
              {t.success.details.confirmation}:
            </span>
            <span className={styles.confirmationValue}>{confirmationNumber}</span>
          </div>
          
          <div className={styles.nextSteps}>
            <h4 className={styles.nextStepsTitle}>{t.success.details.nextSteps}:</h4>
            <ul className={styles.stepsList}>
              <li>✅ {t.success.details.reminder}</li>
              <li>📱 {t.success.details.whatsapp}</li>
              <li>💬 {t.success.details.questions}</li>
            </ul>
          </div>
        </div>

        <div className={styles.successActions}>
          <button 
            className={styles.whatsappButton}
            onClick={handleWhatsApp}
          >
            <span className={styles.buttonIcon}>📱</span>
            <span className={styles.buttonText}>Confirmar por WhatsApp</span>
          </button>
          
          <div className={styles.secondaryActions}>
            <button 
              className={styles.secondaryButton}
              onClick={() => window.location.href = '/'}
            >
              {t.success.buttons.home}
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => window.location.href = '/servicios'}
            >
              {t.success.buttons.services}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.stepConfirmation}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.stepTitle}>{t.confirmation.title}</h3>
        <p className={styles.stepSubtitle}>{t.confirmation.subtitle}</p>
      </div>

      <div className={styles.content}>
        {/* Services Summary */}
        <div className={styles.summarySection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>🔧</div>
            <h4 className={styles.sectionTitle}>{t.confirmation.summary.services}</h4>
            <button 
              className={styles.editButton}
              onClick={() => onEdit(1)}
            >
              {t.confirmation.buttons.edit}
            </button>
          </div>
          
          <div className={styles.servicesList}>
            {appointmentData.services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceName}>{service.name}</div>
                <div className={styles.serviceDetails}>
                  <span className={styles.serviceDuration}>{service.duration}</span>
                  <span className={styles.servicePrice}>{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DateTime Summary */}
        <div className={styles.summarySection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>📅</div>
            <h4 className={styles.sectionTitle}>{t.confirmation.summary.datetime}</h4>
            <button 
              className={styles.editButton}
              onClick={() => onEdit(2)}
            >
              {t.confirmation.buttons.edit}
            </button>
          </div>
          
          <div className={styles.dateTimeInfo}>
            <div className={styles.dateInfo}>
              {appointmentData.datetime?.date?.toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className={styles.timeInfo}>
              {appointmentData.datetime?.time}
            </div>
          </div>
        </div>

        {/* User Data Summary */}
        <div className={styles.summarySection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>👤</div>
            <h4 className={styles.sectionTitle}>{t.confirmation.summary.personal}</h4>
            <button 
              className={styles.editButton}
              onClick={() => onEdit(3)}
            >
              {t.confirmation.buttons.edit}
            </button>
          </div>
          
          <div className={styles.userInfo}>
            <div className={styles.infoGroup}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Nombre:</span>
                <span className={styles.infoValue}>
                  {appointmentData.userData.personal.fullName}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span className={styles.infoValue}>
                  {appointmentData.userData.personal.email}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Teléfono:</span>
                <span className={styles.infoValue}>
                  {appointmentData.userData.personal.phone}
                </span>
              </div>
            </div>
            
            <div className={styles.infoGroup}>
              <div className={styles.vehicleInfo}>
                <span className={styles.vehicleLabel}>🚗 Vehículo:</span>
                <span className={styles.vehicleValue}>
                  {appointmentData.userData.vehicle.brand} {appointmentData.userData.vehicle.model} {appointmentData.userData.vehicle.year}
                </span>
                {appointmentData.userData.vehicle.color && (
                  <span className={styles.vehicleColor}>
                    Color: {appointmentData.userData.vehicle.color}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Totals Summary */}
        <div className={styles.totalsSection}>
          <div className={styles.totalItem}>
            <span className={styles.totalLabel}>{t.confirmation.summary.estimatedTime}:</span>
            <span className={styles.totalValue}>{calculateEstimatedTime()} min</span>
          </div>
          <div className={styles.totalItem}>
            <span className={styles.totalLabel}>{t.confirmation.summary.estimatedCost}:</span>
            <span className={styles.totalValue}>${calculateEstimatedCost()}</span>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className={styles.termsSection}>
          <label className={styles.termsLabel}>
            <input
              type="checkbox"
              className={styles.termsCheckbox}
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.termsText}>
              {t.confirmation.terms.text} <a href="/terms" className={styles.termsLink}>
                {t.confirmation.terms.link}
              </a> {t.confirmation.terms.and} <a href="/privacy" className={styles.termsLink}>
                {t.confirmation.terms.privacy}
              </a>
            </span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.backButton} onClick={onBack}>
          <span className={styles.buttonIcon}>←</span>
          <span className={styles.buttonText}>{t.confirmation.buttons.back}</span>
        </button>

        <button
          className={`${styles.confirmButton} ${
            acceptedTerms ? styles.enabled : styles.disabled
          }`}
          onClick={handleConfirm}
          disabled={!acceptedTerms || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className={styles.loadingSpinner}></span>
              <span className={styles.buttonText}>{t.common.loading}</span>
            </>
          ) : (
            <>
              <span className={styles.buttonText}>{t.confirmation.buttons.confirm}</span>
              <span className={styles.buttonIcon}>✓</span>
            </>
          )}
          <div className={styles.buttonGlow}></div>
        </button>
      </div>
    </div>
  );
};

export default StepConfirmation;
