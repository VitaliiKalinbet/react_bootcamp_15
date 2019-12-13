import React, { useState, useCallback } from 'react';

const callbackInstances = new Set();

const Counter = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const incrementCount1 = useCallback(() => {
    setCount1(prevCount => prevCount + 1);
  }, []);

  const incrementCount2 = useCallback(() => {
    setCount2(prevCount => prevCount + 1);
  }, []);

  // const incrementCount1 = () => {
  //   setCount1(prevCount => prevCount + 1);
  // };

  // const incrementCount2 = () => {
  //   setCount2(prevCount => prevCount + 1);
  // };

  callbackInstances.add(incrementCount1);
  callbackInstances.add(incrementCount2);

  // console.dir(callbackInstances);

  return (
    <div>
      <h1>Callback instances: {callbackInstances.size}</h1>
      <button type="button" onClick={incrementCount1}>
        Count1: {count1}
      </button>
      <button type="button" onClick={incrementCount2}>
        Count2: {count2}
      </button>
    </div>
  );
};

export default Counter;
