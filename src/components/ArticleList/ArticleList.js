import React from 'react';
import PropTypes from 'prop-types';
import withLog from '../../hoc/withLog';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = ({ items }) => {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map(el => (
        <ArticleListItem key={el.objectID} url={el.url} title={el.title} />
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withLog(ArticleList);
