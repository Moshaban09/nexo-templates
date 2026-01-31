/**
 * Utilities - Helper functions
 */

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
