import React from 'react'
import useSwr from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json());
import styles from '../styles/Blog.module.css'
import Link from 'next/link';


export default function about() {
  const { data, error } = useSwr('http://localhost:3000/api/blog', fetcher)
  if(error) return <div>Error in fetching data</div>
  if(!data) return <div>Loading...</div>
  return (
    <main className={styles.main}>
        {
            data.map((item,index)=>{
                return <div className='blogItem' key={index}>
                    <Link href="/blog/1"><h3 className={styles.blog_title}>{item.title}</h3></Link>
                    <p>{item.content}</p></div>
            })
        }
        
        
    </main>
  )
}
