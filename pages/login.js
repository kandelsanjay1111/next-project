import React,{ useState} from 'react'
import styles from '../styles/login.module.css'
import {useFormik} from 'formik'
import { useAuth } from '../Components/Context/AuthContext';
import { useRouter } from 'next/router';
import { initialAuthValues,validationSchema } from '../Components/formik/signin';
import Error from '../Components/error';

 const login = () => {
  const router=useRouter();
  const {user,login}=useAuth();
  const [loading,setLoading]=useState(false);

  if(user){
    router.push('/dashboard');
  }

  const formik = useFormik({
    initialValues:initialAuthValues,
    onSubmit:(async(values)=>{
      // console.log(values);
      setLoading(true);
      try{
        const res=await login(values.username,values.password);
        router.push('/dashboard');
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }),
    validationSchema:validationSchema
  })

  return (
    <>
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.container}>
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" className={styles.input_field}  onChange={formik.handleChange} value={formik.values.username}/>
                {formik.errors.username && (
                <Error message={formik.errors.username}/>
                )}

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" className={styles.input_field} onChange={formik.handleChange} value={formik.values.password}/>
                {formik.errors.password && (
                <Error message={formik.errors.password}/>
                )}

                <button disabled={loading} type="submit" className={styles.button}>Login</button>

            </div>
        </form>
    </>
  )
}

export default login;
