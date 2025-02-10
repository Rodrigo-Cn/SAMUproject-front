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
                                                <th scope="col" >Atendimentos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(paciente, index) in paginatedPacientes" :key="index">
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
                                                <td>
                                                    <button class="btn btn-primary btn-sm" @click="visualizarAtendimentos(paciente)">
                                                        <i class="fas fa-calendar-alt"></i> 
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- Paginação -->
                                <div class="card-footer py-4">
                                    <nav aria-label="...">
                                        <ul class="pagination justify-content-end mb-0">
                                            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                                <a class="page-link" href="#" tabindex="-1" @click.prevent="changePage(currentPage - 1)">
                                                    <i class="fas fa-angle-left"></i>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li 
                                                v-for="page in totalPages" 
                                                :key="page" 
                                                class="page-item" 
                                                :class="{ active: page === currentPage }"
                                            >
                                                <a class="page-link" href="#" @click.prevent="changePage(page)">
                                                    {{ page }}
                                                </a>
                                            </li>
                                            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                                <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">
                                                    <i class="fas fa-angle-right"></i>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
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
const currentPage = ref(1); // Página atual
const itemsPerPage = ref(5); // Itens por página

const pacientes = ref([
  { nome: 'João Silva', cpf: '123.456.789-00' },
  { nome: 'Maria Oliveira', cpf: '987.654.321-00' },
  { nome: 'Carlos Souza', cpf: '112.233.445-66' },
  { nome: 'Ana Costa', cpf: '223.344.556-77' },
  { nome: 'Pedro Alves', cpf: '334.455.667-88' },
  { nome: 'Fernanda Lima', cpf: '445.566.778-99' },
  { nome: 'Ricardo Santos', cpf: '556.677.889-00' },
  { nome: 'Juliana Pereira', cpf: '667.788.990-11' },
]);

// Filtra os pacientes com base na pesquisa
const filteredPacientes = computed(() => {
  return pacientes.value.filter(paciente =>
    paciente.nome.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Calcula os pacientes paginados
const paginatedPacientes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPacientes.value.slice(start, end);
});

// Calcula o número total de páginas
const totalPages = computed(() => {
  return Math.ceil(filteredPacientes.value.length / itemsPerPage.value);
});

// Função para mudar de página
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const visualizarAtendimentos = (paciente) => {
  alert(`Visualizando atendimentos de ${paciente.nome}`);
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