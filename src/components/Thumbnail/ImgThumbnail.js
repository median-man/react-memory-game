import React from 'react';

export default function ImgThumbnail({ image, onClick }) {
  const bootstrapThumbnail = 'img-thumbnail';
  let className = bootstrapThumbnail;
  if (image.classes) className += ` ${image.classes.join(' ')}`;
  return (
    <span
      onClick={() => onClick(image.name)}
      onKeyPress={event => console.log(event)}
      role="button"
      tabIndex={0}
      aria-label={image.name}
    >
      <img alt={image.alt} src={`images/${image.src}`} className={className} />
    </span>
  );
}
