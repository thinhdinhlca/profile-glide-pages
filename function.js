// https://www.chartjs.org/


window.function = function (data, width, height, tooltips) {

  // data
  data = data.value ?? "100,125,45";
  width = width.value ?? "100";
  height = height.value ?? "80";
  tooltips = tooltips.value ?? "";
 

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
  type: 'bar',
  data: {
    labels: ['Socialize','Task','Inquire','Advocate','Support','Disagree','Facilitate','Action Plan'],
    datasets: [
      {
        label: '',
        backgroundColor: ['#00254D','#549F93','#E55934','#DAC4F7','#576CA8','#9A031E','#1FC7FF','#883E30'],
        borderColor: 'black',
        borderWidth: 1,
        data: [${data}],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            ticks: {
                fontSize: 12
            },
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    legend: {
        display: false
    },
    title: {
      display: true,
      text: 'Overview by Categories (mins)',
      fontSize: 20,
      padding: 30
    },
    plugins: {
      datalabels: {
        display: false,
        anchor: 'center',
        align: 'center',
        color: ['white','white','white','black','white','white','black','white'],
        font: {
          weight: 'bold',
        },
      },
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