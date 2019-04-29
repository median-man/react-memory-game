import React from 'react'
import FlipMove from 'react-flip-move'
import ImgThumbnail from './ImgThumbnail'

export default function ThumbnailContainer({ images }) {
  const imgThumbnails = images.map(image => (
    <div key={image.label} class="d-inline-block">
      <ImgThumbnail {...image} />
    </div>
  ))
  return (
    <FlipMove
      duration={400}
      delay={50}
      staggerDurationBy={40}
      staggerDelayBy={10}
      appearAnimation="fade"
    >
      {imgThumbnails}
    </FlipMove>
  )
}
