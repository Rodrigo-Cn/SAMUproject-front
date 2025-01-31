<template>
    <div class="card-body">
        <div class="chart-container">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
    labels: ['Total de Pacientes', 'Total de Medicamentos', 'Total de Atendimentos', 'Total de Médicos'],
    datasets: [
        {
            label: 'Totais',
            data: [100, 230, 310, 150],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(54, 162, 235, 0.8)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)'
            ],
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
            }
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
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 130%;
    position: absolute;
}
</style>