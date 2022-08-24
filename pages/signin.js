import React,{useState} from 'react'
import styles from '../styles/login.module.css'
import {useAuth} from '../Components/Context/AuthContext'
import {useFormik} from 'formik'
import { useRouter } from 'next/router'
import { initialAuthValues,validationSchema } from '../Components/formik/signin';


const signin = () => {
    const router=useRouter();
    const {user,signup}=useAuth();
    const formik=useFormik({
      initialValues:initialAuthValues,
      onSubmit:(async(values)=>{
        // console.log(values);
        setLoading(true);
        try{
          const res=await signup(values.username,values.password);
          router.push('/login');
        }
        catch(error){
          console.log(error)
        }
        finally{
          setLoading(false);
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