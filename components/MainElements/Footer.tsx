import styles from "./Footer.module.scss";

export default function Footer() {
    return <footer className={styles.footer}>
        <a
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className={styles.logo} src="/logo.png" alt="Tadano Rei Birthday Project"/>

        </a>
    </footer>
}