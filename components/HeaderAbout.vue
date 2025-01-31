<template>

    <header class="topbar-nav">
        <nav class="navbar navbar-expand fixed-top">
            <ul class="navbar-nav mr-auto align-items-center">
                <li class="nav-item">
                    <a href="/" class="nav-link">
                        <img src="/assets/images/image.png" alt="" width="50px">
                    </a>
                </li>
            </ul>

            <ul class="navbar-nav align-items-center right-nav-link">
                <li class="nav-item dropdown-lg">
                    <a @click="changeTheme" class="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect"
                        data-toggle="dropdown">
                        <i :class="['fa', mode]"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <Logout/>
    </header>
</template>
<script>
import { useThemeStore } from '~/stores/themeStore';

export default {
    data() {
        return {
            themeStore: useThemeStore(),
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
    methods: {
        changeTheme() {
            this.themeStore.toggleTheme();
        },
    },
};
</script>
<style scoped>
.dropdown-item {
    cursor: pointer;
}
</style>