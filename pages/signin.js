import React from 'react'
import styles from '../styles/login.module.css'
import {useAuth} from '../Components/Context/AuthContext'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { useRouter } from 'next/router'


const validationSchema=Yup.object({
username:Yup.string().required('Username is required').email('Insert the username in email format'),
password:Yup.string().required('Password field is required')
});

const signin = () => {
    const router=useRouter();
    const {user,signup}=useAuth();
    const formik=useFormik({
      initialValues:{
        username:"",
        password:""
      },
      onSubmit:(async(values)=>{
        // console.log(values);
        try{
          const res=await signup(values.username,values.password);
          router.push('/login');
        }
        catch(error){
          console.log(error)
        }
        
      }),
      validationSchema:validationSchema
    });
    
  return (
    <>
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.container}>
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" className={styles.input_field}  onChange={formik.handleChange} value={formik.values.username}/>
                {formik.errors.username && (
                <div className={styles.text_danger}>{formik.errors.username}</div>
                )}

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" className={styles.input_field}  onChange={formik.handleChange} value={formik.values.password}/>
                {formik.errors.password && (
                <div className={styles.text_danger}>{formik.errors.password}</div>
                )}

                <button type="submit" className={styles.button}>Signup</button>

            </div>
        </form>
    </>
  )
}

export default signin