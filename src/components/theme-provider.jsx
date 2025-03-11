"use client"

import React from "react"
import { ThemeProvider } from "next-themes"

export function ThemeProviderComponent({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}