/* LATERALUS wordmark — Literata display serif, wide tracking, White Sand.
   `as` controls the heading level; `size` is any CSS font-size. */
export default function Wordmark({ size = '2rem', as: Tag = 'span', className = '', style }) {
  return (
    <Tag
      className={`wordmark ${className}`}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: size,
        letterSpacing: '0.26em',
        textTransform: 'uppercase',
        color: 'var(--sand)',
        lineHeight: 1,
        // pull trailing tracking off the right edge so it stays optically centered
        textIndent: '0.26em',
        ...style,
      }}
    >
      Lateralus
    </Tag>
  )
}
