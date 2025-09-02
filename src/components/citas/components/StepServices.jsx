// StepServices.jsx - Paso 1: Selección de servicios
import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/StepServices.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

const StepServices = ({ selectedServices, onServicesChange, onNext, canProceed }) => {
  const [activeCategory, setActiveCategory] = useState('maintenance');
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsCitas.en : translationsCitas.es;

  const handleServiceToggle = (serviceId) => {
    const isSelected = selectedServices.some(s => s.id === serviceId);
    
    if (isSelected) {
      // Remove service
      const updatedServices = selectedServices.filter(s => s.id !== serviceId);
      onServicesChange(updatedServices);
    } else {
      // Add service
      const category = t.services.categories.find(cat => 
        cat.services.some(service => service.id === serviceId)
      );
      const service = category.services.find(s => s.id === serviceId);
      
      if (service) {
        onServicesChange([...selectedServices, service]);
      }
    }
  };

  const getSelectedCount = () => selectedServices.length;

  const calculateEstimatedTotal = () => {
    return selectedServices.reduce((total, service) => {
      const priceMatch = service.price.match(/\$(\d+)/);
      return total + (priceMatch ? parseInt(priceMatch[1]) : 0);
    }, 0);
  };

  return (
    <div className={styles.stepServices}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.stepTitle}>{t.services.title}</h3>
        <p className={styles.stepSubtitle}>{t.services.subtitle}</p>
        
        {getSelectedCount() > 0 && (
          <div className={styles.selectionSummary}>
            <span className={styles.selectedCount}>
              {getSelectedCount()} {t.services.selectedCount}
            </span>
            <span className={styles.estimatedTotal}>
              Total estimado: ${calculateEstimatedTotal()}
            </span>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className={styles.categoryTabs}>
        {t.services.categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryTab} ${
              activeCategory === category.id ? styles.active : ''
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className={styles.categoryTitle}>{category.title}</span>
            <span className={styles.categoryCount}>
              {category.services.length} servicios
            </span>
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className={styles.servicesGrid}>
        {t.services.categories
          .find(cat => cat.id === activeCategory)
          ?.services.map((service) => {
            const isSelected = selectedServices.some(s => s.id === service.id);
            
            return (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${
                  isSelected ? styles.selected : ''
                } ${service.popular ? styles.popular : ''}`}
                onClick={() => handleServiceToggle(service.id)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className={styles.popularBadge}>
                    <span className={styles.popularIcon}>🔥</span>
                    Popular
                  </div>
                )}

                {/* Selection Indicator */}
                <div className={styles.selectionIndicator}>
                  {isSelected ? (
                    <span className={styles.selectedIcon}>✓</span>
                  ) : (
                    <span className={styles.unselectedIcon}>+</span>
                  )}
                </div>

                {/* Service Content */}
                <div className={styles.serviceContent}>
                  <h4 className={styles.serviceName}>{service.name}</h4>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  
                  <div className={styles.serviceDetails}>
                    <div className={styles.serviceDuration}>
                      <span className={styles.durationIcon}>⏱️</span>
                      {service.duration}
                    </div>
                    <div className={styles.servicePrice}>
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className={styles.cardGlow}></div>
              </div>
            );
          })}
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        {!canProceed && (
          <div className={styles.errorMessage}>
            {t.services.noSelection}
          </div>
        )}
        
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

      {/* Selected Services Summary */}
      {getSelectedCount() > 0 && (
        <div className={styles.selectedSummary}>
          <h4 className={styles.summaryTitle}>Servicios seleccionados:</h4>
          <div className={styles.selectedList}>
            {selectedServices.map((service) => (
              <div key={service.id} className={styles.selectedItem}>
                <span className={styles.selectedName}>{service.name}</span>
                <span className={styles.selectedPrice}>{service.price}</span>
                <button
                  className={styles.removeButton}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StepServices;
