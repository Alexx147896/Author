import React from 'react'
import styles from '../styles/Newsletter.module.css'



export default function () {
  return (
    <>
    
    <div className={styles.wrapper}>
        
        <div className={styles.title}>
            <h3 className={styles.text}>Get all the latest Morgan Maxwell news and info sent to your inbox</h3>
        </div>

        <div className={styles.container}>
            <h3 className={styles.signup}>Newsletter Signup</h3>
            <input type="text" placeholder="Name" className={styles.input}/>
            <input type="text" placeholder="email address" className={styles.input}/>
            <button className={styles.button}>SIGN UP</button>
        </div>

    </div>

    </>
  )
}
