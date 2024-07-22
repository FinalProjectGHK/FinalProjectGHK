import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <button className={styles.backToTop} onClick={scrollToTop}>
        Back to top ↑
      </button>
      <div className={styles.links}>
        <a href="/privacy">Privacy & Terms of Use</a>
        <a href="/location">Location</a>
        <a href="/about">About Us</a>
        <a href="/faqs">FAQs</a>
      </div>
      <div className={styles.socialIcons}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className={styles.copyright}>
        &copy; {currentYear} Our Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
