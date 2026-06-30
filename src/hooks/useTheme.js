import { useState, useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('pf-theme', 'dark');
  }, []);

  return { theme: 'dark', toggleTheme: () => {} };
}
