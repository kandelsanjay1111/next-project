import React from 'react'
import useSwr from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json());
import styles from '../styles/Blog.module.css'
import styles1 from '../styles/contact.module.css'
import * as Yup from 'yup';
import Link from 'next/link';
import {useQuery,useMutation,useQueryClient} from 'react-query';
import {useFormik} from 'formik'

const fetchData=async()=>{
  const res=await fetch('http://localhost:3000/api/about');
  return await res.json();
}

const uploadData=async(values)=>{
  console.log(values);
  const options={
    method:'POST',
    body:JSON.stringify(values)
  }
  const res=await fetch('http://localhost:3000/api/hello',options);
  return res.json();
}

const validationSchema=Yup.object({
  title:Yup.string().required('Name field is required'),
  content: Yup.string().required('Channel is required')
});

// const handleSubmit=async()=>{
//   const res=await fetch('http://localhost:3000/api/hello');
//   return res.json();
// }


export default function about(props) {

  const queryClient=useQueryClient();

  const {data,isError,isLoading,refetch}=useQuery('posts',fetchData);

  const {mutate}=useMutation(uploadData,{
    onSuccess:()=>{
      // queryClient.inValidateQueries('posts')
      refetch();
    },
    onError:(err)=>{
        console.log('hello error occured')
    }
  });

  const formik=useFormik({
    initialValues:{
      title:"test",
      content:"content",
    },
    onSubmit:async(values)=>{
      // console.log(values);
      mutate(values);
    },
    validationSchema:validationSchema
  });
  
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error in data fetching</div>
  return (
    <main className={styles.main}>
        <div className={styles.blog_content}>
            <h3 className={styles.blog_title}>{data.title}</h3>
            <p>{data.content}</p>
        </div>   
        <form onSubmit={formik.handleSubmit} method="post">

      <label className={styles1.label} htmlFor="first">Title</label>
      <input className={styles1.form_field} type="text" id="name" name="title" onChange={formik.handleChange} value={formik.values.title}/>

      <label className={styles1.label} htmlFor="content">Content</label>
      <input  className={styles1.form_field} type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content}/>

      <button type="submit">Update About</button>

    </form> 
    </main>
  )
}
