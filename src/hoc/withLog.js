/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';

// const withLog = function(BaseComponent) {
//   return function WithLog(props) {
//     console.log(`Calling ${BaseComponent.name} with props: ${props}`);
//     console.dir(props);
//     return <BaseComponent {...props} />;
//   };
// };

// export default withLog;

import React, { Component } from 'react';

const withLog = WrappedComponent => {
  return class WithLog extends Component {
    componentDidMount() {
      console.group(`Logger ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        console.group(`Logger ouput @${WrappedComponent.name}`);
        console.log(this.props);
        console.groupEnd();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLog;
