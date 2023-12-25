import axios from "axios";

const localAPI = axios.create({ baseURL: 'http://localhost:4000/' });
const samuraiAPI = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/', withCredentials: true
});

export const usersAPI = {
  // getUsers(currentPage, pageSize) {
  //   return localAPI.get(`usersList?page=${currentPage}&pageSize=${pageSize}`)
  //     .then(response => { return response.data });
  // },

  getUsers: async (currentPage, pageSize) => {
    try {
      const response = await localAPI.get(`usersList?page=${currentPage}&pageSize=${pageSize}`);
      return response.data;
    } catch (error) {
      alert('Сервер не запущен');
      return {};
    }
  },


  getAuth() {
    return samuraiAPI.get('auth/me').then(response => { return response.data });
  },

  getLogin(email, password, rememberMe = false) {
    return samuraiAPI.post('auth/login', { email, password, rememberMe }).then(response => { return response.data });
  },

  getLogout() {
    return samuraiAPI.delete('auth/login').then(response => { return response.data });
  },

  getProfile: async (userId) => {
    try {
      const response = await localAPI.get(`usersList/${userId}`);
      return response.data;
    } catch (error) {
      alert('Сервер не запущен, будут загружены тестовые данные');
      return {
        id: 0,
        status: true,
        name: 'Administrator',
        title: `I'm a cool developer`,
        avatar: 'https://i.pravatar.cc/300?img=0',
        location: { country: 'Russia', city: 'Krasnodar' },
        data: '1 april 1991', education: 'London University', website: 'http://google.com/'
      };
    }
  },

  postFollow(userId, status) { return localAPI.post(`follow/${userId}`, { status: status }) },

  postTitle: async (userId, title) => {
    try {
      const response = await localAPI.post(`updateTitle/${userId}`, { newTitle: title });
      return response.data;
    } catch (error) {
      alert('Сервер не запущен');
      return {};
    }
  }
};