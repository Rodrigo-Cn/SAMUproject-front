<template>

    <div :class="['bg-theme', themeStore.theme]">

        <div id="wrapper">

            <NavBarAdministrator/>
            <Header/>

            <div class="clearfix"></div>

            <div class="content-wrapper">
                <div class="container-fluid">

                    <div class="card mt-3">
                        <div class="card-content">
                            <div class="row row-group m-0">
                                <div class="col-12 col-lg-6 col-xl-3 border-light">
                                    <div class="card-body">
                                        <h5 class="text-white mb-0">0</h5>
                                        <div class="progress my-3" style="height:3px;">
                                            <div class="progress-bar" style="width:55%"></div>
                                        </div>
                                        <p class="mb-0 text-white small-font">Total de Pacientes</p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-xl-3 border-light">
                                    <div class="card-body">
                                        <h5 class="text-white mb-0">0</h5>
                                        <div class="progress my-3" style="height:3px;">
                                            <div class="progress-bar" style="width:55%"></div>
                                        </div>
                                        <p class="mb-0 text-white small-font">Total de Atendimentos</p>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-xl-3 border-light">
                                    <div class="card-body">
                                        <h5 class="text-white mb-0">0</h5>
                                        <div class="progress my-3" style="height:3px;">
                                            <div class="progress-bar" style="width:55%"></div>
                                        </div>
                                        <p class="mb-0 text-white small-font">Total de Acessos</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-8 col-xl-8">
                            <div class="card">
                                <div class="card-header">Quantitativo de Atendimentos
                                </div>
                                <div class="card-body">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="fa fa-circle mr-2 text-white"></i>New
                                            Visitor</li>
                                        <li class="list-inline-item"><i class="fa fa-circle mr-2 text-light"></i>Old
                                            Visitor</li>
                                    </ul>
                                    <div class="chart-container-1">
                                        Gráfico 1
                                    </div>
                                </div>

                                <div class="row m-0 row-group text-center border-top border-light-3">
                                    <div class="col-12 col-lg-4">
                                        <div class="p-3">
                                            <h5 class="mb-0">45.87M</h5>
                                            <small class="mb-0">Overall Visitor <span> <i class="fa fa-arrow-up"></i>
                                                    2.43%</span></small>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <div class="p-3">
                                            <h5 class="mb-0">15:48</h5>
                                            <small class="mb-0">Visitor Duration <span> <i class="fa fa-arrow-up"></i>
                                                    12.65%</span></small>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <div class="p-3">
                                            <h5 class="mb-0">245.65</h5>
                                            <small class="mb-0">Pages/Visit <span> <i class="fa fa-arrow-up"></i>
                                                    5.62%</span></small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-12 col-lg-4 col-xl-4">
                            <div class="card">
                                <div class="card-header">Bairros Atendidos
                                </div>
                                <div class="card-body">
                                    <div class="chart-container-2">
                                        gráfico2
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table align-items-center">
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-circle text-white mr-2"></i> Direct</td>
                                                <td>$5856</td>
                                                <td>+55%</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-circle text-light-1 mr-2"></i>Affiliate</td>
                                                <td>$2602</td>
                                                <td>+25%</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-circle text-light-2 mr-2"></i>E-mail</td>
                                                <td>$1802</td>
                                                <td>+15%</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-circle text-light-3 mr-2"></i>Other</td>
                                                <td>$1105</td>
                                                <td>+5%</td>
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
        
        <Footer/>

    </div>

</template>
<script setup>
import { useThemeStore } from '~/stores/themeStore';
import { useHead } from 'nuxt/app';

const themeStore = useThemeStore();

useHead({
    title: 'Saúde Integrada',
});
</script>
