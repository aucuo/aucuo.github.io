import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
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