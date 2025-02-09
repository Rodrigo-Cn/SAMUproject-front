<template>
    <div :class="['bg-theme', themeStore.theme]">
        <div id="wrapper">
            <TopPage />
            <div class="clearfix"></div>

            <div class="content-wrapper">
                <div class="container-fluid">
                    <div class="card mt-3">
                        <GraphProgress />
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-8 col-xl-8">
                            <div class="card" style="height: 465px;">
                                <div class="card-header">Quantitativo do Sistema</div>
                                <div class="card-body">
                                    <div class="chart-container-1">
                                        <GraphOne />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-4 col-xl-4">
                            <div class="card">
                                <div class="card-header">Quantitativo de Atendimentos</div>
                                <div class="card-body">
                                    <div class="chart-container-2">
                                        <GraphTwo />
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table align-items-center">
                                        <thead>
                                            <tr>
                                                <th><i class="fas fa-city m2"></i> <strong> Cidade</strong></th>
                                                <th><i class="fas fa-map-marked-alt m2"></i> <strong> Bairro</strong></th>
                                                <th><i class="fas fa-road m2"></i> <strong> Rua</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(address, index) in lastAddresses" :key="index">
                                                <td><i class="fa fa-circle text-light-1 mr-2"></i> {{ address.city }}</td>
                                                <td>{{ address.district }}</td>
                                                <td>{{ address.street }}</td>
                                            </tr>
                                            <tr v-if="lastAddresses.length === 0">
                                                <td colspan="3" class="text-center"><i class="fas fa-exclamation-triangle"></i> Nenhuma localização encontrada</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useThemeStore } from "~/stores/themeStore";
import { useAuthStore } from "~/stores/authtoken";
import { title } from "/composables/title";

const themeStore = useThemeStore();
const token = useAuthStore().token;
const lastAddresses = ref([]);

const fetchLocation = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/location/", {
            headers: {
                "Authorization": `Token ${token}`,
            },
        });

        lastAddresses.value = response.data.lastAddresses || [];
    } catch (error) {
        console.error("Erro ao carregar os dados da API:", error.response?.data || error.message);
    }
};

onMounted(() => {
    fetchLocation();
    setInterval(() => {
        window.location.reload();
    }, 30000);
});

definePageMeta({
    middleware: ['auth']
});

title("Saúde Integrada");
</script>

<style scoped>
@media (max-width: 599px) {
    .chart-container-1 {
        margin-right: 65px;
        margin-left: -10px;
    }

    .chart-container-2 {
        margin-right: 40px;
    }
}
</style>