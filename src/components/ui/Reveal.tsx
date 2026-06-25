import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  y?: number
  delay?: number
  stagger?: number
  /** CSS selector for staggered children inside this wrapper. */
  selector?: string
}

export function Reveal({
  children,
  as: Tag = 'div',
  className,
  y,
  delay,
  stagger,
  selector,
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>({ y, delay, stagger, selector })
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
