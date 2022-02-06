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
<script>
   anychart.onDocumentReady(function () {

	// create data
	var data = [
	  {x: 40, value: 42},
	  {x: 13, value: 59},
	  {x: 25, value: 68},
	  {x: 25, value: 63},
	  {x: 44, value: 54},
	  {x: 55, value: 58},
	  {x: 56, value: 46},
	  {x: 60, value: 54},
	  {x: 72, value: 73}
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
</script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
