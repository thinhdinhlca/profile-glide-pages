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
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: ["red","blue","green","purple","gold","black"],
        borderColor: ["red","blue","green","purple","gold","black"],
        borderWidth: 1,
        data: [
          {
            x: 62,
            y: 94,
            r: 9.8,
          },
          {
            x: -62,
            y: -34,
            r: 7.4,
          },
          {
            x: 8,
            y: 60,
            r: 1.8,
          },
          {
            x: -44,
            y: 59,
            r: 9.4,
          },
          {
            x: 64,
            y: 46,
            r: 6.8,
          },
          {
            x: 16,
            y: -95,
            r: 10.8,
          },
          {
            x: 95,
            y: -80,
            r: 1.8,
          },
        ],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    datalabels: {
        display: false,
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
