import { makeImage } from '../lib/entities'

export default class Images {
  constructor(data) {
    this.images = Object.freeze(data.map(data => makeImage(data)))
  }

  get all() {
    return this.images.map(adaptImage)
  }

  getImage = name => this.images.find(image => image.name() === name)

  isImageClicked = name => this.getImage(name).isClicked()

  clickImage = name => {
    this.getImage(name).click()
    // console.log(this.getImage(name))
  }

  reset = () => {
    this.images = this.images.map(adaptImage).map(makeImage)
  }
}

function adaptImage(image) {
  return {
    name: image.name(),
    src: image.src(),
    alt: image.alt()
  }
}
