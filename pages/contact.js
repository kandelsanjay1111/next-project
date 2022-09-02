import React,{useState} from 'react'
import styles from '../styles/contact.module.css'
import {useFormik} from 'formik'
import {db,app,storage} from './firebase';
import {collection,addDoc} from '@firebase/firestore';
import {ref, uploadBytes } from "firebase/storage";
import Preview from '../Components/Preview';
import { contactValidationSchema } from '../Components/formik/conact';
import Error from '../Components/error';
import {Button,Radio,Select} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import MultiSelect from '../Components/atoms/select';

const { Option } = Select;

export default function contact() {

  const [loading,setLoading]=useState(false);

  const handleSelectChange=(value)=>{formik.setFieldValue('profession',value)}

  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      gender:"",
      channel:"",
      image:null,
      position:"",
      profession:[],
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      try{
        setLoading(true);
        const image_name=values.image.name;
        const storageRef=ref(storage,'image/'+image_name);
        uploadBytes(storageRef, values.image).then((snapshot) => {
          const collectionRef=collection(db,"contact");
          addDoc(collectionRef,{...values,image:image_name});
          resetForm({values:""});
        });
      }catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
      
      
    },
    validationSchema:contactValidationSchema
  });
  return (
    <main className={styles.main}>
    <form onSubmit={formik.handleSubmit} method="post">

      <label className={styles.label} htmlFor="first">Name</label>
      <input className={styles.form_field} type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
      {formik.errors.name && (
      <Error message={formik.errors.name}/>
      )}

      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.form_field} type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email && (
      <Error message={formik.errors.email}/>
      )}

      <label className={styles.label}>Gender</label>
      <Radio.Group
      onChange={formik.handleChange}
       name="gender"
       defaultValue='male'
       options={[
        {label:"Male",value:"male"},
        {label:"Female",value:"female"}
       ]}/>

       <label className={styles.label}>Select Profession</label>
       <MultiSelect
        handleChange={handleSelectChange}
        profession={formik.values.profession}
       />

      <label className={styles.label} htmlFor="channel">Channel</label>
      <input  className={styles.form_field} type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
      {formik.errors.channel && (
      <Error message={formik.errors.channel}/>
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
      
      <Button
       htmlType="submit"
       type="primary"
       icon={loading?<LoadingOutlined/>:null}
      >Add Contact</Button>

    </form>
    </main>
  )
}
