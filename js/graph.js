(function() {
  var powerUsage = document.getElementById("power-usage");
  var powerLabel = [];
  for(var i=1; i<=12; i++){
    var label = i + "月";
    powerLabel.push(label);
  }
  var powerData = [12, 19, 3, 5, 2, 10, 20, 4, 1, 0, 3, 5];
  createLine(powerUsage, powerLabel, powerData);

  var dailyPowerUsage = document.getElementById("daily-power-usage");
  var costLabel = ["今月の電気使用量", "目標までの差"];
  var costData = [50, 50];
  createDoughnut(dailyPowerUsage, costLabel, costData);

  var powerCost = document.getElementById("power-cost");
  var costLabel = ["今月の使用料金", "目標までの差額"];
  var costData = [70, 30];
  createDoughnut(powerCost, costLabel, costData);
})();

function createLine(target, label, data){
  var lineChart = new Chart(target, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "電力（W）",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "#2ecc71",
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

function createDoughnut(target, label, data){
  var doughnutChart = new Chart(target, {
    type: 'doughnut',
    data: {
      labels: label,
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#95a5a6"
        ],
        // hoverBackgroundColor: [
        //   "#FF6384",
        //   "#36A2EB"
        // ],
        data: data
      }]
    }
  });
}
