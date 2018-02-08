import React, { Component } from 'react';
import { Container, Column, Row } from './components/Grid';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Column size='xs-12'>
            <h1>Hello World</h1>
          </Column>
        </Row>
      </Container>
    );
  }
}
