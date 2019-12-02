/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import * as API from '../../services/api';

class ShowDetailsPage extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    this.fetchShow();
  }

  fetchShow = () => {
    const { match } = this.props;
    const { showId } = match.params;
    API.searchExactShow(showId).then(res => this.setState({ show: res.data }));
  };

  returnToPrevLocation = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <button type="button" onClick={this.returnToPrevLocation}>
          Go back
        </button>
        <h2>Details</h2>
        {show && (
          <>
            <img src={show.image.medium} alt="" />
            <h2>{show.name}</h2>
          </>
        )}
      </div>
    );
  }
}

export default ShowDetailsPage;
