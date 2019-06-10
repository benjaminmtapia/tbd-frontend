<template>
    <div>
    <canvas id="graficoAfiliados" width="300" height="200"></canvas>
    </div>
</template>

<script>
import cantidadAfiliados from '../graficas/cantidadAfiliados.js';
import axios from 'axios';
export default {
    data() {
        return {
            datos: [],
            chartData:{
                type:'pie',
                data: {
                    labels:['Fonasa', 'Isapre'],
                    datasets: [
                        {
                            label: 'Cantidad de Afiliados, Fonasa v/s Isapre',
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
                temp[0] = this.datos[0];
                temp[1] = this.datos[5];
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
        this.createChart('graficoAfiliados', this.chartData);
    },
}
</script>