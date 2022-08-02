window.function = function (cover,avatar) {

  // data
  cover = cover.value ?? "";
  avatar = avatar.value ?? "";
  let height = 100;
  let width = 100;
  
  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
  </head>
  <body>
  
  <!-- header-->
<div class="columns the-header is-marginless">
    <img class="header-background" src="${cover}" id="header-background-id" alt="background-img">
  </div>
</div>

<!-- header ends -->
<!-- test -->
<div class="column is-12 has-text-centered">
  <img class="profile-picture" src="${avatar}" alt="profile-picture">
</div>
<!-- test -->
  
<style>

.the-header {
  position: relative;
  padding: 100px 20px;
}

.header-background {
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -100;
  bottom: 0;
  left: 0;
  right: 0;
}

.profile-picture {
  border-radius: 50%;
  height: 10em;
  width: 10em;
  margin-top: -75px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
  
  </style>
   
  </body>
  
  
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
