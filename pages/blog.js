import React,{useEffect} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import {useQuery} from 'react-query'

// export const getServerSideProps=async ()=>{
// const res= await fetch('https://jsonplaceholder.typicode.com/posts/');
// const blog=await res.json();
// return {
//     props:{
//         blog:blog
//     }
// }
// }  

export default function blog() {
  const {isLoading,data,isError,error}=useQuery('blogs',()=>fetch('https://jsonplaceholder.typicode.com/posts/').then(res=>res.json()));
  // console.log(data);
  if(isLoading){
    return <div>Loading....</div>
  }
  if(isError){
    return <div>error in link...</div>
  }
  return (
    <>
    <main className={styles.main}>
        <div className={styles.blog_content}>
        {
            data.map((item,index)=>{
                return <div className='blogItem' key={index}>
                    <Link href="/blog/1"><h3 className={styles.blog_title}>{item.title}</h3></Link>
                    <p>{item.content}{item.body}</p></div>
            })
        }
        </div>
        
        
    </main>
        
    </>
    

  )
}
