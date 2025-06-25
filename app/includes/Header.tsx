// ./app/Header.tsx

'use client'

import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import styles from './Header.module.scss';
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { projects } from "@/app/data/projects";
import { useCursor } from "@/app/context/CursorContext";
import { motion } from 'framer-motion';

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
            variant={isActive ? 'primary' : 'transparent'}
        >
            {children}
        </Button>
    );
};

export default function Header() {
    const activeSection = useActiveSection(sectionIds);
    const totalProjects = projects.length;
    const { setCursorVisible } = useCursor();

    const handleMouseEnter = () => {
        setCursorVisible(false);
    };

    const handleMouseLeave = () => {
        setCursorVisible(true);
    };

    const headerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const navItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.header
            className={styles['header']}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className={styles['nav']}>
                <motion.ul className={styles['nav__list']} variants={headerVariants}>
                    <motion.li className={styles['nav__item']} variants={navItemVariants}>
                        <NavLink to="#main" isActive={activeSection === 'main'}>
                            Main
                        </NavLink>
                    </motion.li>
                    <motion.li className={styles['nav__item']} variants={navItemVariants}>
                        <NavLink to="#projects" isActive={activeSection === 'projects'}>
                            <Badge>{totalProjects}</Badge>
                            Projects
                        </NavLink>
                    </motion.li>
                    <motion.li className={styles['nav__item']} variants={navItemVariants}>
                        <NavLink to="#about" isActive={activeSection === 'about'}>
                            About
                        </NavLink>
                    </motion.li>
                    <motion.li className={styles['nav__item']} variants={navItemVariants}>
                        <NavLink to="#contact" isActive={activeSection === 'contact'}>
                            Contact
                        </NavLink>
                    </motion.li>
                </motion.ul>
            </nav>
        </motion.header>
    );
}