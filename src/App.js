import React, { Component } from 'react'
import { Container, Column, Row } from './components/Grid'
import ImgThumbnail from './components/Thumbnail'
import Toast from './components/Toast'
import getShuffledArray from './utils'

export default class App extends Component {
  images = this.props.images

  state = {
    images: getShuffledArray(this.images.all),
    score: 0,
    topScore: 0,
    toast: {
      heading: '',
      body: '',
      show: false
    }
  }

  handleImgThumbnailClick(imgName) {
    if (this.images.isImageClicked(imgName)) {
      this.gameLost()
    } else {
      this.images.clickImage(imgName)
      this.incrementScore()
    }
    this.shuffleImages()
  }

  gameLost = () => {
    const toast = {
      heading: 'You lost',
      body: `Final score: ${this.state.score}`,
      show: true
    }
    this.setState({ toast, score: 0 }, () => setTimeout(this.hideToast, 1800))
    this.images.reset()
  }

  hideToast = () =>
    this.setState({ toast: { ...this.state.toast, show: false } })

  shuffleImages = () =>
    this.setState({ images: getShuffledArray(this.images.all) })

  incrementScore = () => {
    let { score, topScore } = this.state
    score += 1
    this.setState({
      score,
      topScore: score > topScore ? score : topScore
    })
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
            </Column>
          </Row>
        </div>
        <Toast {...this.state.toast} />
      </Container>
    )
  }
}
