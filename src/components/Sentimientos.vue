<template>
    <div>
    <canvas id="graficoSentiemientos" width="300" height="200"></canvas>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            chartData:{
                type:'bar',
                data: {
                    labels:['Fundación','Fusat','RíoBlanco','SanLorenzo','Isapre','Colmena',
                    'CruzBlanca','Consalud','VidaTres','NuevaMasVida','Banmédica','Chuquicamata','CruzDelNrote'],
                    datasets: [
                        {
                            label: 'Acuerdo',
                            data: [],
                            borderWidth: 0,
                            backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            ],
                            fill:false,
                            borderColor:'rgba(0, 0, 0, 0.1)',
                        },
                        {
                            label: 'Desacuerdo',
                            data: [],
                            borderWidth: 0,
                            backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            ],
                            fill:false,
                            borderColor:'rgba(0, 0, 0, 0.1)',
                        },
                    
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 25,
                            }
                        }]
                    }
                }
            }     
        }  
    },
    methods: {
        createChart(chartId, chartData) {
            const url = 'http://localhost:8081/fondoDeSalud/getComparacionIsapresA';
            const url2 = 'http://localhost:8081/fondoDeSalud/getComparacionIsapresD';
            
            axios.get(url).then((data) => {
                axios.get(url2).then((data)=>{
                    chartData.data.datasets[1].data =data.data;
                    
                });
                chartData.data.datasets[0].data = data.data;
                console.log (chartData.data.datasets);
                const ctx = document.getElementById(chartId);
                const graficoSentiemientos = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            });
            
        },
    },
    mounted() {
        this.createChart('graficoSentimientos', this.chartData);
    },
}
</script>