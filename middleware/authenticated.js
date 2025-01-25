import { useAuthStore } from '~/stores/authtoken';

export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore();
    
    authStore.loadToken();

    if (authStore.isAuthenticated) {
        const router = useRouter();
        router.push('/home'); 
    }
});
