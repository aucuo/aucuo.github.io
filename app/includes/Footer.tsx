'use client';

import styles from './Footer.module.scss';
import Image from "next/image";
import { motion } from 'framer-motion';


export default function Footer() {
    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.footer
            className={styles.footer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className={styles.footer__copyright}>
                {new Date().getFullYear()} ©
                <Image src="/assets/icons/logo.svg" alt="aucuo logo" width={90} height={24}/>
            </div>
            <div className={styles.footer__socials}>
                <a href="https://t.me/aucuo" target="_blank" rel="noopener noreferrer">
                    Telegram
                </a>
                <a href="https://www.instagram.com/aucuo/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://www.linkedin.com/in/aucuo/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://github.com/aucuo" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </div>
        </motion.footer>
    );
}