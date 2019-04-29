import React from 'react'

export default function ImgThumbnail(props) {
  const { label, alt, fileName, onClick } = props
  const button = React.createRef()
  const handleClick = () => {
    button.current.blur()
    onClick()
  }
  return (
    <span
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
      aria-label={label}
      className="p-1 d-inline-block"
      ref={button}
    >
      <img alt={alt} src={`images/${fileName}`} className="img-thumbnail" />
    </span>
  )
}
