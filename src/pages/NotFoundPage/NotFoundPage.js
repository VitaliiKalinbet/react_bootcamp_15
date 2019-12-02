import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Такая страница не найдена</h2>
      <p>
        Вот наша домашняя страница: <NavLink to={routes.HOME}> дом</NavLink>
      </p>
    </div>
  );
};

export default NotFoundPage;
