import React, { Component } from 'react';
import { CardProps } from '../components/Card';
import CardList from '../components/CardList';
import PageTitle from '../components/PageTitle';
import SearchBar from '../components/SearchBar';

interface AppState {
  searchText: string;
}

const testList: Array<CardProps> = [
  {
    id: 'dsfsdfee',
    name: 'Card 1',
    added: 'March 20 2023',
    price: 45,
    description: 'Some description',
  },
  {
    id: 'sdfsdfsdfe',
    name: 'Card 2',
    added: 'March 22 2023',
    price: 55,
    description: 'Some description 2',
  },
  {
    id: 'dsffee',
    name: 'Card 3',
    added: 'April 20 2023',
    price: 15,
    description: 'Some description 3',
  },
  {
    id: 'ewfefwf',
    name: 'Card 4',
    added: 'March 10 2023',
    price: 22,
    description: 'Some description 4',
  },
];

class Root extends Component<Record<string, never>, AppState> {
  AppState = { searchText: localStorage['searchText'] || '' };
  render() {
    return (
      <header>
        <PageTitle title="Main Page" />
        <SearchBar searchText={this.AppState.searchText} />
        <CardList cardList={testList} />
      </header>
    );
  }
}

export default Root;
