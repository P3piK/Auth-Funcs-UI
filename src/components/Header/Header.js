import React from 'react'
import HeaderAuth from './HeaderAuth'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <h1>Auth Funcs</h1>
        <HeaderAuth />
    </header>
  )
}

export default Header