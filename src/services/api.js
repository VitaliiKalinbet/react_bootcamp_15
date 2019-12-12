import axios from 'axios';

axios.defaults.baseURL = 'https://kids-like.goit.co.ua/api/v1';

export const registerUser = data => axios.post('/auth/register', data);

export const loginUser = data => axios.post('/auth/login', data);

export const logoutUser = () => axios.post('/auth/logout');
