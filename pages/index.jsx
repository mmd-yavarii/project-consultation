'use client';

import Hero from '@/components/home-page/Hero';
import Process from '@/components/home-page/Process';
import Projects from '@/components/home-page/projects';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const visitCookie = document.cookie.split('; ').find((row) => row.startsWith('developer_visit='));

        if (visitCookie) return;

        const params = new URLSearchParams(window.location.search);

        const sourceSite = params.get('site');

        if (!sourceSite) return;

        fetch('/api/developer-visit', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                site: sourceSite,

                userAgent: navigator.userAgent,

                referrer: document.referrer,

                time: new Date().toISOString(),
            }),
        })
            .then((response) => {
                if (response.ok) {
                    document.cookie = 'developer_visit=true; max-age=86400; path=/; SameSite=Lax';
                }
            })
            .catch((error) => {
                console.error('Developer visit error:', error);
            });
    }, []);

    return (
        <main className="w-full relative overflow-hidden">
            <Hero />

            <Projects />

            <Process />
        </main>
    );
}
