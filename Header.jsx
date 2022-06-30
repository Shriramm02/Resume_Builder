import React from "react";

import resumeSvg from "../assets/resumeSvg.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
            Create a <span>Professional</span> resume just in a few minutes and download pdf
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;