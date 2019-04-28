import React from 'react'
import Toast from './Toast'

export default function GameLostToast({ show, score }) {
  const props = {
    show,
    heading: 'You lost',
    body: `Final score: ${score}`
  }
  return <Toast {...props} />
}
