import React from 'react'
import styles from '../styles/AboutMe.module.css'

function AboutMe() {
  return (
    <>
    
        <div className={styles.wrapper}>

        <div className={styles.container}>

            <div className={styles.image_container}>
                <img src='/images/male-vertical.webp'></img>
            </div>

            <div className={styles.about_container}>

            <div className={styles.title_container}>
                <h1 className={styles.author_name}>About Morgan</h1>
            </div>

            <div className={styles.text_content}>
                <p>Morgan Maxwell (Noblesville, Indiana, 1977). Son of Charles and Marie, from a younge age he was interested in fantasy, thrillers, and science fiction. He graduated in 1999 at Indiana University, where he majored in English Literature. He returned later in 2003 to take Creative Writing classes.</p>
                <br></br>
                <p>His journey into the world of writing began with his debut novel, Power, a thriller released in 2004 that drew inspiration from authors such as Stephen King and Dean Koontz. This novel not only won acclaim for its vivid world-building but also established him as a fresh voice in the genre. Following this success, he ventured into the realms of fantasy and science fiction, where his knack for suspenseful storytelling came to the forefront.</p>
                <br></br>
                <p>In the sphere of science fiction, Morgan’s works often explores the intersection of technology and humanity. His most notable sci-fi series, The Secrets of Time, praised for its imaginative exploration of future societies, reflects a profound understanding of both the potential and pitfalls of technological advancements.</p>
                <br></br>
                <p>Beyond his novels, Morgan is a regular contributor to various literary magazines and online platforms, where his short stories and essays on the craft of writing have gained a dedicated following. He has also been a guest speaker at several writing conferences, sharing their insights and experiences with aspiring writers.</p>
                <br></br>
                <p>Morgan still lives in Indiana, where he married Catherine in 2008 and has 3 kids: Eva, Eric and Nicole.</p>
                <br></br>
            </div>

            </div>

            <div className={styles.image_container_bottom}>
                <img src='/images/male-vertical.webp'></img>
            </div>

        </div>
        </div>
    
    </>
  )
}

export default AboutMe