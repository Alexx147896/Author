import React from 'react'
import styles from '../styles/SocialMedia.module.css'
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';




export default function SocialMedia() {
  return (
    <>
    
        <div className={styles.social_container}>


          <div className={styles.wrapper}>


          <div className={styles.header}>
              <h2>STAY CONNECTED</h2>
              <h3>FOLLOW MORGAN</h3>
          </div>


           <div className={styles.social}>

           <Link 
           to='https://www.facebook.com' 
           target='__blank' 
           rel='noopener'
           >
            <FacebookOutlinedIcon className={styles.icon} fontSize='large' />
            </Link>

            <Link 
           to='https://www.x.com' 
           target='__blank' 
           rel='noopener'
           >
            <XIcon className={styles.icon} fontSize='large' />
            </Link>

            <Link 
           to='https://www.instagram.com' 
           target='__blank' 
           rel='noopener'
           >
            <InstagramIcon className={styles.icon} fontSize='large' />
            </Link>

            <Link 
           to='https://www.youtube.com' 
           target='__blank' 
           rel='noopener'
           >
            <YouTubeIcon className={styles.icon} fontSize='large' />
            </Link>
            
           </div>
          </div>
        </div>

    </>
  )
}
