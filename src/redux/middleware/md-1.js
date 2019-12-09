/* eslint-disable */
const middleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.groupEnd(action.type);

  next(action);
};

export default middleware;
