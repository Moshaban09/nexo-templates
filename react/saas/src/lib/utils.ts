/**
 * Utilities - Helper functions for the app
 * Example: formatDate, cn, debounce, etc.
 */

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
