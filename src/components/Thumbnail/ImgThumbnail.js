import React from 'react';

export default function ImgThumbnail({ alt, src, classes }) {
  const bootstrapThumbnail = 'img-thumbnail';
  let className = bootstrapThumbnail;
  if (classes) className += ` ${classes.join(' ')}`;
  return <img alt={alt} src={src} className={className} />;
}
