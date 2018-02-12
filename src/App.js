import React, { Component } from 'react';
import { Container, Column, Row } from './components/Grid';
import ImgThumbnail from './components/Thumbnail';
import images from './images.json';

export default class App extends Component {
  render() {
    const imgThumbnails = images.map(image => (
      <ImgThumbnail
        alt={image.alt}
        src={`images/${image.src}`} />));
    return (
      <Container>
        <Row>
          <Column size='xs-12'>
            <h1>Hello World</h1>
          </Column>
        </Row>
        <Row>
          <Column size='xs-12'>
            {imgThumbnails}
          </Column>
        </Row>
      </Container>
    );
  }
}
