<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" :class="['bg-theme', themeStore.theme]" role="document">
            <div class="modal-content" :class="['bg-theme', themeStore.theme]">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel"><i class="fa fa-warning fa-1x text-warning" aria-hidden="true"></i> Sair</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="button-close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Deseja realmente sair da sua conta?
                </div>
                <div class="modal-footer">
                    <button @click="logout" id="logouton" type="button" class="btn btn-secondary" data-dismiss="modal">Sim</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useThemeStore } from "~/stores/themeStore";
import { useAuthStore } from "~/stores/authtoken";

export default {
    setup() {
        const themeStore = useThemeStore();
        return { themeStore };
    },
    methods:{
        logout(){
            const authStore = useAuthStore();
            authStore.removeToken();
            navigateTo("/");
        }
    }
};
</script>
<style scoped>
#button-close {
    color: red;
}
#exampleModalLabel{
    color: #ff8800;
}
#logouton{
    background-color: red;
}
</style>