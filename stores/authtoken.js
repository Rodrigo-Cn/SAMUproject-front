import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {

    setToken(token) {
      this.token = token;
      if (process.client) {
        localStorage.setItem('token', token);
      }
    },

    loadToken() {
      if (process.client) {
        const token = localStorage.getItem('token');
        if (token) {
          this.token = token;
        }
      }
    },

    removeToken() {
      this.token = null;
      if (process.client) {
        localStorage.removeItem('token');
      }
    },
  },
});
