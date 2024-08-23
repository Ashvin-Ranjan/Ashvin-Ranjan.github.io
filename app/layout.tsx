import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { IBM_Plex_Serif } from 'next/font/google';

const IBMPlexSerif = IBM_Plex_Serif({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ashvin Ranjan',
    description: 'A webpage by Ashvin Ranjan',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={IBMPlexSerif.className}>{children}</body>
        </html>
    );
}
