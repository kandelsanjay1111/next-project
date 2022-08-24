import React from 'react'
import styles from '../../styles/login.module.css';

const Error = ({message}) => {
  return (
    <div className={styles.text_danger}>{message}</div>
  )
}

export default Error