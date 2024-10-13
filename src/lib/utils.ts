import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Course, Lesson, Module, SearchableItem } from '../types/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type guard functions
export function isCourse(item: SearchableItem): item is Course {
  return 'modules' in item;
}

export function isModule(item: SearchableItem): item is Module {
  return 'lessons' in item && !('modules' in item);
}

export function isLesson(item: SearchableItem): item is Lesson {
  return 'topics' in item && 'content' in item;
}
