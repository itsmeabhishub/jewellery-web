import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ title, subtitle, gradient, backgroundImage }) => {
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <section
      className={styles.hero}
      style={style}
      data-hero-gradient={gradient ? 'true' : 'false'}
    >
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default Hero;
