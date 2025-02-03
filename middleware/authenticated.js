import { useAuthStore } from '~/stores/authtoken';

export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore();
    
    authStore.loadToken();

    if (authStore.isAuthenticated) {
        window.location.href = "/home";
    }
});
