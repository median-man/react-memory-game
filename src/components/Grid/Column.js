import React from 'react'

export default function Column({ size, children, style }) {
  return (
    <div
      className={size
        .split(' ')
        .map(el => `col-${el}`)
        .join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}
