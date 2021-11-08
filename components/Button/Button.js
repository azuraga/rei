import styles from "./Button.module.scss"

export default function Button(props) {
    return <button className={styles.button}>
        <img className={styles.image} alt="next"/>
    </button>
}