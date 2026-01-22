"use client";

import React from 'react';
import Image from 'next/image';
import { lookbook, products } from '@/lib/data';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Lookbook = () => {
  const { addMultipleToCart } = useCart();

  const handleShopLook = (productIds: string[]) => {
    const productsInLook = products.filter(p => productIds.includes(p.id));
    addMultipleToCart(productsInLook);
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">The Lookbook</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated ensembles for the modern wardrobe. Discover and shop complete looks that define contemporary elegance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {lookbook.map((look, index) => {
            const lookImage = PlaceHolderImages.find(p => p.id === look.image);
            return (
              <div key={look.id} className="group relative animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: `${index * 150}ms` }}>
                <div className="overflow-hidden aspect-w-4 aspect-h-5">
                  {lookImage && (
                    <Image
                      src={lookImage.imageUrl}
                      alt={look.name}
                      width={600}
                      height={750}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                      data-ai-hint={lookImage.imageHint}
                    />
                  )}
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-headline font-semibold">{look.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{look.description}</p>
                  <Button variant="outline" className="mt-4" onClick={() => handleShopLook(look.productIds)}>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Shop This Look
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
