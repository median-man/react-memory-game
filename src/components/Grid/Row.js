import React from 'react'

export default function Row({ children, className }) {
  return (
    <div className={className ? `row ${className}` : 'row'}>{children}</div>
  )
}
