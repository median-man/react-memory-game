import React from 'react'
import './toast.css'

export default class Toast extends React.Component {
  render() {
    const { heading, body, show, indicator } = this.props

    return (
      <ToastContainer show={show}>
        <div className="toast-header">
          {indicator}
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
