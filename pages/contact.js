import React from 'react'
import styles from '../styles/contact.module.css'
import {useFormik} from 'formik'

export default function contact() {
  async function handleSubmit(event){
    event.preventDefault();
    const data={
      name:event.target.first.value,
      last:event.target.last.value
    }

    const jsonData=JSON.stringify(data);

    const endpoint="http://localhost:3000/api/getcontact";

    const options={
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body:jsonData,
    }

    const response=await fetch(endpoint, options);

    const result=await response.json();

    // alert(result);
    // console.log(result);
  }
  const formik=useFormik({
    initialValues:{
      name:"test",
      email:"test email",
      channel:"test channel"
    },
    onSubmit:(values)=>console.log(formik.values),
    validate:values=>{
      let errors={};
      if(!values.name)
      {
        errors.name='Name field is required'
      }
      if(!values.email)
      {
        errors.email='Required'
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.channel)
      {
        errors.content='Required'
      }
      return errors;
    }
  });
  // console.log(formik.errors);
  return (
    <main className={styles.main}>
    <form onSubmit={formik.handleSubmit} action="http://localhost:3000/api/getcontact" method="post">

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
      {formik.errors.content && (
      <div className={styles.text_danger}>{formik.errors.content}</div>
      )}

      <button type="submit">Submit</button>

    </form>
    </main>
  )
}
