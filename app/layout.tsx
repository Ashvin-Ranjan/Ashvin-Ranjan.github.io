import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { IBMPlexSerif } from '@/utils/fonts';

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
