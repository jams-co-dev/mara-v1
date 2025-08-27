"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

function ThemeWatcher() {
  const { resolvedTheme, theme } = useTheme();

  React.useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('vibrant', 'coke', 'mara');
    if (theme === 'vibrant' || theme === 'coke' || theme === 'mara') {
      html.classList.add(theme);
    }
  }, [theme]);
  
  React.useEffect(() => {
    const html = document.documentElement;
    // This handles the case where the system theme changes
    if (theme === 'system') {
        if(resolvedTheme === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
        } else {
            html.classList.add('light');
            html.classList.remove('dark');
        }
    }
  }, [resolvedTheme, theme]);


  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <ThemeWatcher />
    </NextThemesProvider>
  )
}
