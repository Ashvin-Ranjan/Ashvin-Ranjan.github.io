'use client';

import { IBMPlexSans } from '@/utils/fonts';
import Link from 'next/link';

export default function Page404() {
  return (
    <main className="flex justify-center items-center w-full flex-col p-10 md:h-screen">
      <div className={`text-3xl ${IBMPlexSans.className} text-center`}>
        The page you are looking for does not exist
      </div>
      <Link className={`underline m-3 text-lg text-center`} href="/">
        Return to home
      </Link>
    </main>
  );
}
