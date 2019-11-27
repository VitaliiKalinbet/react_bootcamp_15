/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  hahdleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    this.props.onSearch(query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.hahdleSubmit}>
        <input value={query} onChange={this.handleChange} type="text" />
        <button type="submit">Serch</button>
      </form>
    );
  }
}

export default SearchBar;
