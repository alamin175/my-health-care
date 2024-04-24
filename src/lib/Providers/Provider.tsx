'use client'
import React from 'react'
import { theme } from '../theme/theme'
import { ThemeProvider } from '@mui/material'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children} </ThemeProvider>
}

export default Provider
