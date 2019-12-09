/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import middleware1 from './middleware/md-1';
import throttleMiddleware from './middleware/throttle';
import validationStore from './middleware/validationStore';

const middleware = [middleware1, throttleMiddleware, validationStore];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const preloadedState = {
  notes: {
    notesArr: [
      {
        text: 'Learn JS',
        id: '1',
      },
      {
        text: 'Learn REACT.JS',
        id: '2',
      },
      {
        text: 'Learn NODE.JS',
        id: '3',
      },
    ],
  },
};

const store = createStore(rootReducer, preloadedState, enhancer);

export default store;
