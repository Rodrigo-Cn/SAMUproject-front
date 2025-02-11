<template>
    <div class="modal fade" id="createMedicineModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fa fa-window-close-o"></i>
                    </button>
                </div>
                <div class="modal-body p-0 row" :class="['bg-theme', themeStore.theme]">
                    <div class="col-12 col-lg-5 ad p-0">
                        <img src="public/assets/images/medicine.gif" width="100%" height="100%" />
                    </div>
                    <div class="details col-12 col-lg-7">
                        <h4><i class="fas fa-pills"></i> Cadastrar Medicamento</h4>
                        <form class="form-group mt-3 pt-3 mb-4" @submit.prevent="createMedicine">
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="fas fa-capsules"></i></span>
                                <input type="text" v-model="name" class="form-control" placeholder="Nome" 
                                    :class="{'is-valid': nameValid, 'is-invalid': !nameValid}" required>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="fas fa-pills"></i></span>
                                <input type="text" v-model="dosage" class="form-control" placeholder="Dosagem" 
                                    :class="{'is-valid': dosageValid, 'is-invalid': !dosageValid}" required>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="fas fa-industry"></i></span>
                                <input type="text" v-model="manufacturer" class="form-control" placeholder="Fabricante" 
                                    :class="{'is-valid': manufacturerValid, 'is-invalid': !manufacturerValid}" required>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="fas fa-flask"></i></span>
                                <input type="text" v-model="composition" class="form-control" placeholder="Composição" 
                                    :class="{'is-valid': compositionValid, 'is-invalid': !compositionValid}" required>
                            </div>

                            <div class="input-group mb-3">
                                <div class="file-upload-container">
                                    <input type="file" class="file-input" name="medicine_image" id="medicine_image" 
                                        accept="image/*" @change="onFileChange">
                                    <label for="medicine_image" class="file-label">
                                        <i class="fas fa-upload"></i> Escolher Imagem
                                    </label>
                                </div>
                                <div v-if="imagePreview">
                                    <img :src="imagePreview" class="img-thumbnail mt-2" width="100">
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="btn btn-light" :disabled="!isFormValid">
                                    <i class="fa fa-plus"></i> Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useThemeStore } from "~/stores/themeStore";
import { useAuthStore } from "~/stores/authtoken";
import { showSuccessNotification, showErrorNotification } from "~/utils/notifications";
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            dosage: '',
            manufacturer: '',
            composition: '',
            medicine_image: null,
            imagePreview: null,
        };
    },
    setup() {
        const themeStore = useThemeStore();
        return { themeStore };
    },
    computed: {
        nameValid() {
            return this.name.length > 2;
        },
        dosageValid() {
            return /^[0-9]+(mg|g|ml|L)$/.test(this.dosage);
        },
        manufacturerValid() {
            return this.manufacturer.length > 2;
        },
        compositionValid() {
            return this.composition.length > 2;
        },
        isFormValid() {
            return this.nameValid && this.dosageValid && this.manufacturerValid && this.compositionValid;
        }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.medicine_image = file;
                this.imagePreview = URL.createObjectURL(file);
            }
        },
        async createMedicine() {
            if (!this.isFormValid) {
                showErrorNotification("Preencha todos os campos corretamente.");
                return;
            }

            const authStore = useAuthStore();
            const token = authStore.token;

            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("dosage", this.dosage);
            formData.append("manufacturer", this.manufacturer);
            formData.append("composition", this.composition);
            if (this.medicine_image) {
                formData.append("medicine_image", this.medicine_image);
            }

            try {
                await axios.post("http://127.0.0.1:8000/api/v1/medicines/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Token ${token}`,
                    }
                });
                this.resetForm();
                showSuccessNotification("Medicamento cadastrado com sucesso!");
            } catch (error) {
                console.error(error);
                showErrorNotification(error.response?.data?.message || "Erro ao cadastrar medicamento.");
            }
        },
        resetForm() {
            this.name = '';
            this.dosage = '';
            this.manufacturer = '';
            this.composition = '';
            this.medicine_image = null;
            this.imagePreview = null;
        }
    }
};
</script>
<style scoped>
.is-invalid {
    position: relative;
    padding-right: 2.5rem;
}

.is-invalid::after {
    content: "\f057";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: red;
    font-size: 1.2rem;
}

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

.file-input {
    cursor: pointer;
}

.file-label {
    cursor: pointer;
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
    font-size: 12px;
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
        font-size: 8px;
    }
}
</style>