import axios from 'axios';

const baseUrl = 'http://localhost:9000/notes';

export const getNotes = () => axios.get(baseUrl);

export const postNote = data => axios.post(baseUrl, data);

export const deleteNote = id => axios.delete(`${baseUrl}/${id}`);
