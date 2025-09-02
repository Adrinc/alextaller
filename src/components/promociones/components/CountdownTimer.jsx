// CountdownTimer.jsx - Timer épico neumórfico
import React, { useState, useEffect } from 'react';
import styles from '../css/CountdownTimer.module.css';

const CountdownTimer = ({ targetDate, labels, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsActive(false);
        if (onComplete) onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (!isActive) {
    return (
      <div className={styles.expired}>
        <span className={styles.expiredText}>¡Promoción Expirada!</span>
      </div>
    );
  }

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownGrid}>
        {timeLeft.days > 0 && (
          <div className={styles.timeUnit}>
            <div className={styles.timeNumber}>{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className={styles.timeLabel}>{labels.days}</div>
          </div>
        )}
        
        <div className={styles.timeUnit}>
          <div className={styles.timeNumber}>{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className={styles.timeLabel}>{labels.hours}</div>
        </div>
        
        <div className={styles.separator}>:</div>
        
        <div className={styles.timeUnit}>
          <div className={styles.timeNumber}>{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className={styles.timeLabel}>{labels.minutes}</div>
        </div>
        
        <div className={styles.separator}>:</div>
        
        <div className={styles.timeUnit}>
          <div className={styles.timeNumber}>{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className={styles.timeLabel}>{labels.seconds}</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
