import React from 'react';
import AuthLink from '../../molecules/auth';
import styles from '../../../styles/Home.module.css';

const Introduction = () => {
  return (
    <>
        <h1 className={styles.title}>
          Welcome to Our Blog
        </h1>

        <div className={styles.grid}>
          <AuthLink/>
        </div>
    </>
  )
}

export default Introduction;