import '../styles/globals.css'
import {Navbar} from '../Components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}

export default MyApp
