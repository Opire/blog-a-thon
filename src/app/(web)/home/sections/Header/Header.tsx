import styles from './Header.module.css'

export default function Header() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Opire's Blog-a-Thon</h1>
            <span className={styles.titleVersion}>I</span>

        </section>
    );
}
