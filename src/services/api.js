import axios from 'axios';

export const fetchArticles = (searchQuery = 'news', pageNumber = 1) => {
  return axios.get(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${pageNumber}`,
  );
};

export const somethingFunc = () => {};
