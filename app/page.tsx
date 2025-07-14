'use client';
import { useEffect, useState } from 'react';

import TextData from '../public/page_data/main_page.json';
import Link from 'next/link';
import { IBMPlexSans, IBMPlexSansJP } from '@/utils/fonts';

export default function Home() {
  let [imageIndex, setImageIndex] = useState<number | null>(null);
  let [isEnglish, setIsEnglish] = useState(true);
  let [loadedLanguage, setLoadedLanguage] = useState(false);
  let [currentText, setCurrentText] = useState(TextData.english);

  const imagesArray = [
    <div
      key="workspace_reflection"
      className="w-full animate-fade md:w-1/3 min-h-56 align-text-bottom bg-[url('/images/workspace_reflections.jpg')] bg-[75%_50%] bg-cover"
    />,
    <div
      key="bedroom"
      className="w-full animate-fade md:w-1/3 min-h-56 bg-[url('/images/bedroom.jpg')] bg-[20%_50%] bg-cover"
    />,
    <div
      key="bioluminecent_water"
      className="w-full animate-fade md:w-1/3 min-h-56 bg-[url('/images/bioluminecent_water.jpg')] bg-[50%_25%] md:bg-[50%_50%] bg-cover"
    />,
    <div
      key="sunset"
      className="w-full animate-fade md:w-1/3 min-h-56 bg-[url('/images/sunset.jpg')] bg-[20%_50%] bg-cover"
    />,
    <div
      key="building_1"
      className="w-full animate-fade md:w-1/3 min-h-56 align-text-bottom bg-[url('/images/building_1.jpg')] bg-[50%_60%] bg-cover"
    />,
  ];

  useEffect(() => {
    setCurrentText(isEnglish ? TextData.english : TextData.japanese);
    if (loadedLanguage) localStorage.setItem('lang', isEnglish ? 'en' : 'jp');
  }, [isEnglish]);
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) setIsEnglish(lang === 'en');
    setLoadedLanguage(true);
    setImageIndex(Math.floor(Math.random() * imagesArray.length));
  }, []);

  return (
    <main className="flex md:h-screen md:justify-between w-full flex-col md:flex-row">
      {imageIndex === null ? null : imagesArray[imageIndex]}
      <div
        className={`w-full md:w-2/3 flex flex-col justify-between overflow-y-auto  animate-fadeDelay opacity-0 ${
          loadedLanguage ? '' : 'hidden'
        }`}
      >
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
          <div className="text-2xl mb-14">{currentText.position}</div>
          <div className="text-lg mb-14 whitespace-pre-wrap">
            {currentText.about}
          </div>
          <div className="text-lg mb-14 whitespace-pre-wrap">
            {currentText.email}
          </div>
          <div
            className={`text-lg flex flex-wrap justify-between underline ${
              !isEnglish ? 'mb-14' : ''
            }`}
          >
            <Link
              target="_blank"
              className="px-2"
              href={'https://linkedin.com/in/ashvinranjan'}
            >
              {currentText.links.linkedin}
            </Link>
            <Link
              target="_blank"
              className="px-2"
              href={'https://instagram.com/gedatsu.ara/'}
            >
              {currentText.links.instagram}
            </Link>
            <Link target="_blank" className="px-2" href={'/resume.pdf'}>
              {currentText.links.resume}
            </Link>
            <Link
              target="_blank"
              className="px-2"
              href={'https://github.com/Ashvin-Ranjan'}
            >
              {currentText.links.github}
            </Link>
          </div>
          {!isEnglish && (
            <div className={`text-lg`}>{TextData.japanese.apology}</div>
          )}
        </div>
        <div
          className={`text-lg text-right p-5 select-none ${IBMPlexSansJP.className}`}
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
