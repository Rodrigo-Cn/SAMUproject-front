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
                                  <h3 class="mb-0">Tabela de Médicos</h3>
                                  <input 
                                      v-model="searchQuery" 
                                      type="text" 
                                      class="form-control w-25" 
                                      placeholder="Buscar médico..."
                                  />
                              </div>
                              <div class="table-responsive">
                                  <table class="table align-items-center table-flush">
                                      <thead class="thead">
                                          <tr>
                                              <th scope="col">Foto</th>
                                              <th scope="col">Nome</th>
                                              <th scope="col">CRM</th>
                                              <th scope="col">Ações</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="(medico, index) in paginatedMedicos" :key="index">
                                              <th scope="row">
                                                  <div class="media align-items-center">
                                                      <a href="#" class="avatar rounded-circle mr-3">
                                                          <img :alt="medico.nome" :src="medico.image" />
                                                      </a>
                                                  </div>
                                              </th>
                                              <td>{{ medico.nome }}</td>
                                              <td>
                                                  <span class="badge badge-dot mr-4">
                                                      <i :class="`bg-${medico.statusColor}`"></i>
                                                      {{ medico.crm }}
                                                  </span>
                                              </td>
                                              <td>
                                                  <button class="btn btn-warning btn-sm mr-2"  @click="editarMedico(medico)">
                                                      <i class="fas fa-edit"></i>
                                                  </button>
                                                  <button class="btn btn-danger btn-sm mr-2" @click="modalRef.abrirModal(medico)">
                                                      <i class="fas fa-trash"></i>
                                                  </button>
                                                  <button class="btn btn-info btn-sm" @click="detalharMedico(medico)">
                                                      <i class="fas fa-eye"></i>
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
  <DeleteModal ref="modalRef" />
  <EditDoctorModal ref="editModalRef" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useThemeStore } from '~/stores/themeStore';
import NavBarAdministrator from '~/components/NavBarAdministrator.vue';
import DeleteModal from '~/components/DeleteModal.vue';
import EditDoctorModal from "~/components/EditDoctorModal.vue";
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

const medicos = ref([
  { image: '/assets/images/doutor1.png', nome: 'Dr. João Silva', crm: 'CRM/SP 123456', statusColor: 'warning' },
  { image: '/assets/images/doutor2.png', nome: 'Dra. Maria Oliveira', crm: 'CRM/SP 654321', statusColor: 'success' },
  { image: '/assets/images/doutor3.png', nome: 'Dr. Carlos Souza', crm: 'CRM/SP 987654', statusColor: 'danger' },
  { image: '/assets/images/doutor4.png', nome: 'Dra. Ana Costa', crm: 'CRM/SP 456789', statusColor: 'info' },
  { image: '/assets/images/doutor5.png', nome: 'Dr. Pedro Alves', crm: 'CRM/SP 321654', statusColor: 'warning' },
  { image: '/assets/images/doutor6.png', nome: 'Dra. Fernanda Lima', crm: 'CRM/SP 789123', statusColor: 'success' },
]);

// Filtra os médicos com base na pesquisa
const filteredMedicos = computed(() => {
  return medicos.value.filter(medico =>
    medico.nome.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Calcula os médicos paginados
const paginatedMedicos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredMedicos.value.slice(start, end);
});

// Calcula o número total de páginas
const totalPages = computed(() => {
  return Math.ceil(filteredMedicos.value.length / itemsPerPage.value);
});

// Função para mudar de página
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const excluirMedico = (medico) => {
  if (confirm(`Tem certeza que deseja excluir ${medico.nome}?`)) {
    alert(`Médico ${medico.nome} excluído.`);
  }
};

const detalharMedico = (medico) => {
  alert(`Detalhes do médico: ${medico.nome}`);
};

const editarMedico = (medico) => {
    editModalRef.value.abrirModal(medico);
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