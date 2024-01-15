import React from 'react'
import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (

    <>

    <div className={styles.header_container}>
        <Link to="/">
            <img className={styles.logo} src='images/logo-small-nobg.png'></img>
        </Link>

    </div>


    
    </>

  )
}
