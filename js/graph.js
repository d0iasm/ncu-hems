(function() {
  // 電力使用量（総合・ラインチャート） power-usage
  var ctx = document.getElementById("power-usage");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
        datasets: [{
            label: "契約数",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            data: [12, 19, 3, 5, 2, 3]
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

  // 電力使用量/1day（円グラフ） daily-power-usage
  var cty = document.getElementById("daily-power-usage");
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
  var myPieChart = new Chart(cty,{
    type: 'pie',
    data: data
    // options: options
  });

  // 電力代換算 power-cost
  var ctz = document.getElementById("power-cost");
  var myChart = new Chart(ctz, {
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
})();
