import React,{useEffect,useState,useContext,createContext} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../pages/firebase';

const AuthContext=createContext({});

export const useAuth=()=>useContext(AuthContext);


export const AuthContextProvider = ({children}) => {
    
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser({
                    uid:user.uid,
                    email:user.email,
                });
            }
            else{
                setUser(null);
            }

            return ()=>unsubscribe()
        })
    },[])
  return (
    <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
  )
}

