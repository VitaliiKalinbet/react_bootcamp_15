/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Toggle from '../../renderProp/Toggle';

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
      <Toggle>
        {({ isOpen, toggle }) => (
          <>
            <button onClick={toggle} type="button">
              {isOpen ? 'Hide search bar' : 'Show search bar'}
            </button>
            {isOpen && (
              <form onSubmit={this.hahdleSubmit}>
                <input value={query} onChange={this.handleChange} type="text" />
                <button type="submit">Serch</button>
              </form>
            )}
          </>
        )}
      </Toggle>
    );
  }
}

export default SearchBar;
