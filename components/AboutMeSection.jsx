import React from 'react'
import styles from '../styles/AboutMeSection.module.css'

export default function AboutMeSection() {
  return (
    <div className={styles.container}>

        <div className={styles.image_container}>
            <img src='/images/male-vertical.webp'></img>
        </div>

        <div className={styles.about_container}>

        <div className={styles.title_container}>
            <h1 className={styles.author_name}>Morgan Maxwell</h1>
            <h2 className={styles.subheader}>MASTER OF SUSPENSE</h2>
        </div>

        <div className={styles.text_content}>
            <p>Morgan was born in Noblesville, Indiana in 1977. His imagination traverses the realms of fantasy, thrillers, and science fiction. The diverse landscapes of Indiana, with its blend of urban and rural settings, provide a rich backdrop for his storytelling.
            From a young age, he was drawn to the fantastical worlds of magic and the suspenseful twists of thrillers. His science fiction writings are a tapestry of futuristic possibilities intertwined with the core of human emotions and experiences, reflecting a deep understanding of both technology and the human condition.
            When not weaving narratives, Morgan is often found exploring the hidden nooks of Indiana or nestled in a local café, dreaming up his next literary adventure. His work invites readers on a journey to unseen worlds, skillfully blending the extraordinary with the familiar, and always carrying a hint of Indiana's spirit in every story.</p>
        </div>

        </div>

        <div className={styles.image_container_bottom}>
            <img src='/images/male-vertical.webp'></img>
        </div>
        
    </div>
   
  )
}
