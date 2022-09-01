import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { useAuth } from './Context/AuthContext';

const ProtectedRoute = ({children}) => {
    const router=useRouter();
    const {user}=useAuth();
    useEffect(()=>{
        if(!user){
            router.push('/login');
        }
    })
    
  return <>{user ? children : null}</>;
}

export default ProtectedRoute