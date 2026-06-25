import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const MESSAGES = [
  'Preparing your experience',
  'Purifying the water',
  'Calibrating the system',
]

export function Loader() {
  const [done, setDone] = useState(false)
  const [message, setMessage] = useState(MESSAGES[0])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % MESSAGES.length
      setMessage(MESSAGES[i])
    }, 700)

    const timeout = setTimeout(() => setDone(true), 1900)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`loader ${done ? 'loader--done' : ''}`} aria-hidden={done}>
      <Logo className="loader__logo" size={88} />
      <div className="loader__bar">
        <span />
      </div>
      <p className="loader__text">{message}…</p>
    </div>
  )
}
