"use client";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageHint: string;
  moods: string[];
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type Look = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageHint: string;
  productIds: string[];
};
