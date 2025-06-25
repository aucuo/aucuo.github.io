import { useEffect, useState, useRef } from 'react';

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>('');
    const rootRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isBottom =
                    window.innerHeight + window.scrollY >=
                    document.documentElement.scrollHeight - 50;

                if (isBottom) {
                    setActiveSection('contact');
                    return;
                }

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: rootRef.current,
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        const sections = sectionIds.map((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
            return el;
        });

        return () => {
            sections.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, [sectionIds]);

    return activeSection;
}