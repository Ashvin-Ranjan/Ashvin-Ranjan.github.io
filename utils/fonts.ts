import { IBM_Plex_Sans, IBM_Plex_Sans_JP, IBM_Plex_Serif } from 'next/font/google';

export const IBMPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm-plex-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const IBMPlexSansJP = IBM_Plex_Sans_JP({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm-plex-sans-jp',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const IBMPlexSerif = IBM_Plex_Serif({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm-plex-serif',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});