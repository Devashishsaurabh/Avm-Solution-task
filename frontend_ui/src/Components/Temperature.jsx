import React from 'react'
import styles from "../Styles/Temperature.module.css"

const Temperature = () => {
  return (
    <div className={styles.container}>
        <h3>Temperature</h3> 
        <div className={styles.box}>
        <div className={styles.Circle}>
            <h2 className={styles.temp}>21<span className={styles.celcius}>°C</span></h2>
        </div> 
       <div className={styles.container2}>
        <div className={styles.box1}>
          <img src="https://raw.githubusercontent.com/AVM-Solutions/Frontend-Developer-Task/945a8977a84d47751f61189c9ad98f14f099090c/ui_design_resources/fire.svg" alt="fire.svg"/>
          <h2 className={styles.tempr}>26<span className={styles.cels}>°C</span></h2>
        </div>
        <div className={styles.part}></div>
        <div className={styles.box1}>
        <img src="https://raw.githubusercontent.com/AVM-Solutions/Frontend-Developer-Task/945a8977a84d47751f61189c9ad98f14f099090c/ui_design_resources/snowflake.svg" alt="snoeflake.svg"/>
          <h2 className={styles.tempr}>18<span className={styles.cels}>°C</span></h2>
        </div>
       </div>

        </div>
    </div>
  )
}

export default Temperature