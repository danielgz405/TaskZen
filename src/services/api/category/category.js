import axios from 'axios';
import endPoints from '../index.js';

const createCategory = async (data) => {
  const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.categories.createCategory, data, config);
    return response.data;
  };

export const updateCategory = async (categoryId, data) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.categories.updateCategory(categoryId), data, config);
  return response.data;
};

export const deleteCategory = async (categoryId) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.categories.deleteCategory(categoryId), config);
  return response.data;
};

const getCategoryList = async (boardId) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.categories.getCategoryList(boardId), config);
  return response.data;
}
  
  export { createCategory, getCategoryList }