"use client"

import { ThemeProvider } from "next-themes"
import React from "react"
interface Props{
    children:React.ReactNode
}

export const Provider = ({children}:Props) =>{
    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

