import React from 'react'
import styles from '../styles/Events.module.css'
import { Link } from 'react-router-dom'


function Events() {
  return (
    <>
    
    <div>
        <div className={styles.wrapper}>

            <h1 className={styles.header}>Upcoming Events</h1>

            <div className={styles.container}>

                <p className={styles.text}>Supporting the release of <span>The Haunted House</span> on May 14th, 
                Morgan Maxwell will be doing a book signing at the following locations:</p>

                <div className={styles.flex}>

                    <ul className={styles.list_container}>

                        <h2 className={styles.location}>UK & Ireland</h2>
                        <Link
                        to='https://www.dauntbooks.co.uk/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>May 24th: Daunt Books - London</li>
                        </Link>

                        <Link
                        to='https://www.waterstones.com/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>May 26th: Waterstones - Birmingham</li> 
                        </Link>

                        <Link
                        to='https://https://www.toppingbooks.co.uk/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>May 28th: Topping Books - Edinburgh</li> 
                        </Link>

                        <Link
                        to='https://thefifearms.com/offers/braemarliteraryfestival2024/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>May 30th: Braemar Literary Festival - Braemar</li> 
                        </Link>

                        <Link
                        to='https://www.thesecretbookstore.ie/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>June 1st: The Secret Bookstore - Dublin</li> 
                        </Link>  
                    </ul>

                    <ul className={styles.list_container}>

                        <h2 className={styles.location}>USA - East Coast</h2>
                        <Link
                        to='https://www.dauntbooks.co.uk/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>June 19th: Roadrunner - Boston</li>
                        </Link>

                        <Link
                        to='https://www.waterstones.com/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>June 21th: The Postal - New York City</li> 
                        </Link>

                        <Link
                        to='https://https://www.toppingbooks.co.uk/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>June 23th: Tyrsus - Philadelphia</li> 
                        </Link>

                        <Link
                        to='https://thefifearms.com/offers/braemarliteraryfestival2024/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>June 25th: Tromlight - Atlanta</li> 
                        </Link>

                        <Link
                        to='https://www.thesecretbookstore.ie/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>June 28th: Indiana One - Indianapolis</li> 
                        </Link>  
                    </ul>

                    <ul className={styles.list_container}>

                        <h2 className={styles.location}>USA - West Coast</h2>
                        <Link
                        to='https://www.dauntbooks.co.uk/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>July 8th: The Inn - Seattle</li>
                        </Link>

                        <Link
                        to='https://www.waterstones.com/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>July 9th: The Masonic - San Francisco</li> 
                        </Link>

                        <Link
                        to='https://https://www.toppingbooks.co.uk/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>July 11th: Starbank - Los Angeles</li> 
                        </Link>

                        <Link
                        to='https://thefifearms.com/offers/braemarliteraryfestival2024/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>July 12th: The Marquee - Phoenix</li> 
                        </Link>

                        <Link
                        to='https://www.thesecretbookstore.ie/'
                        target='__blank'
                        className={styles.location}
                        >
                        <li>July 14th: Ogdeon - Denver</li> 
                        </Link>  
                    </ul>

         </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default Events