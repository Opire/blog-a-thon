import styles from './Header.module.css'
import { Image } from '@mantine/core';
import NextImage from 'next/image';

export default function Header() {
    return (
        <section className={styles.section}>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    component={NextImage}
                    src="/assets/logo_header.svg"
                    alt="Opire's logo"
                    fill
                />
            </div>
            <span className={styles.titleUp}>Welcome to the First</span>
            <h1 className={styles.titleDown}>Opire's Blog-a-Thon</h1>
            <p className={styles.subtitle}>
                Join us for an exciting blogging marathon. Write, share, and win amazing prizes!
            </p>
        </section>
    );
}
