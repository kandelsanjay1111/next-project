import React,{useEffect} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import {useQuery} from 'react-query';
import {db,app} from './firebase';
import {doc,deleteDoc} from '@firebase/firestore';

// export const getServerSideProps=async ()=>{
// const res= await fetch('https://jsonplaceholder.typicode.com/posts/');
// const blog=await res.json();
// return {
//     props:{
//         blog:blog
//     }
// }
// }  

const fetchBlog=async()=>{
  const response=await fetch('http://localhost:3000/api/blog');
  return await response.json();
};

export default function blog() {
  const {isLoading,data,isError,refetch}=useQuery('blogs',fetchBlog);

  if(isLoading){
    return <div>Loading....</div>
  }

  if(isError){
    return <div>error in link...</div>
  }

  const handleDelete=(e,id)=>{
    // alert(id);
    const collectionRef = doc(db, 'blog', id);
    deleteDoc(collectionRef)
            .then(() => {
                refetch();
            });

    console.log(collectionRef);
  };
  
  return (
    <>
    <main className={styles.main}>
      <button>Add new</button>
        <div className={styles.blog_content}>
        {
            data.map((item,index)=>{
                return <div className='blogItem' key={index}>
                    <Link href={`blog/${item.id}`}><h3 className={styles.blog_title}>{item.title}</h3></Link>
                    <button onClick={()=>handleDelete(event,item.id)}>Delete</button>
                    <p>{item.content}</p></div>
            })
        }
        </div>
               
    </main>
        
    </>
    
  )
}
