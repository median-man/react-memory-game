import React from 'react';

export default (props) => {
  const { label, alt, fileName } = props;
  const button = React.createRef()
  const onClick = () => {
    button.current.blur()
    props.onClick()
  }
  return (
    <span
      onClick={onClick}
      onKeyPress={props.onClick}
      role="button"
      tabIndex={0}
      aria-label={label}
      className="p-1 d-inline-block"
      ref={button}
    >
      <img alt={alt} src={`images/${fileName}`} className="img-thumbnail" />
    </span>
  );
};
