// https://www.chartjs.org/


window.function = function (data, width, height, colors, labels) {

  // data
  data = data.value ?? "";
  width = width.value ?? "100";
  height= height.value ?? "100";
  colors = colors.value ?? "";
  labels = labels.value ?? "";

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
  </head>
  <body>
  <div class="chart-container" style="position: relative; height:${height}vh; width:${width}vw">
  <canvas id="gr1"></canvas>
</div>
    <script>
    let config = {
  type: 'bubble',
  data: {
    labels: [${labels}],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: [${colors}],
        borderColor: [${colors}],
        borderWidth: 1,
        data: [
          ${data}
        ],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10
    },
    scales: {
                    xAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 1,
                                max: 10
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Likelihood'
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 1,
                                max: 10
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Impact'
                            }
                        }]
                },
    plugins: {
    datalabels: {
        display: "auto",
        align: "bottom",
        clip: "true",
        font: {
          weight: 'bold',
          size: 10,
        },
        padding: 10,
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex];
        }
    },
},
    legend: {
        display: false
    },
    title: {
      display: false
    },
  },
}
;
    var canv = document.getElementById('gr1');
    var ctx = canv.getContext('2d');
    let graph1 = new Chart(ctx, config);
    </script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
