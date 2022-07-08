import React from 'react'
import styles from '../styles/login.module.css'

const signin = () => {
  return (
    <>
        <form>
            <div className={styles.container}>
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" className={styles.input_field} required/>

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" className={styles.input_field} required/>
                    
                <button type="submit" className={styles.button}>Signup</button>

            </div>
        </form>
    </>
  )
}

export default signin