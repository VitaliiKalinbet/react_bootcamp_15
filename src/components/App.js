import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// import HomePage from '../pages/HomePage/HomePage';
// import ShowsPage from '../pages/ShowsPage/ShowsPage';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import ShowDetailsPage from '../pages/ShowDetailsPage/ShowDetailsPage';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';
import routes from '../routes';

const AsyncHomePage = Loadable({
  loader: () =>
    import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timedOut: 2000,
  pastDelay: 300,
});

const AsyncShowsPage = Loadable({
  loader: () =>
    import('../pages/ShowsPage/ShowsPage' /* webpackChunkName: "shows-page" */),
  loading: Loader,
});

const AsyncNotFoundPage = lazy(() =>
  import(
    '../pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "notfound-page" */
  ),
);

const AsyncShowDetailsPage = lazy(() =>
  import(
    '../pages/ShowDetailsPage/ShowDetailsPage' /* webpackChunkName: "showdetails-page" */
  ),
);

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path={routes.HOME} component={AsyncHomePage} />
            <Route
              path={routes.SHOWS_DETAILS}
              component={AsyncShowDetailsPage}
            />
            <Route path={routes.SHOWS} component={AsyncShowsPage} />
            <Route component={AsyncNotFoundPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
