'use client';
import { useEffect, useState } from 'react';
import { IBM_Plex_Sans, IBM_Plex_Sans_JP } from 'next/font/google';

import TextData from '../public/text.json';
import Link from 'next/link';

const IBMPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm-plex-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const IBMPlexSansJP = IBM_Plex_Sans_JP({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm-plex-sans-jp',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function Home() {
    let [imageIndex, _] = useState(() => Math.floor(Math.random() * 3));
    let [isEnglish, setIsEnglish] = useState(
        navigator.language != 'ja' && navigator.language != 'ja-JP'
    );
    let [currentText, setCurrentText] = useState(TextData.english);

    const imagesArray = [
        <div
            key='workspace_reflection'
            className="w-full md:w-1/3 min-h-56 align-text-bottom bg-[url('/images/workspace_reflections.jpg')] bg-[75%_50%] bg-cover text-black"
        />,
        <div
            key='bedroom'
            className="w-full md:w-1/3 min-h-56 bg-[url('/images/bedroom.jpg')] bg-[20%_50%] bg-cover"
        />,
        <div
            key='bioluminecent_water'
            className="w-full md:w-1/3 min-h-56 bg-[url('/images/bioluminecent_water.jpg')] bg-[50%_25%] md:bg-[50%_50%] bg-cover"
        />,
    ];

    useEffect(() => {
        setCurrentText(isEnglish ? TextData.english : TextData.japanese);
    }, [isEnglish]);

    return (
        <main className='flex min-h-screen max-h-screen justify-between w-full flex-col md:flex-row'>
            {imagesArray[imageIndex]}
            <div className='w-full md:w-2/3 flex flex-col justify-between overflow-y-auto'>
                <div
                    className={`p-[6%_12%] pb-0 font-light ${
                        isEnglish ? '' : IBMPlexSansJP.className
                    }`}
                >
                    <div
                        className={`text-4xl font-normal ${
                            isEnglish ? IBMPlexSans.className : ''
                        }`}
                    >
                        {currentText.name}
                    </div>
                    <div className='text-2xl mb-14'>{currentText.position}</div>
                    <div className='text-lg mb-14 whitespace-pre-wrap'>
                        {currentText.about}
                    </div>
                    <div className='text-lg mb-14 whitespace-pre-wrap'>
                        {currentText.email}
                    </div>
                    <div
                        className={`text-lg flex flex-wrap justify-between underline ${
                            !isEnglish ? 'mb-14' : ''
                        }`}
                    >
                        <Link
                            className='px-2'
                            href={
                                'https://www.linkedin.com/in/ashvin-ranjan-153b99297/'
                            }
                        >
                            {currentText.links.linkedin}
                        </Link>
                        <Link
                            className='px-2'
                            href={'https://instagram.com/gedatsu.ara/'}
                        >
                            {currentText.links.instagram}
                        </Link>
                        <Link className='px-2' href={'/resume.pdf'}>
                            {currentText.links.resume}
                        </Link>
                        <Link
                            className='px-2'
                            href={'https://github.com/Ashvin-Ranjan'}
                        >
                            {currentText.links.github}
                        </Link>
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
