'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const terminalData = [
    {
        command: 'whoami',
        output: ['Mohammad Yavari', 'Software Engineer'],
    },

    {
        command: 'cat about_me.txt',
        output: [
            'Passionate about software development and modern web technologies.',
            'I enjoy designing and building reliable, well-structured systems and turning ideas into practical software solutions.',
        ],
    },
];

function DeveloperTerminal() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState('command');
    const [textIndex, setTextIndex] = useState(0);
    const [outputIndex, setOutputIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        if (currentIndex >= terminalData.length) {
            return;
        }

        const current = terminalData[currentIndex];

        if (phase === 'command') {
            if (textIndex < current.command.length) {
                const timer = setTimeout(() => {
                    setTypedText(current.command.slice(0, textIndex + 1));

                    setTextIndex((prev) => prev + 1);
                }, 35);

                return () => clearTimeout(timer);
            }

            const timer = setTimeout(() => {
                setPhase('output');
                setTextIndex(0);
                setTypedText('');
            }, 250);

            return () => clearTimeout(timer);
        }

        if (phase === 'output') {
            const output = current.output[outputIndex];

            if (textIndex < output.length) {
                const timer = setTimeout(() => {
                    setTypedText(output.slice(0, textIndex + 1));

                    setTextIndex((prev) => prev + 1);
                }, 18);

                return () => clearTimeout(timer);
            }

            if (outputIndex < current.output.length - 1) {
                const timer = setTimeout(() => {
                    setOutputIndex((prev) => prev + 1);
                    setTextIndex(0);
                    setTypedText('');
                }, 120);

                return () => clearTimeout(timer);
            }

            const timer = setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
                setPhase('command');
                setTextIndex(0);
                setOutputIndex(0);
                setTypedText('');
            }, 350);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, phase, textIndex, outputIndex]);

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
                filter: 'blur(12px)',
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
            }}
            transition={{
                duration: 0.85,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                y: -6,
                scale: 1.01,
                transition: {
                    duration: 0.25,
                },
            }}
            dir="ltr"
            className="
                min-w-0
                flex
                h-[460px]
                w-full
                max-w-[520px]
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-emerald-500/20
                shadow-2xl
            "
            style={{
                background: `

                radial-gradient(
                    circle at 85% 10%,
                    rgba(16,185,129,.10),
                    transparent 35%
                ),

                radial-gradient(
                    circle at 10% 90%,
                    rgba(20,184,165,.025),
                    transparent 40%
                ),

                linear-gradient(
                    145deg,
                    rgba(7,20,19,.98),
                    rgba(5,15,15,.98),
                    rgba(3,12,13,.99)
                )

                `,
            }}
        >
            {/* Header */}

            <div
                className="
                    relative
                    flex
                    shrink-0
                    items-center
                    justify-center
                    border-b
                    border-emerald-500/10
                    px-4
                    py-3
                "
            >
                <div
                    className="
                        absolute
                        left-4
                        flex
                        items-center
                        gap-2
                    "
                >
                    <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>

                <span
                    className="
                        font-mono
                        text-[12px]
                        text-emerald-300
                        opacity-60
                    "
                >
                    mohammad@dev-server:~
                </span>
            </div>

            {/* Content */}

            <div
                className="
                    min-h-0
                    flex-1
                    overflow-y-auto
                    p-5
                    sm:p-6
                "
            >
                <div
                    className="
                        font-mono
                        text-[13px]
                        leading-7
                    "
                >
                    {terminalData.map((item, index) => {
                        if (index > currentIndex) return null;

                        if (index === currentIndex) {
                            return (
                                <div key={index} className="mb-4">
                                    <div>
                                        <span className="font-bold text-emerald-400">mohammad@dev-server</span>

                                        <span className="text-emerald-600">:</span>

                                        <span className="text-emerald-400">~</span>

                                        <span className="text-emerald-500">$</span>

                                        <span className="text-emerald-300">{phase === 'command' ? typedText : item.command}</span>

                                        {phase === 'command' && (
                                            <span
                                                className="
                                                        ml-1
                                                        inline-block
                                                        h-4
                                                        w-2
                                                        bg-emerald-400
                                                    "
                                            />
                                        )}
                                    </div>

                                    {phase === 'output' && (
                                        <>
                                            {item.output.slice(0, outputIndex).map((line, i) => (
                                                <div key={i} className="text-emerald-400">
                                                    {line}
                                                </div>
                                            ))}

                                            <div className="text-emerald-400">
                                                {typedText}

                                                <span
                                                    className="
                                                        ml-1
                                                        inline-block
                                                        h-4
                                                        w-2
                                                        bg-emerald-400
                                                    "
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <div key={index} className="mb-4">
                                <div>
                                    <span className="font-bold text-emerald-400">mohammad@dev-server</span>

                                    <span className="text-emerald-600">:</span>

                                    <span className="text-emerald-400">~$</span>

                                    <span className="text-emerald-300">{item.command}</span>
                                </div>

                                {item.output.map((line, i) => (
                                    <div key={i} className="text-emerald-400">
                                        {line}
                                    </div>
                                ))}
                            </div>
                        );
                    })}

                    {currentIndex >= terminalData.length && (
                        <div>
                            <span className="font-bold text-emerald-400">mohammad@dev-server</span>

                            <span className="text-emerald-600">:</span>

                            <span className="text-emerald-500">$</span>

                            <span
                                className="
                                    ml-2
                                    inline-block
                                    h-4
                                    w-2
                                    animate-pulse
                                    bg-emerald-400
                                "
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default DeveloperTerminal;
