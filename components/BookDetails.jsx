
import { useParams } from 'react-router'
import styles from '../styles/BookDetails.module.css'
import { Link } from 'react-router-dom';
import ProductData from '../constants/ProductData'



function BookDetails() {
  
    // Get the book name from the URL

    const { bookName } = useParams();
    const decodedBookName = decodeURIComponent(bookName);

 
    // Find the product based on the product name

    const currentBook = ProductData.allBooks.find(book => book.name === decodedBookName);

    // Return this statement if the product is not found

    if (!currentBook) {
        return <div className={styles.wrapper}>Book not found.</div>;
      }

    // Filter related books based on the type of the current book and exclude the current book

    const relatedBooks = ProductData.allBooks.filter(book => book.type === currentBook.type && book.name !== currentBook.name);

  
    return (
    
    <div className={styles.wrapper}>

        <div className={styles.book_container}>

            <div className={styles.image_container}>
                <img 
                src={`/images/covers/${currentBook.image}`} 
                className={styles.img}
                alt={currentBook.name}></img>
            </div>


            <div className={styles.info}>
                <h1 className={styles.title}>{currentBook.name}</h1>
                <h2 className={styles.collection}>{currentBook.collection}</h2>
                <p className={styles.description}>{currentBook.description}</p>  
            </div>

        </div>


        <div className={styles.buy_wrapper}>

            <div className={styles.buy_header}>
                <h1>Buying Options</h1>
            </div>


            <div className={styles.buy_container}>

                <div className={styles.location}>
                    
                    <h2 className={styles.location_header}>US & CANADA</h2>

                    <div className={styles.links}>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Amazon.com</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Amazon.ca</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Apple</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Barns & Nobles</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Books-a-Million</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Walmart</p></Link>
                    </div>

                </div>

                <div className={styles.location}>
                    
                    <h2>UK</h2>

                    <div className={styles.links}>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Amazon.co.uk</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Blackwells</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Waterstones</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>Bookshop</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>WHSmith</p></Link>
                        <Link to='https://www.amazon.com' target='__blank'><p className={styles.btn}>IndieBound</p></Link>
                    </div>

                </div>

            </div>

        </div>



        <div className={styles.related_header}>
            <h1>Related Books</h1>
        </div>
    
        <div className={styles.related_books_wrapper}>
            
        {relatedBooks.map((book) => (
           
          <>
      
           <div className={styles.related_container} key={book.name}>

                <div className={styles.related_image_container}>
                    <Link 
                        to={`/books/${encodeURIComponent(book.name)}`}
                        onClick={() => {
                            window.scroll({ top: 0, left: 0, behavior: "smooth" });
                          }}
                    >
                        <img 
                        src={`/images/covers/${book.image}`} 
                        className={styles.related_img}
                        alt={book.name}></img>
                    </Link>
 
                </div>
            </div>
            </>
        ))}

        </div>
  








    </div>
  )
}

export default BookDetails