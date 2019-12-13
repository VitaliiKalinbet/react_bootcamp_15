/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 200px;
  padding: 16px;
  background-color: #fff;
`;

const Modal = ({ onClose }) => {
  const backdropRef = useRef(null);

  const keyDownHandler = e => {
    if (e.code !== 'Escape') {
      return;
    }

    onClose();
  };

  // const backdropCloseModal = e => {
  //   const { currentTarget, target } = e;
  //   if (currentTarget !== target) {
  //     return;
  //   }
  //   onClose();
  // };

  const backdropCloseModalWithHooks = e => {
    // console.log('backdropRef.current ', backdropRef.current);
    // console.log('e.target ', e.target);
    if (backdropRef.current && e.target !== backdropRef.current) {
      return;
    }
    onClose();
  };

  // аналог componentDidMount and componentWillUnmount
  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    // console.log('аналог componentDidMount and componentWillUnmount work');

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      // console.log('аналог componentWillUnmount work');
    };
  }, [keyDownHandler]);

  return (
    <Backdrop ref={backdropRef} onClick={backdropCloseModalWithHooks}>
      <Content>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad animi
          officia consectetur sequi quia recusandae aspernatur at, omnis
          asperiores perspiciatis corporis ducimus laboriosam facere fugiat
          velit quos sit rerum necessitatibus, saepe deleniti cupiditate vel
          iure. Placeat, nemo quis iusto itaque, quos ipsam tempora odit animi
          cupiditate reprehenderit, rem rerum magni asperiores corrupti
          necessitatibus dolorum quas.
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </Content>
    </Backdrop>
  );
};

export default Modal;
