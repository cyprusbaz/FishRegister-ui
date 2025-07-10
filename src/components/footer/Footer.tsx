import styles from "./Footer.module.css";
import React from "react";
import logo from "../../assests/logo.png";
import instagram from "../../assests/instagram_log.svg";
import facebook from "../../assests/facebook_logo.svg";
import linkedIn from "../../assests/linkedin_logo.svg";
import tiktok from "../../assests/tiktok_logo.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <img src={logo} alt="logo photo" className={styles.logoSvg} />
            <p>Fish Register</p>
          </div>
          <div className={styles.links}>
            <h3>Links</h3>
            <p>FAQ</p>
            <p>Support</p>
            <p>Guides</p>
          </div>
          <div className={styles.links}>
            <h3>Company</h3>
            <p>About us</p>
            <p>Career</p>
            <p>Contact</p>
          </div>
          <div className={styles.socials}>
            <h3>Follow us on our socials</h3>
            <div className={styles.social_icons}>
              <img src={instagram} alt="instagram logo" />
              <img src={facebook} alt="facebook logo" />
              <img src={linkedIn} alt="linkedIn logo" />
              <img src={tiktok} alt="tiktok logo" />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.credentials}>
          <p>@ 2025 Bombiniai Bebrai. All rights reserved</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};
