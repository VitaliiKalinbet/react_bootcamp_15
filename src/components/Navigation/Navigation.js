/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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

const Navigation = ({ isAuth }) => {
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

const mapStateToProps = store => ({
  isAuth: authSelectors.getIsAuth(store),
});

export default connect(mapStateToProps)(Navigation);
