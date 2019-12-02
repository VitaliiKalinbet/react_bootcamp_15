import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ShowsPage from '../pages/ShowsPage/ShowsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Navigation from './Navigation/Navigation';
import ShowDetailsPage from '../pages/ShowDetailsPage/ShowDetailsPage';
import routes from '../routes';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route path={routes.SHOWS_DETAILS} component={ShowDetailsPage} />
          <Route path={routes.SHOWS} component={ShowsPage} />
          <Route component={NotFoundPage} />
          {/* Использование компонрента Route без пропа path и и спользование компонента Redirect взаимозаменяемые вещи, тут обое находятся для примера, но в данном примере до Redirect никогда не дойдет  */}
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
