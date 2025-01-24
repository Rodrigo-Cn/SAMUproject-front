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
                    <a href="">
                        <i class="zmdi zmdi-home"></i> <span>Página Inicial</span>
                    </a>
                </li>
                <li>
                    <a href="tables.html">
                        <i class="zmdi zmdi-grid"></i> <span>Pacientes</span>
                    </a>
                </li>

                <li>
                    <a href="tables.html">
                        <i class="zmdi zmdi-grid"></i> <span>Médicos</span>
                    </a>
                </li>

                <li>
                    <a href="formsAtendimento.html">
                        <i class="zmdi zmdi-format-list-bulleted"></i>
                        <span>Registrar Atendimento</span>
                    </a>
                </li>
                <li>
                    <a href="formsPaciente.html">
                        <i class="zmdi zmdi-face"></i> <span>Cadastrar Paciente</span>
                    </a>
                </li>

                <li>
                    <a href="register.html" target="_blank">
                        <i class="zmdi zmdi-account-circle"></i>
                        <span>Registar Médico</span>
                    </a>
                </li>

                <li>
                    <a href="calendar.html">
                        <i class="zmdi zmdi-calendar-check"></i> <span>Mapa</span>
                        <small class="badge float-right badge-light"></small>
                    </a>
                </li>

                <li>
                    <a href="login.html" target="_blank">
                        <i class="zmdi zmdi-lock"></i> <span>Login</span>
                    </a>
                </li>

                <li class="sidebar-header">Cadastro</li>
                <li>
                    <a href="s"><i class="zmdi zmdi-plus-circle text-danger"></i>
                        <span>Cadastrar Médico</span></a>
                </li>
                <li>
                    <a href="s"><i class="zmdi zmdi-hospital-alt text-danger"></i>
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