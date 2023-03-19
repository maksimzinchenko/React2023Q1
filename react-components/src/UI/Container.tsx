import React, { Component, ReactNode } from 'react';

class Container extends Component<{ children: ReactNode }> {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Container;
