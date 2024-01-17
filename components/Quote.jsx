import React, {Component} from 'react'
import styles from '../styles/Quote.module.css'
import Slider from 'react-slick'



export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 8000,
            slidesToShow: 1,
            slidesToScroll: 1
          };
    
    
          return (
            <div className={styles.container}>

              <Slider {...settings}>

                <div>
                  <h3 className={styles.text}>"Morgan Maxwell's storytelling weaves a tapestry so rich, it rivals the classics. Each page is a journey in itself."</h3>
                  <p className={styles.description}>Elizabeth Clarke, Author of "Whispers of the Past"</p>
                </div>

                <div>
                  <h3 className={styles.text}>"In the world of fantasy and intrigue, Maxwell has carved out a universe that feels as real as it is magical. <span className={styles.span}>We Will Meet on the Stars</span> is just the beginning."</h3>
                  <p className={styles.description}>Sci-Fi Chronicles</p>
                </div>

                <div>
                  <h3 className={styles.text}>"Maxwell proves once again that he is a master of suspense, blending the supernatural with a narrative potency that leaves readers breathless."</h3>
                  <p className={styles.description}>The New York Times</p>
                </div>

                <div>
                <h3 className={styles.text}>"Maxwell doesn't just write characters; he breathes life into them. <span className={styles.span}>The Dark Side of Winter</span> is a testament to his ability to explore the depths of the human condition."</h3>
                <p className={styles.description}>The Washington Post</p>
                </div>

              </Slider>
              
            </div>
          );
        }
  }