"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { Product, CartItem } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  addMultipleToCart: (products: Product[]) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = useCallback((product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const productImage = PlaceHolderImages.find(p => p.id === product.image);
      const imageUrl = productImage ? productImage.imageUrl : '';
      return [...prevItems, { ...product, quantity: 1, image: imageUrl }];
    });
    toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
    });
  }, [toast]);

  const addMultipleToCart = useCallback((productsToAdd: Product[]) => {
    setCartItems(prevItems => {
        let newItems = [...prevItems];
        productsToAdd.forEach(product => {
            const existingItemIndex = newItems.findIndex(item => item.id === product.id);
            if (existingItemIndex > -1) {
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + 1
                };
            } else {
                const productImage = PlaceHolderImages.find(p => p.id === product.image);
                const imageUrl = productImage ? productImage.imageUrl : '';
                newItems.push({ ...product, quantity: 1, image: imageUrl });
            }
        });
        return newItems;
    });
    toast({
        title: "Look added to cart",
        description: "The items from the look have been added to your cart.",
    });
}, [toast]);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const increaseQuantity = useCallback((productId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((productId: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem && existingItem.quantity === 1) {
        return prevItems.filter(item => item.id !== productId);
      }
      return prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  }, []);
  
  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    addMultipleToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartCount,
    totalPrice
  }), [cartItems, addToCart, addMultipleToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartCount, totalPrice]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
