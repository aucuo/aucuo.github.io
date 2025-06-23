import Container from "./components/Container";
import Header from "./includes/Header";

import styles from './page.module.scss'
import Button from "./components/Button";
import Card from "./components/Card";
import Marquee from "./components/Marquee";
import Footer from "./includes/Footer";

import {projects} from "./data/projects";

export default function Home() {
    return (
        <main className={styles.page}>
            <Header/>
            <Container>
                <div className={styles.hero} id="main">
                    <img src="/assets/icons/logo.svg" alt="aucuo" className={styles.page__logo} height={24}/>
                    <div className={styles.hero__inner}>
                        <h1 className={styles.page__title}>
                            Websites&
                            More
                        </h1>
                        <Button href="#projects" className={styles.hero__inner_button} variant={'secondary'} size={'large'}>
                            SCROLL DOWN
                            <img src="/assets/icons/arrow-down.svg" alt="Arrow down" width={24} height={24}/>
                        </Button>
                    </div>
                </div>
                <div className={styles.projects} id="projects">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </Container>
            <Marquee className={styles.marquee} text="let's make web better"/>
            <Container>
                <div className={styles.about} id="about">
                    <h2 className={styles.about__title}>
                        About
                    </h2>
                    <p className={styles.about__text}>
                        “Hi, I`m Jahor Šykaviec (aucuo) — a web developer with over five years of professional
                        experience
                        building websites and digital products that make an impact. I’ve contributed to a variety of
                        projects, including large-scale solutions that received media coverage and reached wide
                        audiences.”
                    </p>
                </div>
                <div className={styles.talk} id="contact">
                    <h2 className={styles.talk__title}>
                        Let’s talk!
                    </h2>
                    <Button href="https://t.me/aucuo" target="_blank" className={styles.talk__btn} variant={'secondary'} size={'large'}>
                        @aucuo
                        <img src="/assets/icons/arrow-up-right.svg" alt="Arrow link" width={24} height={24}/>
                    </Button>
                </div>

                <Footer/>
            </Container>
        </main>
    );
}
