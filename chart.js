// Include Chart.js library in your HTML file:
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// Chart data
var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sales',
      data: [120, 150, 180, 200, 220, 250],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };
  
  // Chart configuration
  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  // Create the chart
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });
  