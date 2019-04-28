import React, { Component } from 'react'
import { Container, Column, Row } from './components/Grid'
import ImgThumbnail from './components/Thumbnail'
import { GameLostToast, GameWonToast } from './components/Toast'
import getShuffledArray from './utils'

const GAME_WON_TOAST = 'game-won'
const GAME_LOST_TOAST = 'game-lost'

export default class App extends Component {
  game = this.props.newGame()

  state = {
    images: getShuffledArray(this.game.images()),
    score: 0,
    topScore: 0,
    toast: null,
    isLocked: false
  }

  handleImgThumbnailClick(imgName) {
    if (this.state.isLocked) {
      return
    }
    this.game.selectImage(imgName)
    this.setState({ score: this.game.points() }, () => {
      if (this.game.isGameOver()) {
        this.gameOver(this.game.isGameWon())
      } else {
        this.shuffleImages()
      }
    })
  }

  gameOver = isGameWon =>
    this.showToast(isGameWon ? GAME_WON_TOAST : GAME_LOST_TOAST).then(
      this.reset
    )

  showToast = type => {
    this.setState({ toast: type, isLocked: true })
    return new Promise(resolve => {
      setTimeout(resolve, 1500)
    })
  }

  reset = () => {
    const score = this.game.points()
    this.game = this.props.newGame()
    this.setState(({ topScore }) => ({
      toast: null,
      score: 0,
      topScore: Math.max(score, topScore),
      isLocked: false
    }))
    this.shuffleImages()
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

    const style = {
      transition: 'all 600ms',
      filter: this.state.isLocked ? 'blur(2px)' : 'none',
      opacity: this.state.isLocked ? '0.8' : '1'
    }

    return (
      <div>
        <Container style={style}>
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
        </Container>
        <GameLostToast
          show={this.state.toast === GAME_LOST_TOAST}
          score={this.state.score}
        />
        <GameWonToast show={this.state.toast === GAME_WON_TOAST} />
      </div>
    )
  }
}
