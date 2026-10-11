import './Button.scss'

function Button({ children, href, variant = 'primary', size = 'md', icon, className = '', ...props }) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
        {icon && <span className="btn__icon">{icon}</span>}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  )
}

export default Button
