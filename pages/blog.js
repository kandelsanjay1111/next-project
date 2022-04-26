import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

export default function blog() {
  return (
    <>
    <main className={styles.main}>
        <div className='blogItem'>
            <Link href="/blog/1"><h3 className={styles.blog_title}>Blog heading</h3></Link>
            <p>This is subheading of the heading</p>
        </div>
        <div className='blogItem'>
            <Link href="/blog/1"><h3 className={styles.blog_title}>Blog heading</h3></Link>
            <p>This is subheading of the heading</p>
        </div>
        <div className='blogItem'>
            <Link href="/blog/1"><h3 className={styles.blog_title}>Blog heading</h3></Link>
            <p>This is subheading of the heading</p>
        </div>
        <div className='blogItem'>
            <Link href="/blog/1"><h3 className={styles.blog_title}>Blog heading</h3></Link>
            <p>This is subheading of the heading</p>
        </div>
    </main>
        
    </>
    

  )
}
