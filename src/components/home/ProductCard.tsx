"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, index }: { product: Product, index: number }) => {
  const { addToCart } = useCart();
  const productImage = PlaceHolderImages.find(p => p.id === product.image);

  return (
    <div className="group relative animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: `${index * 100}ms` }}>
      <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden bg-gray-200">
        {productImage && (
          <Image
            src={productImage.imageUrl}
            alt={product.name}
            width={600}
            height={750}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={productImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Button size="icon" variant="secondary" onClick={() => addToCart(product)}>
                <Plus className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
            </Button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-foreground">
              {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="text-sm font-semibold text-foreground">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
