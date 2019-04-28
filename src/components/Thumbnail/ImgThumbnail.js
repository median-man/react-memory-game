import React from 'react';

export default (props) => {
  const { image } = props;
  return (
    <span
      onClick={props.onClick}
      onKeyPress={props.onClick}
      role="button"
      tabIndex={0}
      aria-label={image.name()}
      className="p-1 d-inline-block"
    >
      <img alt={image.alt()} src={`images/${image.src()}`} className="img-thumbnail" />
    </span>
  );
};
