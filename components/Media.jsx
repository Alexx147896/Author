
import styles from '../styles/Media.module.css'
import { Link } from 'react-router-dom'



function Media() {
  return (
    
<>


    <div className={styles.wrapper}>

        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.image_container}>
                    <Link to='/events'><img src='/images/announcement.jpg' className={styles.img}></img></Link>
                </div>

                <div className={styles.content_container}>
                    <p className={styles.date}>December 11, 2023</p>
                    <Link to='/events'><h2 className={styles.title}>2024 tour dates announced</h2></Link>
                    <p className={styles.text}>Morgan Maxwell will embark on a tour supporting the release of The Haunted House on May 14th 2024. Tour dates include UK, Ireland and US.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.image_container}>
                    <Link to='https://www.deadline.com/v/box-office/' target='__blank'><img src='/images/covers/alone.jpg' className={styles.img}></img></Link>
                </div>

                <div className={styles.content_container}>
                    <p className={styles.date}>December 3, 2023</p>
                    <Link to='https://www.deadline.com/v/box-office/' target='__blank'><h2 className={styles.title}>Netflix acquires the adaptation rights to Alone</h2></Link>
                    <p className={styles.text}>Netflix has won the rights to author Morgan Maxwell's latest thriller Alone to develop as a series, with Maxwell attached to write the adaptation and executive produce.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.image_container}>
                    <Link to='https://www.nytimes.com/books/best-sellers/2023/10/15/' target='__blank'><img src='/images/covers/destiny.jpg' className={styles.img}></img></Link>
                </div>

                <div className={styles.content_container}>
                    <p className={styles.date}>November 17, 2023</p>
                    <Link to='https://www.nytimes.com/books/best-sellers/2023/10/15/' target='__blank'><h2 className={styles.title}>Destiny hits #1 on the New York Times Bestseller List</h2></Link>
                    <p className={styles.text}>The New York Times Bestsellers List published on November 6th reveals Destiny has taken the #1 spot in the fiction category.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.image_container}>
                    <Link to='https://www.clarkesworldmagazine.com/' target='__blank'><img src='/images/covers/cybernetic-stargazer.jpg' className={styles.img}></img></Link>
                </div>

                <div className={styles.content_container}>
                    <p className={styles.date}>October 28, 2023</p>
                    <Link to='https://www.clarkesworldmagazine.com/' target='__blank'><h2 className={styles.title}>Cybernetic Stargazer voted as the best science fiction novel of the decade</h2></Link>
                    <p className={styles.text}>Clarkesworld Magazine readers have voted Cybernetic Stargazer, published in 2017, as the best science fiction novel of the last decade.</p>
                </div>
            </div>

        </div>

    </div>

    </>
  )
}

export default Media