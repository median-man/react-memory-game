import React from 'react'

export default function Indicator({color}) {
  return (
    <svg
      className="rounded mr-2"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
      width="15"
      height="15"
    >
      <rect fill={color} width="100%" height="100%" />
    </svg>
  )
}
