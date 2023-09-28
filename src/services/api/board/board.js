import axios from 'axios';
import endPoints from '../index.js';

const createBoard = async (data) => {
  const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.boards.createBoard, data, config);
    return response.data;
  };

  export const getOneBoard = async (boardId) => {
    const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };
    const response = await axios.get(endPoints.boards.getOneBoard(boardId), config);
    return response.data;
}

export const updateBoard = async (boardId, data) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.boards.updateBoard(boardId), data, config);
  return response.data;
};

export const deleteBoard = async (boardId) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.boards.deleteBoard(boardId), config);
  return response.data;
};

const getBoardList = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.boards.getBoardList, config);
  return response.data;
}
  
  export { createBoard, getBoardList }