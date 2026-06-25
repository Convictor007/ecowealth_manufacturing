import { useEffect, useRef, useState } from 'react'

interface ProgressiveImageProps {
  src: string
  alt: string
  className?: string
  /** Visual theme of the loading placeholder. */
  theme?: 'dark' | 'light'
  loading?: 'lazy' | 'eager'
}

export function ProgressiveImage({
  src,
  alt,
  className,
  theme = 'dark',
  loading = 'lazy',
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Handle images already cached by the browser (onLoad may not fire).
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [src])

  return (
    <span className={`pimg pimg--${theme} ${className ?? ''}`}>
      {!loaded && (
        <span className="pimg__loader" role="status" aria-label="Loading image">
          <span className="pimg__spinner" />
          <span className="pimg__loading-text">Loading…</span>
        </span>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`pimg__img ${loaded ? 'is-loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </span>
  )
}
