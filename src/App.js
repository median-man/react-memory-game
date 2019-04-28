import React, { Component } from 'react'
import { Container, Column, Row } from './components/Grid'
import ImgThumbnail from './components/Thumbnail'
import { GameLostToast } from './components/Toast'
import getShuffledArray from './utils'

export default class App extends Component {
  game = this.props.newGame()

  state = {
    images: getShuffledArray(this.game.images()),
    score: 0,
    topScore: 0,
    showGameLostToast: false
  }

  handleImgThumbnailClick(imgName) {
    this.game.selectImage(imgName)
    this.setState({ score: this.game.points() }, () => {
      if (this.game.isGameOver()) {
        this.gameOver()
      } else {
        this.shuffleImages()
      }
    })
  }

  gameOver = () => {
    if (!this.game.isGameWon()) {
      this.gameLost()
    }
  }

  gameLost = () => {
    this.setState({ showGameLostToast: true }, () =>
      setTimeout(this.reset, 1800)
    )
  }

  reset = () => {
    const score = this.game.points()
    this.game = this.props.newGame()
    this.setState(({ topScore }) => ({
      showGameLostToast: false,
      score: 0,
      topScore: Math.max(score, topScore)
    }))
  }

  shuffleImages = () =>
    this.setState({ images: getShuffledArray(this.game.images()) })

  render() {
    const imgThumbnails = this.state.images.map(image => (
      <ImgThumbnail
        key={image.name()}
        label={image.name()}
        alt={image.alt()}
        fileName={image.src()}
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
        <GameLostToast
          show={this.state.showGameLostToast}
          score={this.state.score}
        />
      </Container>
    )
  }
}
