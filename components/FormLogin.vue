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
import { showSuccessNotification, showErrorNotification } from "~/utils/notifications";
import { useAuthStore } from "~/stores/authtoken";
import axios from 'axios';

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

      if (this.username == "" || this.password == "") {
        showErrorNotification("Algum campo está vazio.");
        return;
      }

      const data = {
        username: this.username,
        password: this.password,
      };

      try {
        const response = await axios.post("http://127.0.0.1:8000/api/v1/authentication/login/", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responseTwo = await axios.get("http://127.0.0.1:8000/api/v1/accounts/permission/", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${response.data.token}`,
          },
        });

        const authStore = useAuthStore();
        authStore.setPermission(responseTwo.data.group);
        authStore.setToken(response.data.token);
        window.location.href = "/home";
        showSuccessNotification("Login realizado com sucesso!");

      } catch (error) {
        showErrorNotification("Usuário ou senha incorretos.");
      }
    },
  },
};
</script>