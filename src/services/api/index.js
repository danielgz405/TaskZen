const API = `${process.env.NEXT_PUBLIC_API_URL}`;

const endPoints = {
  auth: {
    login: `${API}/login`,
  },
  users: {
    profile: `${API}/profile`,
    createUser: `${API}/signup`,
    updateUser: (id) => `${API}/users/update/${id}`,
    deleteUser: (id) => `${API}/users/delete/${id}`,
  },
  boards: {
    createBoard: `${API}/board`,
    getBoardList: `${API}/board/list`,
    getOneBoard: (boardId) => `${API}/board/one/${boardId}`,
    updateBoard: (boardId) => `${API}/board/update/${boardId}`,
    deleteBoard: (boardId) => `${API}/board/delete/${boardId}`,
  },
  categories : {
    createCategory: `${API}/category`,
    getCategoryList: (boardId) => `${API}/category/list/${boardId}`,
    updateCategory: (categoryId) => `${API}/category/update/${categoryId}`,
    deleteCategory: (categoryId) => `${API}/category/delete/${categoryId}`,
  },
  tasks: {
    createTask: (categoryId) => `${API}/task/${categoryId}`,
    deleteTask: (categoryId, id) => `${API}/task/delete/${categoryId}/${id}`
  }
}

export default endPoints;