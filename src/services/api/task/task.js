import axios from 'axios';
import endPoints from '../index.js';

export const createTask = async (data, categoryId) => {
  const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.tasks.createTask(categoryId), data, config);
    return response.data;
  };

 export const deleteTask = async (categoryId, id) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.tasks.deleteTask(categoryId, id), config);
  return response.data;
};