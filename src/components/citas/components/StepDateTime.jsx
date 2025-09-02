// StepDateTime.jsx - Paso 2: Selección de fecha y hora
import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/StepDateTime.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

const StepDateTime = ({ selectedDateTime, onDateTimeChange, onNext, onBack, canProceed }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsCitas.en : translationsCitas.es;

  // Generate time slots
  useEffect(() => {
    const generateTimeSlots = () => {
      const slots = [];
      const morningSlots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
        '11:00', '11:30', '12:00', '12:30'
      ];
      const afternoonSlots = [
        '13:30', '14:00', '14:30', '15:00', '15:30', 
        '16:00', '16:30', '17:00', '17:30', '18:00'
      ];

      morningSlots.forEach(time => {
        slots.push({
          time,
          period: 'morning',
          available: Math.random() > 0.3 // 70% de disponibilidad
        });
      });

      afternoonSlots.forEach(time => {
        slots.push({
          time,
          period: 'afternoon',
          available: Math.random() > 0.2 // 80% de disponibilidad
        });
      });

      return slots;
    };

    setTimeSlots(generateTimeSlots());
  }, [selectedDate]);

  // Update parent component when date/time changes
  useEffect(() => {
    if (selectedDate && selectedTime) {
      const dateTime = {
        date: selectedDate,
        time: selectedTime,
        formatted: `${selectedDate.toLocaleDateString()} - ${selectedTime}`
      };
      onDateTimeChange(dateTime);
    }
  }, [selectedDate, selectedTime, onDateTimeChange]);

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateAvailable = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // No disponible si es domingo (día 0) o si es en el pasado
    return date.getDay() !== 0 && date >= today;
  };

  const isDateSelected = (day) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentMonth.getMonth() &&
           selectedDate.getFullYear() === currentMonth.getFullYear();
  };

  const handleDateSelect = (day) => {
    if (!isDateAvailable(day)) return;
    
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    const timeSlot = timeSlots.find(slot => slot.time === time);
    if (timeSlot && timeSlot.available) {
      setSelectedTime(time);
    }
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className={styles.emptyDay}></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const available = isDateAvailable(day);
      const selected = isDateSelected(day);
      
      days.push(
        <div
          key={day}
          className={`${styles.calendarDay} ${
            available ? styles.available : styles.unavailable
          } ${selected ? styles.selected : ''}`}
          onClick={() => handleDateSelect(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const renderTimeSlots = () => {
    if (!selectedDate) {
      return (
        <div className={styles.noDateSelected}>
          Selecciona una fecha para ver horarios disponibles
        </div>
      );
    }

    const morningSlots = timeSlots.filter(slot => slot.period === 'morning');
    const afternoonSlots = timeSlots.filter(slot => slot.period === 'afternoon');

    return (
      <div className={styles.timeSlotsContainer}>
        {/* Morning Slots */}
        <div className={styles.timeSection}>
          <h4 className={styles.timeSectionTitle}>
            <span className={styles.timeIcon}>🌅</span>
            {t.datetime.timeSlots.morning}
          </h4>
          <div className={styles.timeGrid}>
            {morningSlots.map((slot) => (
              <button
                key={slot.time}
                className={`${styles.timeSlot} ${
                  slot.available ? styles.available : styles.occupied
                } ${selectedTime === slot.time ? styles.selected : ''}`}
                onClick={() => handleTimeSelect(slot.time)}
                disabled={!slot.available}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        {/* Afternoon Slots */}
        <div className={styles.timeSection}>
          <h4 className={styles.timeSectionTitle}>
            <span className={styles.timeIcon}>🌇</span>
            {t.datetime.timeSlots.afternoon}
          </h4>
          <div className={styles.timeGrid}>
            {afternoonSlots.map((slot) => (
              <button
                key={slot.time}
                className={`${styles.timeSlot} ${
                  slot.available ? styles.available : styles.occupied
                } ${selectedTime === slot.time ? styles.selected : ''}`}
                onClick={() => handleTimeSelect(slot.time)}
                disabled={!slot.available}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.stepDateTime}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.stepTitle}>{t.datetime.title}</h3>
        <p className={styles.stepSubtitle}>{t.datetime.subtitle}</p>
      </div>

      <div className={styles.content}>
        {/* Calendar Section */}
        <div className={styles.calendarSection}>
          <div className={styles.calendarHeader}>
            <button 
              className={styles.navButton}
              onClick={() => navigateMonth(-1)}
            >
              ‹
            </button>
            <h3 className={styles.monthTitle}>
              {t.datetime.calendar.months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button 
              className={styles.navButton}
              onClick={() => navigateMonth(1)}
            >
              ›
            </button>
          </div>

          <div className={styles.calendarGrid}>
            {/* Days of week header */}
            {t.datetime.calendar.days.map((day) => (
              <div key={day} className={styles.dayHeader}>
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {renderCalendar()}
          </div>

          <div className={styles.calendarLegend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.available}`}></div>
              <span>{t.datetime.calendar.available}</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.selected}`}></div>
              <span>{t.datetime.calendar.selected}</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.unavailable}`}></div>
              <span>{t.datetime.calendar.unavailable}</span>
            </div>
          </div>
        </div>

        {/* Time Slots Section */}
        <div className={styles.timeSlotsSection}>
          <h3 className={styles.sectionTitle}>Horarios disponibles</h3>
          {renderTimeSlots()}
        </div>
      </div>

      {/* Selected Summary */}
      {selectedDate && selectedTime && (
        <div className={styles.selectedSummary}>
          <div className={styles.summaryIcon}>📅</div>
          <div className={styles.summaryText}>
            <div className={styles.summaryDate}>
              {selectedDate.toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className={styles.summaryTime}>
              {selectedTime}
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default StepDateTime;
