(function() {
  var powerUsage = document.getElementById("power-usage");
  var units =  document.querySelectorAll('.unit');
  for(var i=0; i<units.length; i++){
    if(units[i].classList.contains('active')){
      var powerLabel = createXAxis(i);
    }
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

function createXAxis(num){
  var label = [];
  if(num == 0){
    for(var i=1; i<=24; i++){
      var item = i + "時";
      label.push(item);
    }
  }else if(num == 1){
    for(var i=1; i<=30; i++){
      var item = i + "日";
      label.push(item);
    }
  }else if(num == 2){
    for(var i=1; i<=12; i++){
      var item = i + "月";
      label.push(item);
    }
  }
  return label;
}

function createLine(target, label, data){
  var lineChart = new Chart(target, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "電力（W）",
            backgroundColor: "#9cff57",
            borderColor: "#64dd17",
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
          "#64dd17",
          "#95a5a6"
        ],
        data: data
      }]
    }
  });
}
