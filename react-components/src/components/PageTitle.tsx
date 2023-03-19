import React, { Component } from 'react';
import Container from '../UI/Container';
import Navbar from './Navbar';

type Props = {
  title: string;
};

class PageTitle extends Component<Props, never> {
  render() {
    return (
      <header>
        <Container>
          <h1>{this.props.title}</h1>
          <Navbar />
        </Container>
      </header>
    );
  }
}

export default PageTitle;
