import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '500px',
        margin: '0 auto',
        listStyle: 'none',
      }}
    >
      <li>
        <NavLink to={routes.HOME}>Home page</NavLink>
      </li>
      <li>
        <NavLink to={routes.SHOWS}>Shows page</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
