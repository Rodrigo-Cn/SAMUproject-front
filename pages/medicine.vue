<template>
    <div :class="['bg-theme', themeStore.theme]">
        <div id="wrapper">
            <NavBarAdministrator />
            <Header />
            <Footer/>
        </div>
    </div>
</template>
<script setup>
import { useThemeStore } from "~/stores/themeStore";
import { title } from "/composables/title";

definePageMeta({
    middleware: ['auth']
});

const themeStore = useThemeStore();
title("Medicamentos");
</script>