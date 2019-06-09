export const sentimientosIsapre = {
  type: 'bar',
    data: {
      labels: ['Fonasa', 'Isapre 1', 'Isapre 2', 'Isapre 3'],
      datasets: [
        {
          label: 'Aprobacion',
          data: [75, 70, 45, 37],
          backgroundColor: [
            'rgb(147, 250, 198, 0.7)',
            'rgb(147, 250, 198, 0.7)',
            'rgb(147, 250, 198, 0.7)',
            'rgb(147, 250, 198, 0.7)',
          ],
          borderWidth: 0
        },
        {
          label: 'Decepción',
          data: [30, 47, 30, 30],
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
  
  export default sentimientosIsapre;