import './SectionHeading.scss'

function SectionHeading({ label, title, subtitle, align = 'left', dark = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${dark ? 'section-heading--dark' : ''}`}>
      {label && <span className="section-heading__label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
