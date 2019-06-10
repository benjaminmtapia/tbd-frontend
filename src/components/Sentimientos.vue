<template>
    <div>
    <canvas id="graficoSentimientos" width="300" height="200"></canvas>
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
                            ],
                            fill:false,
                            borderColor:'rgba(0, 0, 0, 0.1)',
                        },
                        {
                            label: 'Desacuerdo',
                            data: [],
                            borderWidth: 0,
                            backgroundColor: [
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
                            'rgba(255, 102, 102, 0.7)',
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
            const url = 'http://localhost:8081/fondoDeSalud/getComparacionIsapres';
            
            axios.get(url).then((data) => {
                this.datos = data.data;
                var aprobacion = new Array();
                var desaprobacion = new Array();
                var j = 0;
                var k = 0;
                for(var i=0;i<this.datos.length;i++){
                    if(i%2 == 0){
                        aprobacion[j] = this.datos[i];
                        j++;
                    }
                    else{
                        desaprobacion[k] = this.datos[i];
                        k++;
                    }
                }
                chartData.data.datasets[0].data = aprobacion;
                chartData.data.datasets[1].data = desaprobacion;
                const ctx = document.getElementById(chartId);
                console.log(ctx);
                console.log(chartData);
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