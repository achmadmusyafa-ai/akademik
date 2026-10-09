export function Icon({ name, className = '', filled = false, style }) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'material-symbols-filled' : ''} ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1", ...style } : style}
    >
      {name}
    </span>
  )
}

export function Badge({ children, className = '' }) {
  return (
    <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] leading-[14px] tracking-[0.04em] ${className}`}>
      {children}
    </span>
  )
}
