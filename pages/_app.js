import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )}
