import styles from "./navigation.module.css"

const Navigation = () =>
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
            <span className={styles.yellow}>
                Internet
            </span>
        </span>
    </nav>;

export default Navigation