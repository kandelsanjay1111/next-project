import '../styles/globals.css'
import {Navbar} from '../Components/Navbar'
import {Query, QueryClient, QueryClientProvider} from 'react-query'

function MyApp({ Component, pageProps }) {
  const queryClient=new QueryClient();
  return <QueryClientProvider client={queryClient}>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </QueryClientProvider>
}

export default MyApp
