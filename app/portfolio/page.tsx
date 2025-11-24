'use client';

import { useState, useEffect } from 'react';
import PortfolioData from '@/public/page_data/portfolio.json';
import { IBMPlexSans } from '@/utils/fonts';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  image: string;
  location: string;
  shot_on: string;
  when: string;
}

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    setPortfolioItems(PortfolioData as PortfolioItem[]);
  }, []);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage < portfolioItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) => {
          if (prev !== null && prev < portfolioItems.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) => {
          if (prev !== null && prev > 0) {
            return prev - 1;
          }
          return prev;
        });
      }
    };

    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, portfolioItems.length]);

  return (
    <main className="min-h-screen p-2 md:p-4">
      <div
        className={`text-center text-5xl font-semibold mb-4 md:mb-6 ${IBMPlexSans.className}`}
      >
        Portfolio
      </div>
      <nav className="mb-4 md:mb-6 border-y border-white/30 py-2">
        <div className="flex justify-center text-sm md:text-base uppercase tracking-wide">
          <Link className="hover:opacity-80 transition" href="/">
            Back to Home
          </Link>
        </div>
      </nav>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="md:transition ease-in-out !duration-300 md:hover:opacity-80 cursor-pointer"
          >
            <div
              className="w-full aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url('/${item.image}')` }}
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-5"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="fixed top-4 right-4 text-white text-4xl font-bold hover:opacity-70 transition z-10"
          >
            ×
          </button>

          {selectedImage > 0 && (
            <button
              onClick={handlePrevImage}
              className="fixed bottom-4 left-4 md:left-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 text-white text-4xl font-bold hover:opacity-70 transition z-10"
            >
              {'<'}
            </button>
          )}

          {selectedImage < portfolioItems.length - 1 && (
            <button
              onClick={handleNextImage}
              className="fixed bottom-4 right-4 md:right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 text-white text-4xl font-bold hover:opacity-70 transition z-10"
            >
              {'>'}
            </button>
          )}

          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#1d8888] rounded-lg overflow-hidden w-full">
              <div className="relative w-full aspect-square md:aspect-auto md:h-[60vh] bg-white flex items-center justify-center p-4 md:p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={`/${portfolioItems[selectedImage].image}`}
                    alt={portfolioItems[selectedImage].location}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className={`p-6 text-white ${IBMPlexSans.className}`}>
                <div className="text-lg mb-2">
                  <span className="font-semibold">Location:</span>{' '}
                  {portfolioItems[selectedImage].location}
                </div>
                <div className="text-lg mb-2">
                  <span className="font-semibold">Shot on:</span>{' '}
                  {portfolioItems[selectedImage].shot_on}
                </div>
                <div className="text-lg">
                  <span className="font-semibold">Date:</span>{' '}
                  {portfolioItems[selectedImage].when}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
