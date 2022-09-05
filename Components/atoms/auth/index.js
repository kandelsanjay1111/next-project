import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'


const ButtonLink = ({text,path}) => {
  return (
    <Link href={path}>
        <a href={path} className={styles.card}>
            <h2>{text}</h2>
        </a>
    </Link>
  )
}

export default ButtonLink