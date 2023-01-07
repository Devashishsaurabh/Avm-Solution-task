import React from 'react'
import styles from "./Display.module.css"
const Display = () => {
  return (
    <div className={styles.container}>
    <h3>Displays</h3>
    <div className={styles.box}>
      <h3 className={styles.play}>10<span className={styles.part}>/16</span></h3>
      <div className={styles.total}>
      <p>On Time</p>
      <h3>00:00</h3>
      </div>
    </div>
  </div>
  )
}

export default Display