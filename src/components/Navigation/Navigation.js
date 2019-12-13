/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
import * as authSelectors from '../../redux/auth/authSelectors';

const styles = {
  header: {
    width: 320,
    margin: '0 auto',
    display: 'flex',
    padding: 15,
  },
  navlink: {
    marginRight: 45,
  },
};

const Navigation = () => {
  const isAuth = useSelector(store => authSelectors.getIsAuth(store));

  return (
    <header style={styles.header}>
      {!isAuth && (
        <>
          <NavLink style={styles.navlink} to={routes.REGISTER.path}>
            Register
          </NavLink>
          <NavLink style={styles.navlink} to={routes.LOGIN.path}>
            Login
          </NavLink>
        </>
      )}
      {isAuth && (
        <NavLink style={styles.navlink} to={routes.DASHBOARD.path}>
          Dashboard
        </NavLink>
      )}
    </header>
  );
};

export default Navigation;
