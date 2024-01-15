import React from 'react'
import styles from '../styles/Banner.module.css'
import { Link } from 'react-router-dom'


export default function Banner() {
  return (
    <div className={styles.banner_container}>
        <Link to='https://www.amazon.com' target='__blank' rel='noopener'><img className={styles.image} src='/images/banner2-big.webp'></img></Link>
    </div>
  )
}
