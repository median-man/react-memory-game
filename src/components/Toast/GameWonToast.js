import React from 'react'
import Toast from './Toast'

export default function GameWonToast({ show }) {
  const props = {
    show,
    heading: 'You win!',
    body: 'All images selected once. Congratulations wizard!'
  }
  return <Toast {...props} />
}
