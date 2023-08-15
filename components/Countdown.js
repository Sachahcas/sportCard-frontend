import React, { useState, useEffect } from 'react';
import styles from '../styles/Countdown.module.css';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    let difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.countdownDiv}>
        {timeLeft.days ?
        <div className={styles.timerSubDiv}> 
            <p className={styles.timerP}>{timeLeft.days}</p>
            <p className={styles.timerP}>{timeLeft.days <= 1 ? "Jour" : "Jours"}</p>
        </div> 
        : null }
        {!timeLeft.days && !timeLeft.hours ?
        null : 
        <div className={styles.timerSubDiv}>
            <p className={styles.timerP}>{timeLeft.hours}</p>
            <p className={styles.timerP}>{timeLeft.hours <= 1 ? "Heure" : "Heures"}</p>
        </div>
        }
        {!timeLeft.days && !timeLeft.hours && !timeLeft.minutes ? 
        null :
        <div className={styles.timerSubDiv}>
            <p className={styles.timerP}>{timeLeft.minutes}</p>
            <p className={styles.timerP}>{timeLeft.minutes <= 1 ? "Minute" : "Minutes"}</p>
        </div>
        }
        {!timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds ?
        <h2>C'EST LA FIN</h2>
        :
        <div className={styles.timerSubDiv}>
            <p className={styles.timerP}>{timeLeft.seconds}</p>
            <p className={styles.timerP}>{timeLeft.seconds <= 1 ? "Seconde" : "Secondes"}</p>
        </div>
        }
    </div>
  );
}

export default Countdown;