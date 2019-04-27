export default class Images {
  constructor(data) {
    this.images = Object.freeze(data.map(data => new Image(data)))
  }
  
  get all() {
    return this.images
  }

  getImage = name => this.images.find(image => image.name === name)

  isImageClicked = name => this.getImage(name).isClicked

  clickImage = name => {
    this.getImage(name).isClicked = true
  }

  reset = () => this.images.forEach(image => (image.isClicked = false))
}

class Image {
  constructor({ name, src, alt }) {
    this.name = name
    this.src = src
    this.alt = alt
    this.isClicked = false
  }
}
