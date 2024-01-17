

import {Routes, Route} from 'react-router-dom'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import AboutMeSection from '../components/AboutMeSection.jsx'
import Recent from '../components/Recent.jsx'
import SocialMedia from '../components/SocialMedia.jsx'
import Quote from '../components/Quote.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Contact from '../components/Contact.jsx';
import Events from '../components/Events.jsx';
import Media from '../components/Media.jsx';
import Books from '../components/Books.jsx';
import BookDetails from '../components/BookDetails.jsx';






function App() {



  return (
    <>
      <Header />
      <Navbar />

      <Routes>

        <Route path="/" element={
        <>
          <Banner />
          <AboutMeSection />
          <Recent />
          <SocialMedia />
          <Quote />
          <Newsletter />
          <Footer />
        </>
        }/>

        <Route path="/books" element={
          <>
            <Books />
            <Footer />
          </>
          }/>

        <Route path="/media" element={
          <>
            <Media />
            <Footer />
          </>
          }/>

        <Route path="/about-me" element={
          <>
            <AboutMe />
            <Footer />
          </>
          }/>

        <Route path="/events" element={
          <>
            <Events />
            <Footer />
          </>
          }/>

        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
          }/>

        <Route path="/books/:bookName" element={
          <>
            <BookDetails />
            <Footer />
          </>
        }/>

      </Routes>
    </>
  )
}

export default App
