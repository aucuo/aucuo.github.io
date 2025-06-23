// ./app/Header.tsx

'use client' // <-- добавь эту строку в самое начало файла

import Badge from "../components/Badge";
import Button from "../components/Button";
import styles from './Header.module.scss';
import btnStyles from '../components/Button.module.scss';
import { useActiveSection } from "../hooks/useActiveSection";
import { projects } from "../data/projects";

const sectionIds = ['main', 'projects', 'about', 'contact'];

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive }) => {
    return (
        <Button
            href={to}
            className={`${isActive ? btnStyles[`btn--variant-primary`] : ''}`}
        >
            {children}
        </Button>
    );
};

export default function Header() {
    const activeSection = useActiveSection(sectionIds);
    const totalProjects = projects.length;

    return (
        <header className={styles['header']}>
            <nav className={styles['nav']}>
                <ul className={styles['nav__list']}>
                    <li className={styles['nav__item']}>
                        <NavLink to="#main" isActive={activeSection === 'main'}>
                            Main
                        </NavLink>
                    </li>
                    <li className={styles['nav__item']}>
                        <NavLink to="#projects" isActive={activeSection === 'projects'}>
                            <Badge>{totalProjects}</Badge>
                            Projects
                        </NavLink>
                    </li>
                    <li className={styles['nav__item']}>
                        <NavLink to="#about" isActive={activeSection === 'about'}>
                            About
                        </NavLink>
                    </li>
                    <li className={styles['nav__item']}>
                        <NavLink to="#contact" isActive={activeSection === 'contact'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}