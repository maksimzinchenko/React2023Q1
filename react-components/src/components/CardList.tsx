import React, { Component } from 'react';
import Container from '../UI/Container';

import Card, { CardProps } from './Card';
import './CardList.css';

type CardListProps = {
  cardList: CardProps[];
};

type CardListState = {
  foundCards: CardProps[];
};

class CardList extends Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
    this.state = {
      foundCards: [],
    };
  }

  render() {
    return (
      <Container>
        <div className="cardList">
          {this.props.cardList.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              price={card.price}
              description={card.description}
              added={card.added}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default CardList;
