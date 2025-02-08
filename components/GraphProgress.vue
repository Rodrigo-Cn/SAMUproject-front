<template>
  <div class="card-content">
    <div class="row row-group m-0">
      <div v-for="(item, index) in stats" :key="index" class="col-12 col-lg-6 col-xl-3 border-light">
        <div class="card-body text-center">
          <i :class="item.icon" class="icon-style"></i>
          <h5 class="text-white mb-0">{{ item.value }}</h5>
          <div class="progress my-3" style="height: 10px">
            <div class="progress-bar" :style="{ width: item.percentage + '%', backgroundColor: item.color }"></div>
          </div>
          <p class="mb-0 text-white small-font">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from "~/stores/authtoken";

const token = useAuthStore().token

const stats = ref([
  { label: 'Total de Pacientes', value: 0, percentage: 0, color: 'rgba(75, 192, 192, 0.8)', icon: 'fas fa-user-injured' },
  { label: 'Total de Medicamentos', value: 0, percentage: 0, color: 'rgba(255, 159, 64, 0.8)', icon: 'fas fa-pills' },
  { label: 'Total de Atendimentos', value: 0, percentage: 0, color: 'rgba(153, 102, 255, 0.8)', icon: 'fas fa-notes-medical' },
  { label: 'Total de Médicos', value: 0, percentage: 0, color: 'rgba(54, 162, 235, 0.8)', icon: 'fas fa-user-md' }
])

const fetchStatsData = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/chartparameters/", {
            headers: {
                "Authorization": `Token ${token}`,
            }
        });

        const { numPatients, numMedicines, numPatientCares, numDoctors } = response.data;

        stats.value[0].value = numPatients;
        stats.value[1].value = numMedicines;
        stats.value[2].value = numPatientCares;
        stats.value[3].value = numDoctors;

        const maxValue = Math.max(numPatients, numMedicines, numPatientCares, numDoctors) || 1;
        stats.value.forEach(stat => {
            stat.percentage = Math.round((stat.value / maxValue) * 100);
        });

    } catch (error) {
        console.error("Erro ao carregar os dados da API:", error.response?.data || error.message);
    }
}

onMounted(fetchStatsData)
</script>

<style>
.icon-style {
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
}
</style>
