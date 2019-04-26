import React from 'react';

export default (props) => {
  const { image } = props;
  const bootstrapThumbnail = 'img-thumbnail';
  let className = bootstrapThumbnail;
  if (image.classes) className += ` ${image.classes.join(' ')}`;
  return (
    <span
      onClick={() => props.onClick(image.name)}
      onKeyPress={props.onClick}
      role="button"
      tabIndex={0}
      aria-label={image.name}
      className="p-1 d-inline-block"
    >
      <img alt={image.alt} src={`images/${image.src}`} className={className} />
    </span>
  );
};
