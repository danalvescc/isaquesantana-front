import styles from '../styles/components/Header.module.css';

export function Header(){
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <a href="#">ISAQUE SANTANA</a>
            </div>
            <div className={styles.right}>
                <div>
                    <nav>
                        <a href="/home">HOME</a>
                        <a href="/person">SOBRE MIM</a>
                        <a href="/contact">CONTATO</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}