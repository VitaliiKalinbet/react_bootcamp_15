/* eslint-disable react/prop-types */
import React from 'react';

const Loader = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time...
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

export default Loader;
