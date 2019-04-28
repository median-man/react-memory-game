import React from 'react'
import Toast from './Toast'
import { Indicator } from '../Indicator';

const red = '#dc3545'

export default function GameLostToast({ show, score }) {
  const props = {
    show,
    heading: 'You lost',
    body: `Final score: ${score}`,
    indicator: <Indicator color={red} />
  }
  return <Toast {...props} />
}
