/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperation';

const DashboardPage = ({ onLogout }) => {
  return (
    <div>
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logoutOperation()),
});

export default connect(null, mapDispatchToProps)(DashboardPage);
