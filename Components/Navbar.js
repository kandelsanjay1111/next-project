import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useAuth } from './Context/AuthContext';
import {useRouter} from 'next/router';

export const Navbar = () => {
  const {user,logout}=useAuth();
  // console.log(user);
  const router=useRouter();
  return (
    <div>
        <nav className={styles.mainnav}>
            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="about"><li>About</li></Link>
                <Link href="/blog"><li>Blog</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
                {
                  user && <button href="/logout" onClick={(event)=>{
                    event.preventDefault();
                    alert('hello');
                    logout();
                    // router.push('/');
                  }}><li>Logout</li>
                  </button>
                }
            </ul>
      </nav>
    </div>
  )
}
