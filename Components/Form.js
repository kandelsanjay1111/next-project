import React,{useState} from 'react'
import {useFormik} from 'formik'
import styles from '../styles/contact.module.css'
import * as Yup from 'yup';

const validationSchema=Yup.object({
  title:Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

const Form = () => {

    const formik=useFormik({
      initialValues:{
        title:'',
        content:''
      },
      onSubmit:async(values,{resetForm})=>{
        const res=await fetch('http://localhost:3000/api/blog',{
          method:"post",
          body:JSON.stringify(values)
        });
        resetForm({values:''});
        window.location.reload();
        // console.log(res.json());
      },
      validationSchema:validationSchema
    });
  return (
    <div className={styles.main}>
      <form onSubmit={formik.handleSubmit} method="post">

        <label className={styles.label} htmlFor="title">Title</label>
        <input className={styles.form_field} type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title}/>
        {formik.errors.title && (
        <div className={styles.text_danger}>{formik.errors.title}</div>
        )}
        <label className={styles.label} htmlFor="content">Content</label>
        <input className={styles.form_field} type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content}/>
        {formik.errors.content && (
        <div className={styles.text_danger}>{formik.errors.content}</div>
        )}
        <button type="submit">Add Blog</button>

      </form>
    </div>
  )
}
export default Form;

