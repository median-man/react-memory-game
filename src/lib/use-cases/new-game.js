import { makeImage, makeGame } from '../entities'

export default function makeNewGame({ imageData }) {
  return function newGame() {
    const images = imageData.map(makeImage)
    return makeGame({ images })
  }
}
