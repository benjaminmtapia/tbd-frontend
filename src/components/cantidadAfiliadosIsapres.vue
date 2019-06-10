<template>
    <div>
    <canvas id="graficoAfiliadosIsapres" width="300" height="200"></canvas>
    </div>
</template>

<script> 
import axios from 'axios';
export default {
    data() {
        return {
            datos: [],
            chartData:{
                type:'bar',
                data: {
                    labels:['Fundación','Fusat','RíoBlanco','SanLorenzo','Colmena',
                    'CruzBlanca','Consalud','VidaTres','NuevaMasVida','Banmédica','Chuquicamata','CruzDelNrote'],
                    datasets: [
                        {
                            label: 'Cantidad de Afiliados por Isapre',
                            data: [],
                            borderWidth: 5,
                            backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
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
            const url = 'http://localhost:8081/fondoDeSalud/getAfiliados';
            axios.get(url).then((data) => {
                this.datos = data.data;
                var temp = new Array();
                temp[0] = this.datos[1];
                temp[1] = this.datos[2];
                temp[2] = this.datos[3];
                temp[3] = this.datos[4];
                temp[4] = this.datos[6];
                temp[5] = this.datos[7];
                temp[6] = this.datos[8];
                temp[7] = this.datos[9];
                temp[8] = this.datos[10];
                temp[9] = this.datos[11];
                temp[10] = this.datos[12];
                temp[11] = this.datos[13];
                chartData.data.datasets[0].data = temp;
                const ctx = document.getElementById(chartId);
                const graficoAfiliados = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            });
        },
    },
    mounted() {
        this.createChart('graficoAfiliadosIsapres', this.chartData);
    },
}
</script>