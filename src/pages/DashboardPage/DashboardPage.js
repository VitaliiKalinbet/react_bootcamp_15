/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperation';
import Modal from '../../components/Modal/Modal';
import Counter from '../../components/Counter/Counter';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logoutOperation());

  const [isModalOpen, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  // аналог componentDidMount
  useEffect(() => {
    // асинхронные запросы, работать с LS...
    // console.log('ANALOG componentDidMount work');
  }, []);

  // аналог componentDidUpdate
  useEffect(() => {
    // асинхронные запросы, работать с LS...
    // console.log('ANALOG componentDidUpdate work');
  }, [isModalOpen]);

  return (
    <div>
      <button onClick={onLogout} type="button">
        Logout
      </button>
      <hr />

      <div>
        <button type="button" onClick={openModal}>
          Open modal
        </button>
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
      <hr />

      <Counter />
    </div>
  );
};

export default DashboardPage;
