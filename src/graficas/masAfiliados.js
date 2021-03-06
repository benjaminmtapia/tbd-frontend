export const masComentadas = {
    type: 'line',
      data: {
        labels: ['Fonasa', 'Isapre 1', 'Isapre 2', 'Isapre 3'],
        datasets: [
            {
                label: 'Aprobacion',
                data: [75, 70, 45, 37],
                borderWidth: 5,
                fill:false,
                borderColor:   'rgb(205, 92, 92)',
              },
              {
                label: 'Desaprobacion',
                data: [8, 68, 55, 17],
                borderWidth: 5,
                fill:false,
                borderColor:   'rgb(102, 140, 255, 0.7)',
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
export default masComentadas;