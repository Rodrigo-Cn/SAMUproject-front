<template>
    <div class="modal fade" id="confirmacaoModal" tabindex="-1" role="dialog" aria-labelledby="confirmacaoModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" :class="['bg-theme', themeStore.theme]" role="document">
            <div class="modal-content" :class="['bg-theme', themeStore.theme]">
                <div class="modal-header">
                    <h2 class="modal-title" id="confirmacaoModalLabel">
                        <i class="fa fa-warning fa-1x text-warning" aria-hidden="true"></i> Confirmação
                    </h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Deseja realmente excluir <strong>{{ medicoParaExcluir?.nome }}</strong>?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button @click="confirmarExclusao" class="btn btn-danger">Excluir</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useThemeStore } from "~/stores/themeStore";

const themeStore = useThemeStore();
const medicoParaExcluir = ref(null);

const abrirModal = (medico) => {
    medicoParaExcluir.value = medico;
    $("#confirmacaoModal").modal("show");
};

const confirmarExclusao = () => {
    if (medicoParaExcluir.value) {
        excluirMedico(medicoParaExcluir.value);
        $("#confirmacaoModal").modal("hide");
    }
};

defineExpose({ abrirModal });
</script>

<style scoped>
#confirmacaoModalLabel {
    color: #ff8800;
}

.btn-danger {
    background-color: red;
    border: none;
}
</style>
