import React, { useState } from 'react';
import styles from '../styles/Books.module.css';
import ProductData from '../constants/ProductData';
import { Link } from 'react-router-dom';

function Books() {
  const [selectedCategory, setSelectedCategory] = useState('allBooks');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getBooksForCategory = () => {
    return ProductData[selectedCategory] || [];
  };

    // Function to convert category key to a display name
    const getCategoryName = (key) => {
        const names = {
          allBooks: 'All Books',
          standalones: 'Standalones',
          secretsOfTime: 'Secrets of Time',
          mysticFire: 'Mystic Fire',
          valhalla: 'Valhalla',
          finalGirl: 'Final Girl',
          silentStranger: 'Silent Stranger',
        };
        return names[key] || 'Category'; // Default to 'Category' if key not found
      };

  return (
    <>
      <div className={styles.wrapper}>

          <div className={styles.title_container}>
            <div className={styles.header_text}>
                <h2 className={styles.category_header}>{getCategoryName(selectedCategory)}</h2>
                <p className={styles.total_books_header}>Showing a total of {ProductData[selectedCategory].length} results</p>
            </div>
          </div>

        <div className={styles.content_container}>

            <div className={styles.selector_container}>
                <p className={styles.category_title}>Category</p>
                <p 
                    className={styles.individual_selector} 
                    onClick={() => 
                    {handleCategoryChange('allBooks');
                    window.scroll({ top: 0, left: 0, behavior: "smooth"});
                    }}>
                All Books</p>
                <p 
                    className={styles.individual_selector} 
                    onClick={() => 
                    {handleCategoryChange('standalones'); 
                    window.scroll({ top: 0, left: 0, behavior: "smooth"});
                    }}>
                Standalones</p>
                <p 
                    className={styles.individual_selector}
                    onClick={() => 
                    {handleCategoryChange('secretsOfTime');
                    window.scroll({ top: 0, left: 0, behavior: "smooth"});
                    }}>
                Secrets of Time</p>
                <p 
                    className={styles.individual_selector}
                    onClick={() => 
                    {handleCategoryChange('mysticFire'); 
                    window.scroll({ top: 0, left: 0, behavior: "smooth"});
                    }}>
                Mystic Fire</p>
                <p 
                    className={styles.individual_selector} 
                    onClick={() => {handleCategoryChange('valhalla');
                    window.scroll({ top: 0, left: 0, behavior: "smooth"});
                    }}>
                Valhalla</p>
                <p 
                    className={styles.individual_selector}
                    onClick={() => {handleCategoryChange('finalGirl');
                    window.scroll({ top: 0, left: 0, behavior: "smooth"});
                 }}>
                Final Girl</p>
                <p 
                    className={styles.individual_selector} 
                    onClick={() => {handleCategoryChange('silentStranger');
                    window.scroll({ top: 0, left: 0, behavior: "smooth"});
                    }}>
                Silent Stranger</p>
            </div>

            <div className={styles.header_text_smallScreens}>
                <h2 className={styles.category_header}>{getCategoryName(selectedCategory)}</h2>
                <p className={styles.total_books_header}>Showing a total of {ProductData[selectedCategory].length} results</p>
            </div>

        <div className={styles.books_container}>
          {getBooksForCategory().map((book) => (
            <div className={styles.image_container} key={book.name}>
              <Link
                to={`/books/${encodeURIComponent(book.name)}`}
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <img className={styles.image} src={`images/covers/${book.image}`} alt={book.name} />
              </Link>
            </div>
          ))}
        </div>
        
        </div>
      </div>
    </>
  );
}

export default Books;
