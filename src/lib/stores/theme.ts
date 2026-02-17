import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

// 1. Define valid theme types
export type Theme = 'light' | 'dark';

/**
 * Gets the initial theme based on:
 * 1. Saved preference in localStorage
 * 2. System preference (prefers-color-scheme)
 * 3. Default to 'light'
 */
const getInitialTheme = (): Theme => {
  if (!browser) return 'light';

  const savedTheme = window.localStorage.getItem('theme') as Theme | null;
  if (savedTheme) return savedTheme;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export const theme: Writable<Theme> = writable(getInitialTheme());

// 2. React to manual changes (Save to localStorage & Update DOM)
theme.subscribe((value: Theme) => {
  if (browser) {
    window.localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  }
});

/**
 * Listen for System Changes
 * This updates the app in real-time if the user toggles their OS theme,
 * but only if they haven't set a manual preference in this session.
 */
if (browser) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e: MediaQueryListEvent) => {
    // Only auto-switch if the user hasn't "locked" a preference in localStorage
    if (!window.localStorage.getItem('theme')) {
      theme.set(e.matches ? 'dark' : 'light');
    }
  });
}

export function toggleTheme(): void {
  theme.update((current) => (current === 'light' ? 'dark' : 'light'));
}