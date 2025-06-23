
import styles from './Footer.module.scss';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__copyright}>
                2025 ©
                <img src="/assets/icons/logo.svg" alt="aucuo logo" height={18}/>
            </div>
            <div className={styles.footer__socials}>
                <a href="https://t.me/aucuo" target="_blank">
                    Telegram
                </a>
                <a href="https://www.instagram.com/aucuo/" target="_blank">
                    Instagram
                </a>
                <a href="https://www.linkedin.com/in/jahor-%C5%A1ykaviec-360762174/" target="_blank">
                    LinkedIn
                </a>
                <a href="https://github.com/aucuo" target="_blank">
                    Github
                </a>
            </div>
        </footer>
    );
}