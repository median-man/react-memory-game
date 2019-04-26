import React from 'react'
import './toast.css'

function ToastContainer({ children, show }) {
  let className = 'toast mt-3 mr-3'
  className += show ? ' show' : ''

  const inlineStyles = {
    position: 'absolute',
    top: 0,
    left: '50%',
    minWidth: '200px'
  }

  return (
    <div
      className={className}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={inlineStyles}
    >
      {children}
    </div>
  )
}

export default class Toast extends React.Component {
  state = {
    show: false
  }

  componentDidMount() {
    this.setState({ show: true }, () => setTimeout(this.hide, 3000))
  }

  hide = () => {
    this.setState({ show: false }, this.props.onHide)
  }

  render() {
    const { heading, body } = this.props
    return (
      <ToastContainer show={this.state.show}>
        <div className="toast-header">
          <strong className="mr-auto">{heading}</strong>
        </div>
        <div className="toast-body">{body}</div>
      </ToastContainer>
    )
  }
}
