import axios from 'axios';
import endPoints from '../index.js';

const createUser = async (user) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.users.createUser, user, config);
  return response.data;
};

const updateUser = async (userId, user) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.users.updateUser(userId), user, config);
  return response.data;
};

const deleteUser = async (userId) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.users.deleteUser(userId), config);
  return response.data;
};

export { createUser, updateUser, deleteUser };
