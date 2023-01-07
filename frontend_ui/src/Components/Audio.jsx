import React from "react";
import styles from "../Styles/Audio.module.css";
const Audio = () => {
  return (
    <div className={styles.container}>
      <h3>Audio</h3>
      <div className={styles.box}>
        <h3 className={styles.play}>2</h3>
        <div className={styles.playbtn}>PLAYING</div>
        <div className={styles.total}>
        <p>Total</p>
        <h3>5</h3>
        </div>
      </div>
    </div>
  );
};

export default Audio;
