import React from 'react'
import styles from '../../styles/Button.module.css'
import { Link } from 'react-router-dom'



export default function Button() {
  return (
    <>
        <div className={styles.button_container}>
            <Link 
            to='/books'
            onClick={() => {
                window.scroll({top: 0, left: 0, behavior: "smooth"});
            }}
            >
            <button className={styles.button}><p>All Books</p></button>
            </Link>

        </div>
    </>
  )
}
