<template>
    <form @submit="login($event)">
        <div class="form-group">
            <label for="exampleInputEmailId" class="sr-only">Email ID</label>
            <div class="position-relative has-icon-right">
                <input v-model="username" type="text" id="exampleInputEmailId" class="form-control input-shadow"
                    placeholder="Usuário" />
                <div class="form-control-position">
                    <i class="icon-user"></i>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword" class="sr-only">Password</label>
            <div class="position-relative has-icon-right">
                <input v-model="password" type="password" id="exampleInputPassword" class="form-control input-shadow"
                    placeholder="Senha" />
                <div class="form-control-position">
                    <i class="icon-lock"></i>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-light btn-block">Entrar</button>
        <div class="text-center mt-3">Seja bem-vindo!</div>
    </form>
</template>
<script>
import { useAuthStore } from "~/stores/authtoken";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();

      const data = {
        username: this.username,
        password: this.password,
      };

      try {
        const response = await $fetch("http://127.0.0.1:8000/api/v1/authentication/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        });
        const authStore = useAuthStore();
        authStore.setToken(response.token);
        navigateTo("/home");

      } catch (error) {
        console.error(error);
        alert("Falha no login. Verifique suas credenciais.");
      }
    },
  },
};
</script>
