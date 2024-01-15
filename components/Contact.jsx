import React from 'react'
import styles from '../styles/Contact.module.css'



function Contact() {
  return (
    <>
    
    <div className={styles.wrapper}>
        
        <div className={styles.title}>
            <h3 className={styles.text}>Please fill out this form if you have any inquiries</h3>
        </div>

        <div className={styles.container}>
            <h3 className={styles.signup}>Contact Form</h3>
            <input type="text" placeholder="name" className={styles.input}/>
            <input type="text" placeholder="email address" className={styles.input}/>
            <textarea type="text" placeholder="message" className={styles.input_message}/>
            <button className={styles.button}>SUBMIT</button>
        </div>

    </div>

    </>
  )
}

export default Contact