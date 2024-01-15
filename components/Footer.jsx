import React from 'react'
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



export default function Footer() {
  return (
    <>
    
    <div className={styles.wrapper}>

      <div className={styles.index}>

        <Link 
          to='/'
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth"});
        }} 
          >
          <h3 className={styles.index_link}>HOME</h3>
        </Link>

        <Link 
          to='/books'
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth"});
        }} 
          >
          <h3 className={styles.index_link}>BOOKS</h3>
        </Link>

        <Link 
          to='/media' 
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth"});
        }}
          >
          <h3 className={styles.index_link}>MEDIA</h3>
        </Link>

        <Link 
          to='/about-me' 
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth"});
        }}
          >
          <h3 className={styles.index_link}>ABOUT ME</h3>
        </Link>

        <Link 
          to='/events' 
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth"});
        }}
          >
          <h3 className={styles.index_link}>EVENTS</h3>
        </Link>

        <Link 
          to='/contact' 
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth"});
        }}
          >
          <h3 className={styles.index_link}>CONTACT</h3>
        </Link>

      </div>


  </div>


  <div className={styles.socials}>

    <Link 
      to='https://www.facebook.com' 
      className={styles.socials_link}
      target='__blank' 
      rel='noopener'
      >
      <FacebookOutlinedIcon className={styles.icon} fontSize='large' />
    </Link>

    <Link 
      to='https://www.x.com' 
      className={styles.socials_link}
      target='__blank' 
      rel='noopener'
      >
        <XIcon className={styles.icon} fontSize='large' />
        </Link>

        <Link 
      to='https://www.instagram.com' 
      className={styles.socials_link}
      target='__blank' 
      rel='noopener'
      >
        <InstagramIcon className={styles.icon} fontSize='large' />
        </Link>

        <Link 
      to='https://www.youtube.com' 
      className={styles.socials_link}
      target='__blank' 
      rel='noopener'
      >
        <YouTubeIcon className={styles.icon} fontSize='large' />
        </Link>

  </div>


  <div className={styles.promotion}>

    <div className={styles.morgan_promo}>
      <p>&copy; {new Date().getFullYear()} Morgan Maxwell - All Rights Reserved.</p>
    </div>

    <div className={styles.separator_container}>
      <p className={styles.separator}></p>
    </div>

    <div className={styles.my_promo}>
      <p>Website created by <Link to='https:/www.alexhernan.com' target='__blank'><span>Alex Hernán</span></Link></p>
    </div>

  </div>


    </>
  )
}
