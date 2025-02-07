<template>
    <div>
        <NavBarAdministrator v-if="authStore.permission === 'administrator'" />
        <NavBarDoctor  v-if="authStore.permission === 'doctor'"  />
        <Header />
    </div>
</template>

<script>
import { useAuthStore } from "~/stores/authtoken";

export default {
  computed: {
    authStore() {
      return useAuthStore();
    }
  }
}
</script>
