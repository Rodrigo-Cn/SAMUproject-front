<template>

    <header class="topbar-nav">
        <nav class="navbar navbar-expand fixed-top">
            <ul class="navbar-nav mr-auto align-items-center">
                <li class="nav-item">
                    <a class="nav-link toggle-menu" href="javascript:void();">
                        <i class="icon-menu menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                </li>
            </ul>

            <ul class="navbar-nav align-items-center right-nav-link">
                <li class="nav-item dropdown-lg">
                    <a @click="changeTheme" class="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect"
                        data-toggle="dropdown">
                        <i :class="['fa', mode]"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                        <span class="user-profile">
                            <i class="fa fa-user"></i>
                        </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item user-details">
                            <a href="javaScript:void();">
                                <div class="media">
                                    <div class="media-body">
                                        <h6 class="mt-2 user-title">{{ account.name }}</h6>
                                        <p class="user-subtitle">{{ account.email }}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="dropdown-item">
                            <i class="icon-settings mr-2"></i>Editar Conta
                        </li>
                        <li class="dropdown-divider"></li>
                        <li class="dropdown-item" data-toggle="modal" data-target="#exampleModal">
                            <i class="icon-power mr-2"></i>Sair
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <Logout />
    </header>
</template>
<script>
import { useThemeStore } from '~/stores/themeStore';
import { useAuthStore } from "~/stores/authtoken";
import axios from 'axios';

export default {
    data() {
        return {
            themeStore: useThemeStore(),
            authStore: useAuthStore(),
            account: []
        };
    },
    computed: {
        mode() {
            return this.themeStore.mode;
        },
        theme() {
            return this.themeStore.theme;
        },
    },
    mounted() {
        const authStore = useAuthStore();
        this.fetchCredentials(authStore.token);
    },
    methods: {
        changeTheme() {
            this.themeStore.toggleTheme();
        },
        async fetchCredentials(token) {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/accounts/credentials/", {
                    headers: {
                        "Authorization": `Token ${token}`,
                    }
                });
                this.account = {
                    'id': response.data.id,
                    'name': response.data.name,
                    'email': response.data.email
                };
                return response.data;
            } catch (error) {
                //console.error("Erro ao carregar as credenciais:", error.response?.data || error.message);
                return null;
            }
        }
    },
};
</script>
<style scoped>
.dropdown-item {
    cursor: pointer;
}
</style>