(function() {
  var powerUsage = document.getElementById("power-usage");
  var dailyPowerUsage = document.getElementById("daily-power-usage");
  var powerCost = document.getElementById("power-cost");
  var label = ["1月", "2月", "3月", "4月", "5月", "6月"];
  var data = [12, 19, 3, 5, 2, 10];
  createLine(powerUsage, label, data);
  createPie(dailyPowerUsage);
  createDoughnut(powerCost);
})();

function createLine(target, label, data){
  var myLineChart = new Chart(target, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "電力（W）",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            data: data
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
}

function createDoughnut(target){
  var myChart = new Chart(target, {
    type: 'doughnut',
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [12, 19, 3, 17, 28, 24, 7]
      }]
    }
  });
}

function createPie(target){
  var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
  };
  var myPieChart = new Chart(target,{
    type: 'pie',
    data: data
    // options: options
  });
}
