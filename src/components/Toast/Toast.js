import React from 'react'
import './toast.css'

export default class Toast extends React.Component {
  render() {
    const { heading, body, show } = this.props

    return (
      <ToastContainer show={show}>
        <div className="toast-header">
          <Indicator />
          <strong className="mr-auto">{heading}</strong>
        </div>
        <div className="toast-body">{body}</div>
      </ToastContainer>
    )
  }
}

function ToastContainer({ show, children }) {
  const styles = {
    top: show ? 0 : '-100px',
    opacity: show ? 1 : 0
  }

  return (
    <div
      className="toast mt-3 mr-3"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={styles}
    >
      {children}
    </div>
  )
}

function Indicator() {
  const red = '#dc3545'

  return (
    <svg
      className="rounded mr-2"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
      width="15"
      height="15"
    >
      <rect fill={red} width="100%" height="100%" />
    </svg>
  )
}
