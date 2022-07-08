import React,{useEffect,useState,useContext,createContext} from 'react'
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { auth } from '../../pages/firebase';

const AuthContext=createContext({});

export const useAuth=()=>useContext(AuthContext);


export const AuthContextProvider = ({children}) => {
    
    const [user,setUser]=useState(null);

    const signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const logout=async()=>{
        setUser(null);
        await signOut(auth);
    }


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
    <AuthContext.Provider value={{user,signup,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

