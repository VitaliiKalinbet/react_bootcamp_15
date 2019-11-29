import axios from 'axios';

export const fetchArticles = (searchQuery = 'css', pageNumber = 1) => {
  return axios.get(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${pageNumber}`,
  );
};

export const somethingFunc = () => {};
