import React,{useEffect} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

export const getServerSideProps=async ()=>{
const res= await fetch('http://localhost:3000/api/blog');
const blog=await res.json();
return {
    props:{
        blog:blog
    }
}
}  

export default function blog({blog}) {
  return (
    <>
    <main className={styles.main}>
        {
            blog.map((item,index)=>{
                return <div className='blogItem' key={index}>
                    <Link href="/blog/1"><h3 className={styles.blog_title}>{item.title}</h3></Link>
                    <p>{item.content}</p></div>
            })
        }
        
        
    </main>
        
    </>
    

  )
}
