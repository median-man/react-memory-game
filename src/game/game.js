export default class Game {
  _gameOverSubscriber = () => {}
  _scoreChangeSubscriber = () => {}
  
  constructor(images) {
    this.images = images
    this.score = new Score()
  }

  set onGameOver(cb) {
    this._gameOverSubscriber = cb
  }

  set onScoreChange(cb) {
    this._scoreChangeSubscriber = cb
  }

  chooseImage = imgName => {
    if (this.images.isImageClicked(imgName)) {
      this._gameLost()
    } else {
      this.images.clickImages(imgName)
      this._increaseScore()
    }
  }

  resetPoints = () => {
    this.score.resetPoints()
  }

  get isGameWon() {
    return this.score.points === this.images.length;
  }

  _gameOver() {
    this._gameOverSubscriber({...this.score})
  }

  _increaseScore = () => {
    this.score.incrementPoints()
    this._scoreChangeSubscriber({ ...this.score })
  }
}

class Score {
  points = 0
  highScore = 0

  incrementPoints = () => {
    this.points += 1
    this.highScore = Math.max(this.points, this.highScore)
  }

  reset = () => {
    this.points = 0
  }
}
