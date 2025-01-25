import { useAuthStore } from '~/stores/authtoken';
import { useRouter } from 'vue-router';

export default defineNuxtRouteMiddleware(() => {
    if (process.server) {
        return;
    }

    const authStore = useAuthStore();
    authStore.loadToken();

    if (!authStore.isAuthenticated) {
        const router = useRouter();
        router.push('/login'); 
    }
});