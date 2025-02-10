<template>
    <div class="modal fade" id="editDoctorModal" tabindex="-1" role="dialog" aria-labelledby="editDoctorModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body p-0 row" :class="['bg-theme', themeStore.theme]">
                    <div class="col-12 col-lg-5 ad p-0">
                        <img src="public/assets/images/doccreate.gif" width="100%" height="100%" />
                    </div>
                    <div class="details col-12 col-lg-7">
                        <h4><i class="fas fa-user-edit"></i> Editar Médico</h4>
                        <form class="form-group mt-3 pt-3 mb-4" @submit.prevent="salvarAlteracoes">
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                <input type="text" class="form-control" v-model="medico.nome" placeholder="Nome" required>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                <input type="email" class="form-control" v-model="medico.email" placeholder="Email" required>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="fas fa-user-md"></i></span>
                                <input type="text" class="form-control" v-model="medico.crm" placeholder="CRM" required>
                            </div>

                            <div class="">
                                <button type="submit" class="btn btn-light">
                                    <i class="fa fa-save"></i> Salvar Alterações
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";
import { useThemeStore } from "~/stores/themeStore";

const themeStore = useThemeStore();
const medico = ref({ nome: "", email: "", crm: "" });

const abrirModal = (dadosMedico) => {
    medico.value = { ...dadosMedico };
    const modal = new bootstrap.Modal(document.getElementById("editDoctorModal"));
    modal.show();
};

const salvarAlteracoes = () => {
    console.log("Médico atualizado:", medico.value);
    const modal = bootstrap.Modal.getInstance(document.getElementById("editDoctorModal"));
    modal.hide();
};

defineExpose({ abrirModal });
</script>

<style scoped>
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.modal.fade .modal-dialog {
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.modal.show .modal-dialog {
    transform: translateX(0);
    opacity: 1;
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input-group {
    margin-right: 20px;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eee;
}

.modal-body {
    border-radius: 8% 2% 2% 8%;
}

img {
    border-radius: 8%;
}

.input-group-text i {
    font-size: 14px;
}

.container {
    display: flex;
    justify-content: center;
    margin-top: 200px;
    background: transparent;
}

.trigger {
    background-color: green;
    color: #fff;
}

.modal,
.fade,
.show {
    background-color: rgba(0, 0, 0, 0.25);
    padding-left: 10px;
    padding-right: 10px;
}

h2 {

    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
}

.modal-content {
    border: none;
    background: transparent;
    padding: 0 15px;
}

.close {
    position: relative;
    top: 48px;
    left: 13px;
    z-index: 1;
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
    color: rgb(255, 0, 0);
}

.modal-header {
    border: none;
}

.modal-header .close {
    padding: 0rem 1rem !important;
    margin: -1rem -1rem -1rem auto;
}

.modal-body {
    border: none;
    background-color: white;
    padding-bottom: 5px;
}

.close.focus,
.close:focus {
    outline: 0;
    box-shadow: none !important;
}

.form-control {
    width: 90%;
    height: 50px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 0.5px 0px 0px #dae0e5 !important;
    color: #63686c;
    font-weight: bold;
    font-size: 20px;
}

.form-control::placeholder {
    font-size: 18px;
}

.form-control.focus {

    border: none;
    border-color: #fff;
    border-bottom: 1px solid #000;
    outline: 0;
    box-shadow: 0 0 0 0 rgba(0, 123, 255, .25);
}

h4 {
    display: none;
}

.modal-content{
    max-height: 400px;
}


@media (min-width:599px) {
    .modal-dialog {
        max-width: 47rem;
    }

    .details {
        padding: 60px 0 40px 50px;
    }

    .text-muted a {
        color: #c0bfbf;
        font-weight: bold;
        text-decoration: underline;
    }

    small.para {
        font-weight: bold;
        font-size: 14px;
        color: #63686c;
    }

    h4 {
        display: block;
    }
}

@media (max-width:599px) {
    .form-group {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .input-group {
        margin-right: 0px;
    }

    .input-group-text i {
        font-size: 10px;
    }
}
</style>