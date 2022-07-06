import React,{useState} from 'react'
import {useFormik} from 'formik'
import styles from '../styles/contact.module.css'
import * as Yup from 'yup';

const validationSchema=Yup.object({
  title:Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

const Form = ({editing,blog,refetch}) => {  
  let url="";
  let initialData={};
    if(editing)
    {
      url="http://localhost:3000/api/"+blog.id;
      initialData=blog;
    }
    else{
      url="http://localhost:3000/api/blog";
      initialData={
        title:'',
        content:''
      }
    }

    const formik=useFormik({
      initialValues:initialData,
      enableReinitialize:true,
      onSubmit:async(values,{resetForm})=>{
        console.log(values);
        const res=await fetch(url,{
          method:"post",
          body:JSON.stringify(values)
        });
        console.log(res.json());
        resetForm({values:''});
        refetch();
        window.location.reload();
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
        {/* <input className={styles.form_field} type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content}/> */}
        <textarea className={`${styles["form_field"]} ${styles["content"]}`} type="text" id="content" name="content" onChange={formik.handleChange}>{formik.values.content}</textarea>
        {formik.errors.content && (
        <div className={styles.text_danger}>{formik.errors.content}</div>
        )}
        <button type="submit">{editing ?"Update" :"Add Blog"}</button>

      </form>
    </div>
  )
}
export default Form;

