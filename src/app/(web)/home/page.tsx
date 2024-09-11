import Header from "./sections/Header/Header";
import styles from "./page.module.css";
import Timeline from "./sections/Timeline/Timeline";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Timeline />
        </main>
    );
}