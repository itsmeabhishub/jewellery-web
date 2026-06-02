import React from 'react';
import { Link } from 'react-router-dom';
import { CONTENT } from '../../../constants/content';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Columns */}
        <div className={styles.columns}>
          {/* About */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>About</h4>
            <p className={styles.columnText}>{CONTENT.FOOTER_ABOUT_TEXT}</p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{CONTENT.FOOTER_QUICK_LINKS}</h4>
            <ul className={styles.links}>
              <li><Link to="/shop">Shop All</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{CONTENT.FOOTER_CUSTOMER_SERVICE}</h4>
            <ul className={styles.links}>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{CONTENT.FOOTER_LEGAL}</h4>
            <ul className={styles.links}>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>{CONTENT.FOOTER_COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default Footer;
