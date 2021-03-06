import { IconContext } from 'react-icons'
import { Header } from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import Modal from "react-modal";
import { Footer } from '../components/Footer';

Modal.setAppElement('#main');


function MyApp({ Component, pageProps }) {
  return (
    <>
      <IconContext.Provider value={{ color:"#1071FF", size:"1.5rem" }}>
      <Header />
      </IconContext.Provider>

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
