"use client";

import React, { useState, useMemo } from 'react';
import ProductGrid from './ProductGrid';
import StyleMoodFilter from './StyleMoodFilter';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';

const ProductSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    if (filter === 'All') {
      return products;
    }
    return products.filter(p => p.moods.includes(filter));
  }, [filter]);

  return (
    <section id="new-arrivals" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            The Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select a style to discover pieces curated by our AI Style Assistant.
            </p>
        </div>
        <StyleMoodFilter currentFilter={filter} onFilterChange={setFilter} />
        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  );
};

export default ProductSection;
