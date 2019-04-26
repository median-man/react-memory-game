import React from 'react'
import './toast.css'

const className = show => {
  let className = 'toast mt-3 mr-3'
  className += show ? ' show' : ''
  return className
}

export default function Toast({ show, heading, body }) {
  return (
    <div
      className={className(show)}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ position: 'absolute', top: 0, left: '50%', minWidth: '200px' }}
    >
      <div className="toast-header">
        <strong className="mr-auto">{heading}</strong>
      </div>
      <div className="toast-body">{body}</div>
    </div>
  )
}
