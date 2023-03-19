import React, { Component } from 'react';
import Container from '../UI/Container';
import Navbar from './Navbar';

import './PageTitle.css';

type Props = {
  title: string;
};

class PageTitle extends Component<Props, never> {
  render() {
    return (
      <header>
        <Container>
          <h1 className="pageTitle">{this.props.title}</h1>
          <Navbar />
        </Container>
      </header>
    );
  }
}

export default PageTitle;
