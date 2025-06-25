'use client';

import Container from "@/app/components/Container";
import Header from "@/app/includes/Header";

import styles from './page.module.scss'
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import Marquee from "@/app/components/Marquee";
import Footer from "@/app/includes/Footer";

import {projects} from "@/app/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const heroContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const heroItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <main className={styles.page}>
            <Header/>
            <Container>
                <motion.div
                    className={styles.hero}
                    id="main"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={heroContainerVariants}
                >
                    <motion.div variants={heroItemVariants}>
                        <Image src="/assets/icons/logo.svg" alt="aucuo" className={styles.page__logo} width={90} height={24}/>
                    </motion.div>
                    <div className={styles.hero__inner}>
                        <motion.h1 className={styles.page__title} variants={heroItemVariants}>
                            Websites&
                            More
                        </motion.h1>
                        <motion.div variants={heroItemVariants}>
                            <Button href="#projects" className={styles.hero__inner_button} variant={'secondary'} size={'large'}>
                                SCROLL DOWN
                                <Image src="/assets/icons/arrow-down.svg" alt="Arrow down" width={24} height={24}/>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
                <div className={styles.projects} id="projects">
                    {projects.slice().reverse().map((project, index) => (
                        <motion.div
                            key={project.title + index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            variants={animationVariants}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                href={project.href}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={animationVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Marquee className={styles.marquee}>
                    <span className={styles.marquee_text}>let's make web better</span>
                </Marquee>
            </motion.div>
            <Container>
                <motion.div
                    className={styles.about}
                    id="about"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={animationVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className={styles.about__title}>
                        About
                    </h2>
                    <p className={styles.about__text}>
                        &quot;Hi, I&apos;m Jahor Šykaviec (aucuo) — a web developer with over five years of professional
                        experience
                        building websites and digital products that make an impact. I&apos;ve contributed to a variety of
                        projects, including large-scale solutions that received media coverage and reached wide
                        audiences.&quot;
                    </p>
                </motion.div>
                <motion.div
                    className={styles.talk}
                    id="contact"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={animationVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className={styles.talk__title}>
                        Let&apos;s talk!
                    </h2>
                    <Button href="https://t.me/aucuo" target="_blank" className={styles.talk__btn} variant={'secondary'} size={'large'}>
                        @aucuo
                        <Image src="/assets/icons/arrow-up-right.svg" alt="Arrow link" width={24} height={24}/>
                    </Button>
                </motion.div>

                <Footer/>
            </Container>
        </main>
    );
}
