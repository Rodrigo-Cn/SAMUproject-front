<template>
    <div>
        <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
            <div class="brand-logo">
                <a class="nav-link toggle-menu" href="javascript:void();">
                    <img src="public/assets/images/image.png" class="logo-icon" alt="logo icon" />
                    <h5 class="logo-text">Saúde Integrada</h5>
                </a>
            </div>
            <ul class="sidebar-menu do-nicescrol">
                <li class="sidebar-header">Página de Navegação</li>
                <li>
                    <a href="/home/">
                        <i class="fas fa-home"></i> <span>Página Inicial</span>
                    </a>
                </li>
                <li>
                    <a href="/patients/">
                        <i class="fas fa-procedures"></i> <span>Pacientes</span>
                    </a>
                </li>

                <li>
                    <a href="/doctors/">
                        <i class="fas fa-user-md"></i> <span>Médicos</span>
                    </a>
                </li>

                <li>
                    <a href="/medicines/">
                        <i class="fas fa-capsules"></i> <span>Medicamentos</span>
                        <small class="badge float-right badge-light"></small>
                    </a>
                </li>

                <li>
                    <a href="/cares/">
                        <i class="zmdi zmdi-hospital"></i> <span>Atendimentos</span>
                    </a>
                </li>

                <li class="sidebar-header">Cadastro</li>
                <li>
                    <a href="s"><i class="fas fa-user-plus text-danger"></i>
                        <span>Cadastrar Médico</span></a>
                </li>
                <li>
                    <a href="s"><i class="fas fa-pills text-danger"></i>
                        <span>Cadastrar Medicamento</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .sidebar-menu li span{
        color: white;
    }
</style>