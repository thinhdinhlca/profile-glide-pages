// https://www.chartjs.org/


window.function = function (data) {

  // data
  data = data.value ?? "";

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-core.min.js"></script>
    <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-scatter.min.js"></script>
  </head>
  <body>
  <div class="container" style="position: relative; height:100vh; width:80vw">
  <canvas id="gr1"></canvas>
</div>
   anychart.onDocumentReady(function () {

	// create data
	var data = [${data}
	];

    // create a chart
    var chart = anychart.quadrant(data);

    // set the chart title
    chart.title("Quadrant Chart: Basic Sample");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
