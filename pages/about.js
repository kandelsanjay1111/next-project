import React from 'react'
import useSwr from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json());
import styles from '../styles/Blog.module.css'
import styles1 from '../styles/contact.module.css'
import * as Yup from 'yup';
import Link from 'next/link';
import {useQuery,useMutation} from 'react-query';
import {useFormik} from 'formik'

const fetchData=async()=>{
  const res=await fetch('http://localhost:3000/api/about');
  return await res.json();
}

const validationSchema=Yup.object({
  name:Yup.string().required('Name field is required'),
  content: Yup.string().required('Channel is required')
});



export default function about() {
  const formik=useFormik({
    initialValues:{
      name:"test",
      email:"",
      channel:""
    },
    onSubmit:(values)=>console.log(formik.values),
    validationSchema:validationSchema
  });
  // const { data, error } = useSwr('http://localhost:3000/api/blog', fetcher)
  const {data,isError,isLoading}=useQuery('posts',fetchData);
  // if(error) return <div>Error in fetching data</div>
  // if(!data) return <div>Loading...</div>
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error in data fetching</div>
  return (
    <main className={styles.main}>
        <div className={styles.blog_content}>
            <h3 className={styles.blog_title}>{data.title}</h3>
            <p>{data.content}</p>
        </div>   
        <form onSubmit={formik.handleSubmit} action="http://localhost:3000/api/getcontact" method="post">

      <label className={styles1.label} htmlFor="first">Title</label>
      <input className={styles1.form_field} type="text" id="name" name="title" onChange={formik.handleChange} value={formik.values.name}/>

      <label className={styles1.label} htmlFor="content">Content</label>
      <input  className={styles1.form_field} type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.channel}/>

      <button type="submit">Update About</button>

    </form> 
    </main>
  )
}
