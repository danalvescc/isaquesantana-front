import React from 'react';
import styles from '../styles/components/Navbar.module.css';
import Link from 'next/link'

export function Navbar(){
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <a href="#">ISAQUE SANTANA</a>
            </div>
            <div className={styles.right}>
                <Link href="/Home">
                    Home
                </Link>
                <Link href="/Photos">
                    Photos
                </Link>
                <Link href="/Movies">
                    Movies
                </Link>
            </div>
        </div>
    )
}