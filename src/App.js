import React, { Component } from 'react';
import { Container, Column, Row } from './components/Grid';
import ImgThumbnail from './components/Thumbnail';
import images from './images.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = { images };
  }
  handleImgThumbnailClick(imgName) {
    console.log(`${imgName} clicked`);
  }
  render() {
    const imgThumbnails = this.state.images.map(image => (
      <ImgThumbnail
        key={image.name}
        image={image}
        onClick={this.handleImgThumbnailClick}
      />));

    return (
      <Container>
        <Row>
          <Column size="xs-12">
            <h1>Magic Memory</h1>
          </Column>
        </Row>
        <Row>
          <Column size="xs-12">
            {imgThumbnails}
          </Column>
        </Row>
      </Container>
    );
  }
}
