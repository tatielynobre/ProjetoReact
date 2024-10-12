import styles from "./Header.module.css"


function Header(){
    return(
        <header className={styles.header}>
            <span>T-Flix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Play</a>
            </nav>
        </header>
    )
}
export default Header;
