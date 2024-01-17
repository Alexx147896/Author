import { useState } from 'react';
import styles from '../styles/Contact.module.css'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
    // Here you can add your submit logic (e.g., sending data to a server)
    setSubmitted(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3 className={styles.text}>Please fill out this form if you have any inquiries</h3>
        </div>

        <form className={styles.container} onSubmit={handleSubmit}>
          <h3 className={styles.signup}>Contact Form</h3>
          <input 
            type="text" 
            placeholder="name" 
            className={styles.input} 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="email address" 
            className={styles.input} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            placeholder="message" 
            className={styles.input_message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="submit"
            className={styles.button}
          >
            {submitted ? 'Your message has been sent!' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
