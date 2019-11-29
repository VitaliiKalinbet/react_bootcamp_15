/* eslint-disable react/prop-types */
import React from 'react';
import withToggle from '../../hoc/withToggle';

const ArticleListItem = ({ url, title }) => {
  return (
    <li style={{ width: '300px' }}>
      <a href={url}>
        <p>{title}</p>
      </a>
    </li>
  );
};

export default withToggle(ArticleListItem);
