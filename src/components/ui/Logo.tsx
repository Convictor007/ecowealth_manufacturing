import logo from '../../assets/images/ecowealth_icon.png'

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 44 }: LogoProps) {
  return (
    <img
      className={`brand-logo ${className ?? ''}`}
      src={logo}
      alt="Eco-Wealth Modern Labatiba logo"
      width={size}
      height={size}
      loading="eager"
    />
  )
}
