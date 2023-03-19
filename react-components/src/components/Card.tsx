import React, { Component } from 'react';

import './Card.css';

export type CardProps = {
  id: string;
  name: string;
  price: number;
  added: string;
  description: string;
};

type CardState = {
  selected: boolean;
};

class Card extends Component<CardProps, CardState> {
  state = {
    selected: false,
  };

  render() {
    return (
      <div className="card">
        <h2 className="cardHeader">{this.props.name}</h2>
        <p className="cardDescription">{this.props.description}</p>
        <div className="cardBottom">
          <div>{this.props.added}</div>
          <div className="price">{this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default Card;
