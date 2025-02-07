import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    permission: null,
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

    setPermission(permission) {
      this.permission = permission;
      if (process.client) {
        localStorage.setItem('permission', permission);
      }
    },

    loadToken() {
      if (process.client) {
        const token = localStorage.getItem('token');
        const permission = localStorage.getItem('permission');
        if (token) {
          this.permission = permission;
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