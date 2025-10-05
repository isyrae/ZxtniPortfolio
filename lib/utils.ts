/**
 * ZxtniPortfolio - Utility Functions
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 * 
 * Utility functions for class name merging and common operations
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * End of ZxtniPortfolio - Utility Functions
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 */
