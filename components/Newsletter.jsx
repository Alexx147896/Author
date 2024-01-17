import { useState } from 'react';
import styles from '../styles/Newsletter.module.css'



export default function () {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }
      // Reset form fields

      setName('');
      setEmail('');

      // change state to true

    setSubmitted(true);
  };
  
  
  return (
    <>
    
    <div className={styles.wrapper}>
        
        <div className={styles.title}>
            <h3 className={styles.text}>Get all the latest Morgan Maxwell news and info sent to your inbox</h3>
        </div>

        <form className={styles.container} onSubmit={handleSubmit}>
            <h3 className={styles.signup}>Newsletter Signup</h3>
            <input type="text" placeholder="name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="email address" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button 
            className={styles.button}
            type='submit'
            >{submitted ? 'You subscribed succesfully!' : 'Subscribe'}</button>
        </form>

    </div>

    </>
  )
}
