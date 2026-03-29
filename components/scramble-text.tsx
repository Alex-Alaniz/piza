"use client"

import { useCallback, useRef, useState } from "react"

const GLYPHS = "!@#$%^&*()_+-=<>?/[]{}Xx"

interface ScrambleTextProps {
  text: string
  className?: string
  as?: "span" | "p" | "h3" | "div"
}

export default function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scramble = useCallback(() => {
    let progress = 0
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      progress += 1 / (text.length * 1.5)
      const scrambled = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (i / text.length < progress) return text[i]
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        })
        .join("")
      setDisplay(scrambled)
      if (progress >= 1) {
        setDisplay(text)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, 30)
  }, [text])

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDisplay(text)
  }, [text])

  return (
    <Tag
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      {display}
    </Tag>
  )
}
