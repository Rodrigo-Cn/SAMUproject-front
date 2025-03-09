<template>
    <div class="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" ref="modal">
        <div class="modal-dialog" :class="['bg-theme', themeStore.theme]" role="document">
            <div class="modal-content" :class="['bg-theme', themeStore.theme]">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel4">
                        <i class="fa fa-trash fa-1x text-danger" aria-hidden="true"></i> Deletar
                    </h2>
                    <button type="button" class="close" @click="closeModal" aria-label="Close" id="button-close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Deseja realmente deletar o medicamento?
                </div>
                <div class="modal-footer">
                    <button id="delete" type="button" class="btn btn-danger" @click="deleteMedicine">Deletar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { useThemeStore } from "~/stores/themeStore";
import { useAuthStore } from "~/stores/authtoken";
import { showSuccessNotification, showErrorNotification } from "~/utils/notifications";
export default {
    props: {
        medicineId: {
            type: Number,
            required: true,
        },
        fetchMedicines: {
            type: Function,
            required: true
        }
    },
    computed: {
        themeStore() {
            return useThemeStore();
        },
        authStore() {
            return useAuthStore();
        },
    },
    methods: {
        closeModal() {
            $(this.$refs.modal).modal("hide");
        },
        async deleteMedicine() {
            try {
                const token = this.authStore.token;

                const response = await axios.delete(
                    `http://127.0.0.1:8000/api/v1/medicines/${this.medicineId}/`,
                    {
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                    }
                );

                if (response.status === 204) {
                    showSuccessNotification("Medicamento deletado com sucesso!");
                    this.closeModal();
                    this.fetchMedicines();
                }
            } catch (error) {
                showErrorNotification("Erro ao deletar medicamento.");
            }
        },
    },
};
</script>
<style scoped>
#delete {
    background-color: red;
}

#button-close {
    color: red;
}
</style>