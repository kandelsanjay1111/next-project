import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { useAuth } from './Context/AuthContext';

const ProtectedRoute = ({children}) => {
    const router=useRouter();
    console.log(router);
    const {user}=useAuth();
    useEffect(()=>{
        if(!user){
            router.push('/login');
        }
    })
    
  return <>{user ? children : null}</>;
    // return <RouteComponent/>;
}

export default ProtectedRoute