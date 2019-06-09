export const masComentadas = {
    type: 'bar',
      data: {
        labels: ['Fonasa', 'Colmena', 'Cruz Blanca','Consalud', 'Vida Tres','Nueva Más Vida',
    'Banmédica', 'Chuquicamata', 'Cruz del Norte', 'Fundación', 'Fusat', 'Río Blanco', 'San Lorenzo'],
        datasets: [
            {
                label: 'Aprobacion',
                data: ["14","13","12","11","10","9","8",7,6,5,4,3,2],
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
export default masComentadas;