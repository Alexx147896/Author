import React from 'react'
import styles from '../styles/Recent.module.css'
import ProductData from '../constants/ProductData';
import { Link } from 'react-router-dom';
import Button from '../components/utils/Button.jsx'


export default function Recent() {
  return (
    
    <>

    <div className={styles.wrapper}>

        <div className={styles.header}>
            <h2>Latest Releases</h2>
            <p>Including standalones and trilogies</p>
        </div>

        <div className={styles.content_container}>

        {ProductData.recent.map((book) => (
            <div className={styles.image_container} key={book.name}>
                <Link
                    to={`/books/${book.name}`}
                    onClick={() => {
                        window.scroll({top: 0, left: 0, behavior: "smooth"});
                    }}
                >
                    <img className={styles.image} src={`images/covers/${book.image}`} alt={book.name} />
                </Link>
            </div>
            
        ))}

        </div>

        <Button />


    </div>
    </>
  )
}

