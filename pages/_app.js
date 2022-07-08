import '../styles/globals.css'
import {Navbar} from '../Components/Navbar'
import {Query, QueryClient, QueryClientProvider} from 'react-query'
import {AuthContextProvider} from '../Components/Context/AuthContext'

function MyApp({ Component, pageProps }) {
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
