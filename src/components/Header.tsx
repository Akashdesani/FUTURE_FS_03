"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const Header = () => {
  const { cartItems, cartCount, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();
  const navItems = ["Studio", "Collections", "Edit", "Sale"];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-headline text-3xl">ZARA</SheetTitle>
              </SheetHeader>
              <nav className="mt-10 flex flex-col space-y-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item}>
                    <Link href="#" className="text-lg hover:text-primary transition-colors font-medium">
                      {item}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
          <Link href="/" className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
            ZARA
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navItems.map((item) => (
            <Link href="#" key={item} className="text-sm font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="relative px-2">
                <ShoppingBag className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-md">
              <SheetHeader className="pb-4 border-b">
                <SheetTitle className="text-2xl font-headline">Your Cart</SheetTitle>
              </SheetHeader>
              {cartItems.length > 0 ? (
                <>
                  <div className="flex-1 overflow-y-auto -mx-6 px-6 divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-start py-6 space-x-4">
                        <Link href="#">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={125}
                                className="object-cover rounded-md aspect-[4/5]"
                            />
                        </Link>
                        <div className="ml-4 flex-1 flex flex-col h-full">
                          <div>
                            <h3 className="font-semibold text-base">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center justify-between mt-auto pt-4">
                            <div className="flex items-center">
                              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => decreaseQuantity(item.id)}>
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-10 text-center font-medium">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => increaseQuantity(item.id)}>
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                              <X className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 border-t space-y-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <Button size="lg" className="w-full" variant="secondary">Checkout</Button>
                    </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-20 h-20 text-muted-foreground/50" />
                  <h3 className="mt-6 text-xl font-semibold">Your Cart is Empty</h3>
                  <p className="mt-2 text-muted-foreground">Discover our collection and find something you love.</p>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
