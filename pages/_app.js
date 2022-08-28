import '../styles/globals.css'
import {Navbar} from '../Components/Navbar'
import {Query, QueryClient, QueryClientProvider} from 'react-query'
import {AuthContextProvider} from '../Components/Context/AuthContext'
import ProtectedRoute from '../Components/ProtectedRoute'
import { useRouter } from 'next/router'
import 'antd/dist/antd.css';

const noAuthPath=['/login','/'];

function MyApp({ Component, pageProps }) {
  const router=useRouter();
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar></Navbar>
        {
        (noAuthPath.includes(router.pathname))?
        <Component {...pageProps} />:
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
        }
           
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
