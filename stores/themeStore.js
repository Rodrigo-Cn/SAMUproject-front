import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: 'fa-moon',
    theme: 'bg-theme9',
  }),
  actions: {
    toggleTheme() {
      if (this.mode === 'fa-moon') {
        this.mode = 'fa-sun';
        this.theme = 'bg-theme10';
      } else {
        this.mode = 'fa-moon';
        this.theme = 'bg-theme9';
      }
    },
  },
});
