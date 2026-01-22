"use client";

import type { Product, Look } from './types';

export const products: Product[] = [
  { id: '1', name: 'Fluid Gown', category: 'Dresses', price: 499.99, image: 'product1', imageHint: 'woman dress', moods: ['Formal', 'Minimal', 'Evening'] },
  { id: '2', name: 'Tailored Blazer', category: 'Jackets', price: 349.99, image: 'product2', imageHint: 'woman blazer', moods: ['Formal', 'Street'] },
  { id: '3', name: 'Silk Blouse', category: 'Tops', price: 199.99, image: 'product3', imageHint: 'silk blouse', moods: ['Minimal', 'Formal', 'Evening'] },
  { id: '4', name: 'Wide-Leg Trousers', category: 'Pants', price: 249.99, image: 'product4', imageHint: 'woman trousers', moods: ['Formal', 'Minimal', 'Street'] },
  { id: '5', name: 'Leather Tote Bag', category: 'Accessories', price: 399.99, image: 'product5', imageHint: 'leather bag', moods: ['Street'] },
  { id: '6', name: 'Cashmere Sweater', category: 'Knitwear', price: 299.99, image: 'product6', imageHint: 'cashmere sweater', moods: ['Minimal', 'Street'] },
  { id: '7', name: 'Minimalist Heels', category: 'Shoes', price: 279.99, image: 'product7', imageHint: 'woman heels', moods: ['Formal', 'Minimal', 'Evening'] },
  { id: '8', name: 'Statement Earrings', category: 'Accessories', price: 149.99, image: 'product8', imageHint: 'earrings jewelry', moods: ['Street', 'Formal', 'Evening'] },
];

export const lookbook: Look[] = [
  {
    id: 'look1',
    name: 'City Monochrome',
    description: 'A sharp, tailored look for the modern urbanite. Confident and effortlessly chic.',
    image: 'lookbook1',
    imageHint: 'woman street style',
    productIds: ['2', '4', '7'],
  },
  {
    id: 'look2',
    name: 'After Hours',
    description: 'Elegant silhouettes in luxurious fabrics, designed for unforgettable evenings.',
    image: 'lookbook2',
    imageHint: 'woman evening fashion',
    productIds: ['1', '3', '8'],
  },
  {
    id: 'look3',
    name: 'Weekend Ease',
    description: 'Relaxed yet refined. The perfect ensemble for brunch, galleries, and everything in between.',
    image: 'lookbook3',
    imageHint: 'woman casual chic',
    productIds: ['6', '5'],
  },
];
