import React, { Component } from 'react';

import './SearchBar.css';

type SearchBarProps = {
  searchText: string;
};

type SearchBarState = {
  searchText: string;
};
class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      searchText: props.searchText,
    };
  }

  componentWillUnmount = (): void => {
    localStorage.setItem('searchText', this.state.searchText);
  };

  changeSearchTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: searchText },
    } = e;
    this.setState({
      searchText,
    });
    localStorage.setItem('searchText', searchText);
  };

  render() {
    return (
      <div className="search_bar">
        <input
          className="search_bar__input"
          placeholder="What we will search?"
          onChange={this.changeSearchTextHandler}
          value={this.state.searchText}
          type="text"
        />
      </div>
    );
  }
}

export default SearchBar;
