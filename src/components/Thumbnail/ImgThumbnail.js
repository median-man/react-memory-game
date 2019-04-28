import React from 'react';

export default (props) => {
  const { label, alt, fileName } = props;
  return (
    <span
      onClick={props.onClick}
      onKeyPress={props.onClick}
      role="button"
      tabIndex={0}
      aria-label={label}
      className="p-1 d-inline-block"
    >
      <img alt={alt} src={`images/${fileName}`} className="img-thumbnail" />
    </span>
  );
};
