(function() {
  // ----- ここから -------
  // データをセットする
  // ex.) data[1][hour] 1つ目の機器の時間あたりのデータをint型の配列で保持
  var data = [];
  for(var i=1; i<=15; i++){
    data[i] = {
      "hour": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      "day": [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
      "month": [1,2,3,4,5,6,7,8,9,10,11,12]
    };
  }
  // ----- ここまで -------

  var activeMenu =  document.querySelector('.menu-item.active')
  for(var i=0; i<activeMenu.children.length; i++){
    if(activeMenu.children[i].classList.contains('from')){
      var from = activeMenu.children[i].innerHTML;
    }else if(activeMenu.children[i].classList.contains('to')){
      var to = activeMenu.children[i].innerHTML;
    }
  }

  var powerUsage = document.getElementById("power-usage");
  var units =  document.querySelectorAll('.unit');
  for(var i=0; i<units.length; i++){
    if(units[i].classList.contains('active')){
      var powerLabel = createXAxis(i);
      var powerData = createPowerData(data, parseInt(from), parseInt(to), i);
    }
  }
  createLine(powerUsage, powerLabel, powerData);

  var monthlyPowerUsage = document.getElementById("daily-power-usage");
  var monthlyPowerUsageLabel = ["今月の電気使用量", "目標までの差"];
  var max = 5000;
  var monthlyPowerUsageData = calculatePercentage(data, parseInt(from), parseInt(to), max);
  document.getElementById('power-val').innerHTML = parseInt(monthlyPowerUsageData[0]);
  createDoughnut(monthlyPowerUsage, monthlyPowerUsageLabel, monthlyPowerUsageData);

  var powerCost = document.getElementById("power-cost");
  var costLabel = ["今月の使用料金", "目標までの差額"];
  var max = 3000;
  var costData = calculatePercentage(data, parseInt(from), parseInt(to), max);
  document.getElementById('cost-val').innerHTML = parseInt(costData[0]);
  createDoughnut(powerCost, costLabel, costData);
})();

function createPowerData(data, from, to, num){
  var result = [];
  if(num == 0){
    for(var i=0; i<24; i++){
      var item = 0;
      for(var j=from; j<=to; j++){
        item += data[j]["hour"][i];
      }
      result.push(item);
    }
  }else if(num == 1){
    for(var i=0; i<31; i++){
      var item = 0;
      for(var j=from; j<=to; j++){
        item += data[j]["day"][i];
      }
      result.push(item);
    }
  }else if(num == 2){
    for(var i=0; i<12; i++){
      var item = 0;
      for(var j=from; j<=to; j++){
        item += data[j]["month"][i];
      }
      result.push(item);
    }
  }
  return result;
}

function calculatePercentage(data, from, to, max){
  var item = 0;
  for(var i=from; i<=to; i++){
    for(var j=0; j<31; j++){
      item += data[i]["day"][j];
    }
  }
  var use = item / max * 100;
  return [use, 100-use];
}

function convertCost(){
  // 電気代換算
}

function createXAxis(num){
  var label = [];
  if(num == 0){
    for(var i=1; i<=24; i++){
      var item = i + "時";
      label.push(item);
    }
  }else if(num == 1){
    for(var i=1; i<=31; i++){
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
