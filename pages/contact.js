import React from 'react'
import styles from '../styles/contact.module.css'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {db,app} from './firebase';
import {collection,addDoc} from '@firebase/firestore';

const validationSchema=Yup.object({
  name:Yup.string().required('Name field is required'),
  email:Yup.string().email('Invalid email address').required('Email is required'),
  channel: Yup.string().required('Channel is required')
});
export default function contact() {

  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      channel:"",
      image:""
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values.image);
      // const collectionRef=collection(db,"contact");
      // addDoc(collectionRef,values);
      // resetForm({values:""});
    },
    validationSchema:validationSchema
  });
  return (
    <main className={styles.main}>
    <form onSubmit={formik.handleSubmit} method="post">

      <label className={styles.label} htmlFor="first">Name</label>
      <input className={styles.form_field} type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
      {formik.errors.name && (
      <div className={styles.text_danger}>{formik.errors.name}</div>
      )}

      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.form_field} type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email && (
      <div className={styles.text_danger}>{formik.errors.email}</div>
      )}

      <label className={styles.label} htmlFor="channel">Channel</label>
      <input  className={styles.form_field} type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
      {formik.errors.channel && (
      <div className={styles.text_danger}>{formik.errors.channel}</div>
      )}

      <label className={styles.label} htmlFor="image">Add Image</label>
      <input  className={styles.form_field} type="file" id="image" name="image" onChange={formik.handleChange}/>

      <button type="submit">Add Contact</button>

    </form>
    </main>
  )
}
