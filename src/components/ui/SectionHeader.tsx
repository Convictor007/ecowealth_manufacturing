import { Reveal } from './Reveal'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <Reveal className={`section-header section-header--${align}`} selector="[data-reveal]" stagger={0.1}>
      <p className="section-header__eyebrow" data-reveal>
        <span className="dot" /> {eyebrow}
      </p>
      <h2 className="section-header__title" data-reveal>
        {title}
      </h2>
      {description && (
        <p className="section-header__desc" data-reveal>
          {description}
        </p>
      )}
    </Reveal>
  )
}
