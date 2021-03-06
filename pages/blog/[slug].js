import React from 'react';
import {useRouter} from 'next/router';
import styles from '../../styles/BlogPost.module.css';

export const getServerSideProps=async (context)=>{
  const {slug}=context.params;
  const res= await fetch(`http://localhost:3000/api/${slug}`);
  const blog=await res.json();
  return {
      props:{
          blog:blog
      }
  }
  }  

export default function slug({blog}) {
  
    function createMarkup(content){
      return {__html:content}
    }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr></hr>
        <div dangerouslySetInnerHTML={createMarkup(blog.content)}>
        </div>
      </main>
      </div>
  )
}
