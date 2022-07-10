import React from 'react'
import styles from '../styles/login.module.css'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { useAuth } from '../Components/Context/AuthContext';
import { useRouter } from 'next/router';

const validationSchema=Yup.object({
  username:Yup.string().required('Username is required').email('Insert username in email format'),
  password:Yup.string().required('Password field is required')
  });
  
 const login = () => {
  const router=useRouter();
  const {user,login}=useAuth();
  const formik = useFormik({
    initialValues:{
      username:"",
      password:""
    },
    onSubmit:(async(values)=>{
      // console.log(values);
      try{
        const res=await login(values.username,values.password);
        router.push('/dashboard');
      }
      catch(error){
        console.log(error);
      }
    }),
    validationSchema:validationSchema
  })
  return (
    <>
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.container}>
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" className={styles.input_field}  onChange={formik.handleChange} value={formik.values.username} required/>

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" className={styles.input_field} onChange={formik.handleChange} value={formik.values.password} required/>
                    
                <button type="submit" className={styles.button}>Login</button>

            </div>
        </form>
    </>
  )
}

export default login;
