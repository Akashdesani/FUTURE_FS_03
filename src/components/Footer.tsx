"use client";

import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
    { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
    { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
  ];

  const footerLinks = [
    { title: 'Company', links: ['About', 'Careers', 'Press'] },
    { title: 'Help', links: ['Contact Us', 'Shipping', 'Returns'] },
  ];

  return (
    <footer className="bg-card text-card-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-headline font-bold">ZARA</h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Redefining modern luxury with a commitment to quality, craftsmanship, and sustainable practices. Discover timeless pieces for a conscious wardrobe.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ZARA. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <Link key={social['aria-label']} href={social.href} className="text-muted-foreground hover:text-foreground transition-colors" aria-label={social['aria-label']}>
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
