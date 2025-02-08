<template>
    <div class="card-body">
        <div class="chart-container">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { useAuthStore } from "~/stores/authtoken";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const token = useAuthStore().token
const patientsNum = ref(0)
const medicineNum = ref(0)
const patientCaresNum = ref(0)
const doctorsNum = ref(0)

const chartData = ref({
    labels: ['Total de Pacientes', 'Total de Medicamentos', 'Total de Atendimentos', 'Total de Médicos'],
    datasets: [
        {
            label: 'Totais',
            data: [0, 0, 0, 0],
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

const fetchChartData = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/chartparameters/", {
            headers: {
                "Authorization": `Token ${token}`,
            }
        });

        patientsNum.value = response.data.numPatients;
        medicineNum.value = response.data.numMedicines;
        patientCaresNum.value = response.data.numPatientCares;
        doctorsNum.value = response.data.numDoctors;

        chartData.value = {
            labels: ['Total de Pacientes', 'Total de Medicamentos', 'Total de Atendimentos', 'Total de Médicos'],
            datasets: [
                {
                    label: 'Totais',
                    data: [
                        patientsNum.value,
                        medicineNum.value,
                        patientCaresNum.value,
                        doctorsNum.value
                    ],
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
                }
            ]
        };
    } catch (error) {
        console.error("Erro ao carregar os dados do gráfico:", error.response?.data || error.message);
    }
}

onMounted(fetchChartData)
</script>
<style scoped>
.chart-container {
    width: 100%;
    height: 130%;
    position: absolute;
}
</style>