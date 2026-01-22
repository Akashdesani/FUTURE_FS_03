"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-center text-white bg-background">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          quality={100}
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white drop-shadow-2xl">
          Future Form
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-lg md:text-xl text-white/90 drop-shadow-lg">
          An exploration of shape, texture, and silhouette.
        </p>
        <div className="mt-10">
          <Link href="#new-arrivals">
             <Button size="lg" variant="secondary">Explore The Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
