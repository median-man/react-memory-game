import React from 'react'

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
      style={{ position: 'absolute', top: 0, right: 0 }}
    >
      <div className="toast-header">
        <strong className="mr-auto">{heading}</strong>
      </div>
      <div className="toast-body">{body}</div>
    </div>
  )
}
