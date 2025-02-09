<template>
  <div class="card-body">
    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios'
import { useAuthStore } from "~/stores/authtoken";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const token = useAuthStore().token

const chartData = ref({
  labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4'],
  datasets: [
    {
      label: 'Atendimentos',
      data: [100, 150, 200, 250],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#fff',
      }
    },
    tooltip: {
      titleColor: '#fff',
      bodyColor: '#fff',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#fff'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)'
      },
    },
    y: {
      ticks: {
        color: '#fff'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)'
      },
      beginAtZero: true,
    }
  }
})

const fetchChartData = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/chartparameterstwo/", {
      headers: {
        "Authorization": `Token ${token}`,
      }
    })

    chartData.value = {
      labels: [response.data.dayFour, response.data.dayThree, response.data.dayTwo, response.data.dayOne],
      datasets: [
        {
          label: 'Atendimentos',
          data: [response.data.dayFourNum, response.data.dayThreeNum, response.data.dayTwoNum, response.data.dayOneNum],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ]
    }
  } catch (error) {
    console.error('Erro ao buscar dados do gráfico:', error)
  }
}

onMounted(fetchChartData)
</script>

<style scoped>
.chart-container {
  width: 90%;
  height: 100%;
  position: absolute;
}
</style>