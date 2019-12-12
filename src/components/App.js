import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../routes';
import Navigation from './Navigation/Navigation';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const styles = {
  container: {
    width: 320,
    margin: '0 auto',
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div style={styles.container}>
        <Switch>
          <Route
            path={routes.REGISTER.path}
            component={routes.REGISTER.component}
          />
          <Route path={routes.LOGIN.path} component={routes.LOGIN.component} />
          <ProtectedRoute
            path={routes.DASHBOARD.path}
            component={routes.DASHBOARD.component}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
