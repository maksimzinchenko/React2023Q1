import React, { Component } from 'react';
import Navbar from './Navbar';

type Props = {
  title: string;
};

class PageTitle extends Component<Props, never> {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <Navbar />
      </header>
    );
  }
}

export default PageTitle;
