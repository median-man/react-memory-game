import { makeImage, makeGame } from '../entities'

// uses a subset of images for development
const { REACT_APP_IMAGE_SLICE_AT: sliceAt } = process.env

export default function makeNewGame({ imageData }) {
  console.log(sliceAt)
  return function newGame() {
    const images = sliceAt
      ? imageData.slice(0, sliceAt).map(makeImage)
      : imageData.map(makeImage)

    return makeGame({ images })
  }
}
