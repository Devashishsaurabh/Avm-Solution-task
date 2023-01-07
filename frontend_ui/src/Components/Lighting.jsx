import React from 'react'
import styles from "../Styles/Lighting.module.css";
const Lighting = () => {
  return (
    <div className={styles.container}>
    <h3>Lighting</h3>
    <div className={styles.box}>
      <h3 className={styles.play}>32</h3>
      <div className={styles.playbtn}>ON</div>
      <div className={styles.total}>
      <p>Total</p>
      <h3>43</h3>
      </div>
    </div>
  </div>
  )
}

export default Lighting