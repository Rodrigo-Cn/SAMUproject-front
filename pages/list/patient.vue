<template>
    <div :class="['bg-theme', themeStore.theme]">
        <div id="wrapper">
            <NavBarAdministrator />
            <Header />
  
            <div class="clearfix"></div>
  
            <div class="main-content">
                <div class="container mt-7">
                    <div class="row">
                        <div class="col">
                            <div class="card shadow">
                                <div class="card-header border-0 d-flex justify-content-between align-items-center">
                                    <h3 class="mb-0">Tabela de Pacientes</h3>
                                    <input 
                                        v-model="searchQuery" 
                                        type="text" 
                                        class="form-control w-25" 
                                        placeholder="Buscar paciente..."
                                    />
                                </div>
                                <div class="table-responsive">
                                    <table class="table align-items-center table-flush">
                                        <thead class="thead">
                                            <tr>
                                                <th scope="col">Nome</th>
                                                <th scope="col">CPF</th>
                                                <th scope="col">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(paciente, index) in filteredPacientes" :key="index">
                                                <td>{{ paciente.nome }}</td>
                                                <td>{{ paciente.cpf }}</td>
                                                <td>
                                                    <button class="btn btn-warning btn-sm mr-2" @click="editarPaciente(paciente)">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <button class="btn btn-danger btn-sm mr-2" @click="modalRef.abrirModal(paciente)">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                    <button class="btn btn-info btn-sm" @click="detalharPaciente(paciente)">
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                </td>
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
    <DeletePatienteModal ref="modalRef" />
    <EditPatientModal ref="editModalRef" />
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useThemeStore } from '~/stores/themeStore';
  import NavBarAdministrator from '~/components/NavBarAdministrator.vue';
  import DeletePatienteModal from '~/components/DeletePatientModal.vue';
  import EditPatientModal from "~/components/EditPatientModal.vue";
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  definePageMeta({
    middleware: ['auth'],
  });
  
  const themeStore = useThemeStore();
  const searchQuery = ref("");
  const modalRef = ref(null);
  const editModalRef = ref(null);
  
  const pacientes = ref([
    { nome: 'João Silva', cpf: '123.456.789-00' },
    { nome: 'Maria Oliveira', cpf: '987.654.321-00' },
    { nome: 'Carlos Souza', cpf: '112.233.445-66' },
  ]);
  
  const filteredPacientes = computed(() => {
    return pacientes.value.filter(paciente =>
      paciente.nome.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  const excluirPaciente = (paciente) => {
    if (confirm(`Tem certeza que deseja excluir ${paciente.nome}?`)) {
      alert(`Paciente ${paciente.nome} excluído.`);
    }
  };
  
  const detalharPaciente = (paciente) => {
    alert(`Detalhes do paciente: ${paciente.nome}`);
  };
  
  const editarPaciente = (paciente) => {
      editModalRef.value.abrirModal(paciente);
  };
  </script>
  
  <style scoped>
  .main-content {
    padding-top: 6rem;
  }
  .card {
    margin-bottom: 2rem;
  }
  .table-responsive {
    overflow-x: auto;
  }
  .btn {
    padding: 5px 10px;
    font-size: 14px;
  }
  #wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main-content {
    flex: 1;
  }
  </style>
  