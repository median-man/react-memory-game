export default function makeGame({ images }) {
  if (!images || !images.length) {
    throw new Error('Must have at least 1 image.')
  }
  
  let isGameOver = false
  let points = 0

  const getImage = name => images.find(image => image.name() === name)
  const isGameWon = () => points === images.length

  return Object.freeze({
    selectImage: name => {
      const image = getImage(name)
      isGameOver = image.isClicked()
      if (!isGameOver) {
        points += 1
      }
      image.click()
      isGameOver = isGameWon() || isGameOver
    },
    isGameOver: () => isGameOver,
    isGameWon,
    points: () => points,
    images: () => images
  })
}
