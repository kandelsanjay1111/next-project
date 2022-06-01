import React from 'react'
import styles from '../styles/contact.module.css'

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
    console.log(result);
  }
  return (
    <main className={styles.main}>
    <form onSubmit={handleSubmit} action="http://localhost:3000/api/getcontact" method="post">
      <label className={styles.label} htmlFor="first">Name</label>
      <input className={styles.form_field} type="text" id="name" name="name" />
      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.form_field} type="email" id="email" name="email" />
      <label className={styles.label} htmlFor="channel">Channel</label>
      <input  className={styles.form_field} type="text" id="channel" name="channel" />
      <button type="submit">Submit</button>
    </form>
    </main>
  )
}
