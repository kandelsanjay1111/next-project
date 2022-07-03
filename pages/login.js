import React from 'react'
import styles from '../styles/login.module.css'

 const login = () => {
  return (
    <>
        <form>
            <div className={styles.container}>
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" className={styles.input_field} required/>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" className={styles.input_field} required/>
                    
                <button type="submit" className={styles.button}>Login</button>

            </div>
        </form>
    </>
  )
}

export default login;
