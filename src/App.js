import React, { Component } from 'react'
import { Container, Column, Row } from './components/Grid'
import ImgThumbnail from './components/Thumbnail'
import Toast from './components/Toast'
import getShuffledArray from './utils'

export default class App extends Component {
  game = this.props.newGame()

  state = {
    images: getShuffledArray(this.game.images()),
    score: 0,
    topScore: 0,
    toast: {
      heading: '',
      body: '',
      show: false
    }
  }

  handleImgThumbnailClick(imgName) {
    this.game.selectImage(imgName)
    this.setState({ score: this.game.points() })
    if (this.game.isGameOver() && !this.game.isGameWon()) {
      this.gameLost()
    } else {
      this.shuffleImages()
    }
  }

  gameLost = () => {
    const toast = {
      heading: 'You lost',
      body: `Final score: ${this.state.score}`,
      show: true
    }
    console.log(this.game.points())
    this.setState(
      ({ topScore }) => ({
        toast,
        score: 0,
        topScore: Math.max(this.game.points(), topScore)
      }),
      () => {
        this.game = this.props.newGame()
        setTimeout(this.hideToast, 1800)
      }
    )
  }

  hideToast = () =>
    this.setState({ toast: { ...this.state.toast, show: false } })

  shuffleImages = () =>
    this.setState({ images: getShuffledArray(this.game.images()) })

  render() {
    const imgThumbnails = this.state.images.map(image => (
      <ImgThumbnail
        key={image.name()}
        image={image}
        onClick={() => this.handleImgThumbnailClick(image.name())}
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
