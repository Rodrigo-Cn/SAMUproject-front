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
import { ref } from 'vue'

const stats = ref([
  { label: 'Total de Pacientes', value: 100, percentage: 70, color: 'rgba(75, 192, 192, 0.8)', icon: 'fas fa-user-injured' },
  { label: 'Total de Medicamentos', value: 230, percentage: 85, color: 'rgba(255, 159, 64, 0.8)', icon: 'fas fa-pills' },
  { label: 'Total de Atendimentos', value: 310, percentage: 95, color: 'rgba(153, 102, 255, 0.8)', icon: 'fas fa-notes-medical' },
  { label: 'Total de Médicos', value: 310, percentage: 95, color: 'rgba(54, 162, 235, 0.8)', icon: 'fas fa-user-md' }
])
</script>

<style>
.icon-style {
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
}
</style>
