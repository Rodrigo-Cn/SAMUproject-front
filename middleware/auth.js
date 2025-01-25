import { useAuthStore } from '~/stores/authtoken';

export default defineNuxtRouteMiddleware(() => {
    if (process.server) {
        return;
    }

    const authStore = useAuthStore();
    authStore.loadToken();

    if (!authStore.isAuthenticated) {
        return navigateTo('/login', { replace: true });
    }
});
