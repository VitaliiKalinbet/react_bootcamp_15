import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList';
import * as API from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';

// console.log(API);

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    pageNumber: 1,
    query: '',
  };

  componentDidMount() {
    const { query, pageNumber } = this.state;
    this.getArticles(query, pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { pageNumber, query } = this.state;
    if (prevState.pageNumber !== pageNumber || prevState.query !== query) {
      this.getArticles(query, pageNumber);
    }
  }

  getArticles = (query, page) => {
    this.setState({ isLoading: true });

    API.fetchArticles(query, page)
      .then(res =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...res.data.hits],
        })),
      )
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  onSearch = queryParametr => {
    this.setState({ query: queryParametr, articles: [], pageNumber: 1 });
  };

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        <ArticleList items={articles} />
        {isLoading && <Loader />}

        <button onClick={this.changePage} type="button">
          Load more
        </button>
      </>
    );
  }
}

export default App;
