<template>
    <div :class="['bg-theme', this.themeStore.theme]">
        <div id="wrapper">
            <NavBarAdministrator />
            <Header />

            <div class="content-wrapper">
                <div class="container-fluid">
                    <div class="col-lg-10">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title custom-title">Realizar Atendimento</div>
                                <hr />
                                <form>
                                    <div class="form-group">
                                        <label for="nome-paciente">Nome do Paciente</label>
                                        <select class="form-control form-control-rounded" id="nome-paciente">
                                            <option value="">Selecione o paciente</option>
                                            <option value="1">Paciente 1</option>
                                            <option value="2">Paciente 2</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="idade">Idade</label>
                                        <input type="number" class="form-control form-control-rounded" id="idade"
                                            placeholder="Digite a idade" />
                                    </div>
                                    <div class="form-group">
                                        <label for="endereco">Endereço</label>
                                        <select class="form-control form-control-rounded" id="endereco">
                                            <option value="">Selecione o endereço</option>
                                            <option value="1">Rua A, 123</option>
                                            <option value="2">Rua B, 456</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="medico">Médico</label>
                                        <select class="form-control form-control-rounded" id="medico">
                                            <option value="">Selecione o médico</option>
                                            <option value="1">Dr. João</option>
                                            <option value="2">Dra. Maria</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="medicamento">Medicamento</label>
                                        <select class="form-control form-control-rounded" id="medicamento">
                                            <option value="">Selecione o medicamento</option>
                                            <option value="1">Medicamento A</option>
                                            <option value="2">Medicamento B</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="data-atendimento">Data do Atendimento</label>
                                        <input type="date" class="form-control form-control-rounded"
                                            id="data-atendimento" />
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-light btn-round px-5 button-register">
                                            <i class="icon-lock"></i> Adicionar
                                        </button>
                                        <button type="submit" class="btn btn-light btn-round px-5">
                                            <i class="icon-lock"></i> Voltar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>
<script>
import { useThemeStore } from "~/stores/themeStore";
import { title } from "/composables/title";

export default {
    mounted() {
        title("Saúde Integrada");
    },
    data() {
        return {
            themeStore: useThemeStore(),
        };
    },
};
</script>
<style scoped>
.container-fluid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.custom-title {
    font-size: 130%;
}

.button-register {
    margin-right: 2%;
}
</style>