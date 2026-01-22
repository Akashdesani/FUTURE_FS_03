"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const moods = ['All', 'Minimal', 'Street', 'Formal', 'Evening'];

const StyleMoodFilter = ({ currentFilter, onFilterChange }: { currentFilter: string, onFilterChange: (filter: string) => void }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-12 md:mb-16">
      {moods.map((mood) => (
        <Button
          key={mood}
          variant={currentFilter === mood ? 'default' : 'ghost'}
          onClick={() => onFilterChange(mood)}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300",
            currentFilter === mood ? 'shadow-lg' : 'text-muted-foreground hover:bg-accent/50'
          )}
        >
          {mood}
        </Button>
      ))}
    </div>
  );
};

export default StyleMoodFilter;
