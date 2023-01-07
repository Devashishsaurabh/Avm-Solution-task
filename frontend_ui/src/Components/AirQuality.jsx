import React from 'react'
import styles from "./AirQuality.module.css"
const AirQuality = () => {
  return (
    <div className={styles.container}>
        <h3>Air Quality</h3> 
        <div className={styles.box}>
        <div className={styles.Circle}>
            <h2 className={styles.qualityrate}>72</h2>
        </div> 
       <div className={styles.container2}>
        <div className={styles.box1}>
          <i style={{color:"#6dd0a5"}}class="fa-solid fa-arrow-up fa-2x"></i>
          <h2 className={styles.rate}>93</h2>
        </div>
        <div className={styles.part}></div>
        <div className={styles.box1}>
        <i class="fa-solid fa-arrow-down fa-2x" style={{color:"#fcbd40"}}></i>
          <h2 className={styles.rate}>61</h2>
        </div>
       </div>

        </div>
    </div>
  )
}

export default AirQuality