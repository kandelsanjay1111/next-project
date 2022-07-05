import React,{useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import {useQuery} from 'react-query';
import {db,app} from './firebase';
import {doc,deleteDoc} from '@firebase/firestore';
import Form from '../Components/Form';

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
  const [add,setAdd]=useState(false);
  const [edit,setEdit]=useState(false);
  const [blog,setBlog]=useState({});

  if(isLoading){
    return <div>Loading....</div>
  }

  if(isError){
    return <div>error in link...</div>
  }

  if(add){
    return <Form editing={edit} blog={blog} refetch={refetch}/>
  }

  const handleDelete=(e,id)=>{

    const collectionRef = doc(db, 'blog', id);
    deleteDoc(collectionRef)
            .then(() => {
                refetch();
            });

    // console.log(collectionRef);
  };

  const handleEdit=(item)=>{
    setEdit(true);
    setAdd(true);  
    setBlog(item);
  }
  
  return (
    <>
    <main className={styles.main}>
      
      <button onClick={()=>setAdd(true)}>Add new</button>
        <div className={styles.blog_content}>
        {
            data.map((item,index)=>{
                return <div className='blogItem' key={index}>
                    <Link href={`blog/${item.id}`}><h3 className={styles.blog_title}>{item.title}</h3></Link>
                    <button onClick={()=>handleDelete(event,item.id)}>Delete</button>
                    <button onClick={()=>handleEdit(item)}>Edit</button>
                    <p>{item.content}</p></div>
            })
        }
        </div>
               
    </main>
        
    </>
    
  )
}
