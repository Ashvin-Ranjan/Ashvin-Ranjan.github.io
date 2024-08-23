'use client';
import { useEffect, useState } from 'react';
import { IBM_Plex_Sans, IBM_Plex_Sans_JP } from 'next/font/google';

import TextData from '../public/text.json';

export const IBMPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const IBMPlexSansJP = IBM_Plex_Sans_JP({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function Home() {
    let [imageIndex, _] = useState(() => Math.floor(Math.random() * 3));
    let [isEnglish, setIsEnglish] = useState(
        navigator.language != 'ja' && navigator.language != 'ja-JP'
    );
    let [currentText, setCurrentText] = useState(TextData.english);

    const imagesArray = [
        <div className="w-full md:w-1/3 min-h-56 bg-[url('/images/workspace_reflections.jpg')] bg-[75%_50%] bg-cover" />,
        <div className="w-full md:w-1/3 min-h-56 bg-[url('/images/bedroom.jpg')] bg-[20%_50%] bg-cover" />,
        <div className="w-full md:w-1/3 min-h-56 bg-[url('/images/bioluminecent_water.jpg')] bg-[50%_25%] md:bg-[50%_50%] bg-cover" />,
    ];

    useEffect(() => {
        setCurrentText(isEnglish ? TextData.english : TextData.japanese);
    }, [isEnglish]);

    return (
        <main className='flex min-h-screen justify-between w-full flex-col md:flex-row'>
            {imagesArray[2]}
            <div className='w-full md:w-2/3 flex flex-col justify-between'>
                <div
                    className={`p-[6%_12%] ${
                        isEnglish ? '' : IBMPlexSansJP.className
                    }`}
                >
                    <div
                        className={`text-4xl ${
                            isEnglish ? IBMPlexSans.className : ''
                        }`}
                    >
                        {currentText.name}
                    </div>
                    <div className='text-2xl mb-16'>{currentText.position}</div>
                    <div className='text-lg mb-16 whitespace-pre-wrap	'>
                        {currentText.about}
                    </div>
                    <div className={`text-lg ${!isEnglish ? 'mb-14' : ''}`}>
                        {currentText.email}
                    </div>
                    {!isEnglish && (
                        <div className={`text-lg`}>
                            {TextData.japanese.apology}
                        </div>
                    )}
                </div>
                <div
                    className={`text-lg text-right p-5 ${IBMPlexSansJP.className}`}
                    onClick={() => {
                        setIsEnglish((v) => !v);
                    }}
                >
                    {currentText.toggle}
                </div>
            </div>
        </main>
    );
}
