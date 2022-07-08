import React,{useState} from 'react'
import styles from '../styles/contact.module.css'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {db,app,storage} from './firebase';
import {collection,addDoc} from '@firebase/firestore';
import {ref, uploadBytes } from "firebase/storage";
import Preview from '../Components/Preview';

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
      image:null,
      position:""
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      const image_name=values.image.name;
      const storageRef=ref(storage,'image/'+image_name);
      uploadBytes(storageRef, values.image).then((snapshot) => {
        // console.log(snapshot);
        const collectionRef=collection(db,"contact");
        addDoc(collectionRef,{...values,image:image_name});
        resetForm({values:""});
      });
      
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
      <input  className={styles.form_field} type="file" id="image" name="image" onChange={(event)=>{
        formik.setFieldValue("image",event.target.files[0])}
        }/>
      {
        formik.values.image && <Preview image={formik.values.image}></Preview>
      }
        

      <label htmlFor="position">Position</label>
      <select className={styles.form_field} name="position" onChange={(event)=>{formik.setFieldValue('position',event.target.value)}}>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
        <option value="four">Four</option>
      </select>
      
      <label htmlFor="position">Position</label>

      <button type="submit">Add Contact</button>

    </form>
    </main>
  )
}
