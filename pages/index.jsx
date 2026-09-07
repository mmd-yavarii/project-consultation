'use client';

import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Process from '@/components/Process';
import Projects from '@/components/projects';

export default function Home() {
    return (
        <main className="w-full relative overflow-hidden">
            <Hero />

            {/* Projects Section */}
            <Projects />

            <Process />
        </main>
    );
}
