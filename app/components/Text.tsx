import React, { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TextSize = "h1" | "h2" | "h3" | "h4" | "body" | "caption"
type FontWeight = "normal" | "medium" | "semibold" | 'bold'
type FontFamily = "montserrat"

interface TextProps {
    size?: TextSize
    weight?: FontWeight
    fontFamily?: FontFamily
    children: ReactNode
    className?: string
}

const sizeClasses: Record<TextSize, string> = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    body: "text-base",
    caption: "text-sm",
};

const weightClasses: Record<FontWeight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
};

const fontClasses: Record<FontFamily, string> = {
    montserrat: "montserrat",
};

function Text(props: TextProps) {
    const { children, className, fontFamily = 'montserrat', size = "h4", weight = 'normal' } = props

    const combinedClassName = twMerge(
        fontClasses[fontFamily],
        weightClasses[weight],
        sizeClasses[size],
        className
    )

    return (
        <p className={combinedClassName}>{children}</p>
    )
}

export default Text