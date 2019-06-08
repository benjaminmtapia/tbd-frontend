export const graficoTorta = {
  type: 'donut',
    data: {
      labels: ['Fonasa', 'Isapre 1', 'Isapre 2', 'Isapre 3'],
      datasets: [
        {
          label: 'Aprobacion',
          data: [],
          backgroundColor: [
            'rgb(102, 140, 255, 0.7)',
            'rgb(102, 140, 255, 0.7)',
            'rgb(102, 140, 255, 0.7)',
            'rgb(102, 140, 255, 0.7)'
          ],
          borderWidth: 0
        },
        {
          label: 'Desaprobacion',
          data: [],
          backgroundColor: [
            'rgba(255, 102, 102, 0.7)',
            'rgba(255, 102, 102, 0.7)',
            'rgba(255, 102, 102, 0.7)',
            'rgba(255, 102, 102, 0.7)'
          ],
          borderWidth: 0
        }
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
  
  export default graficoTorta;