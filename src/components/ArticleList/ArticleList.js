import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({ items }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el.objectID}>
          <a href={el.url}>
            <p>{el.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ArticleList;
