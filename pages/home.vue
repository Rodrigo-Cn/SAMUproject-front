<template>
    <div :class="['bg-theme', themeStore.theme]">
        <div id="wrapper">
            <TopPage />
            <div class="clearfix"></div>

            <div class="content-wrapper">
                <div class="container-fluid">
                    <div class="card mt-3">
                        <GraphProgress/>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-8 col-xl-8">
                            <div class="card" style="height: 465px;">
                                <div class="card-header">Quantitativo do Sistema</div>
                                <div class="card-body">
                                    <div class="chart-container-1">
                                        <GraphOne/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-4 col-xl-4">
                            <div class="card">
                                <div class="card-header">Quantitativo de Atendimentos</div>
                                <div class="card-body">
                                    <div class="chart-container-2">
                                        <GraphTwo/>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table align-items-center">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i class="fas fa-city m2"></i>
                                                    <strong> Cidade</strong>
                                                </td>
                                                <td>
                                                    <i class="fas fa-map-marked-alt m2"></i>
                                                    <strong> Bairro</strong>
                                                </td>
                                                <td>
                                                    <i class="fas fa-road m2"></i>
                                                    <strong> Rua</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fa fa-circle text-light-1 mr-2"></i>Guanambi
                                                </td>
                                                <td>Centro</td>
                                                <td>Rua Neymar Jr.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fa fa-circle text-light-1 mr-2"></i>Guanambi
                                                </td>
                                                <td>Centro</td>
                                                <td>Rua Neymar Jr.</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i class="fa fa-circle text-light-1 mr-2"></i>Guanambi
                                                </td>
                                                <td>Centro</td>
                                                <td>Rua Neymar Jr.</td>
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
import { useThemeStore } from "~/stores/themeStore";
import { title } from "/composables/title";

definePageMeta({
    middleware: ['auth']
});

onMounted(() => {
  setInterval(() => {
    window.location.reload();
  }, 30000);
});

const themeStore = useThemeStore();
title("Saúde Integrada");
</script>
<style scoped>

@media (max-width:599px) {
    .chart-container-1{
        margin-right: 65px;
        margin-left: -10px;
    }
    .chart-container-2{
        margin-right: 40px;
    }
}
</style>