/**
 * Custom Hooks - Add your reusable hooks here
 * Example: useAuth, useCart, useTheme, etc.
 */

import { useState } from 'react';

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(!value);
  return [value, toggle] as const;
}
