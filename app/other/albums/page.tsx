'use client';

import AlbumData from '../../../public/page_data/albums.json';
import AlbumSummary from '@/components/albums/AlbumSummary';
import { AlbumSummaryProps } from '@/components/albums/AlbumSummaryTypes';
import { useState } from 'react';
import AlbumDisplay from '@/components/albums/AlbumDisplay';
import { IBMPlexSans } from '@/utils/fonts';

export default function Albums() {
    let [focusedAlbum, setFocusedAlbum] = useState(0);

    const generateOnClick = (key: number) => {
        return () => {
            setFocusedAlbum(key);
        };
    };
    console.log(AlbumData);

    return (
        <main className={`text-center flex`}>
            <div className='w-full md:w-3/4'>
                <div className={`p-10 text-5xl ${IBMPlexSans.className}`}>
                    Albums You Might Not Know
                </div>
                <div
                    className={`flex basis-full flex-col md:flex-row md:flex-wrap justify-center w-full`}
                >
                    {AlbumData.map((v, i) => (
                        <AlbumSummary
                            key={i}
                            {...(v as AlbumSummaryProps)}
                            sansFont={IBMPlexSans.className}
                            onClick={generateOnClick(i)}
                            focused={i == focusedAlbum}
                        />
                    ))}
                </div>
            </div>
            <div className='hidden md:block w-1/4'>
                <AlbumDisplay
                    {...(AlbumData[focusedAlbum] as AlbumSummaryProps)}
                    sansFont={IBMPlexSans.className}
                />
            </div>
        </main>
    );
}
