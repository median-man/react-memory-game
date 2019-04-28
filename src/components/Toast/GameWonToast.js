import React from 'react'
import Toast from './Toast'
import { Indicator } from '../Indicator';

const green = '#28a745'

export default function GameWonToast({ show }) {
  const props = {
    show,
    heading: 'You win!',
    body: 'All images selected once. Congratulations wizard!',
    indicator: <Indicator color={green} />
  }
  return <Toast {...props} />
}
