import React, { Component } from 'react'
import getShuffledArray from './utils'
import { Container, Column, Row } from './components/Grid'
import ImgThumbnail from './components/Thumbnail'
import images from './images.json'
import Toast from './components/Toast'

const hiddenToast = () => ({
  heading: '',
  body: '',
  show: false
})

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      images: getShuffledArray(images),
      score: 0,
      topScore: 0,
      toast: hiddenToast()
    }
  }

  handleImgThumbnailClick(imgName) {
    const selectedImage = this.state.images.find(
      image => image.name === imgName
    )
    if (selectedImage.isClicked) {
      this.showGameLostToast()
      this.resetGame()
    } else {
      selectedImage.isClicked = true
      this.incrementScore()
    }
    this.setState({ images: getShuffledArray(this.state.images) })
  }

  showGameLostToast = async () => {
    const toast = {
      heading: 'You lost',
      body: `Final score: ${this.state.score}`,
      show: true
    }
    this.setState({ toast }, () => setTimeout(this.hideToast, 2000))
  }

  hideToast = () => this.setState({ toast: hiddenToast() })

  resetGame() {
    const resetImages = this.state.images
    resetImages.forEach(image => (image.isClicked = false))
    this.setState({ images: resetImages, score: 0 })
  }

  incrementScore() {
    let { score, topScore } = this.state
    score += 1
    if (score > topScore) topScore = score
    this.setState({ score, topScore })
  }

  render() {
    const imgThumbnails = this.state.images.map(image => (
      <ImgThumbnail
        key={image.name}
        image={image}
        onClick={() => this.handleImgThumbnailClick(image.name)}
      />
    ))

    return (
      <Container>
        <h1>Magic Memory</h1>
        <Row>
          <Column size="md-8">
            <span className="pl-1 pr-2">Score: {this.state.score}</span>
            <span className="pl-2 border-left">
              Top Score: {this.state.topScore}
            </span>
          </Column>
        </Row>
        <div className="pt-3">
          <Row>
            <Column size="12" style={{ maxWidth: '500px' }}>
              {imgThumbnails}
              <Toast {...this.state.toast} />
            </Column>
          </Row>
        </div>
      </Container>
    )
  }
}
