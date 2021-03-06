let map;

// google.charts.load('current', {
//   'packages':['geochart'],
//   // Note: you will need to get a mapsApiKey for your project.
//   // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//   'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
// });
// google.charts.setOnLoadCallback(drawRegionsMap);

// function drawRegionsMap() {
//   var data = google.visualization.arrayToDataTable([
//     ['Country', ''],
//     ['Norway', 1113],
//     ['Sweden', 890],
//     ['Estonia', 64],
//     ['Latvia', 32],
//     ['Lithuania', 77],
//     ['Netherlands', 459],
//   ]);

//   var options = {
//     region: '154', // Europe
//     colorAxis: {colors: ['#eeeeee', '#eeeeee']},
//     backgroundColor: '#ffffff',
//     datalessRegionColor: '#ffffff',
//     defaultColor: '#ffffff',
//     legend: 'none',
//     magnifyingGlass: {enable: true, zoomFactor: 7.5}
//   };

//   var chart = new google.visualization.GeoChart(document.getElementById('map'));

//   chart.draw(data, options);
// }

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(57.771860158219056, 14.177675255089918),
    zoom: 4,

  });

  const iconBase =
    "../img/";
  const icons = {
    dot1113: {
      icon: iconBase + "map-dot-1113.png",
    },
    dot890: {
      icon: iconBase + "map-dot-890.png",
    },
    dot459: {
      icon: iconBase + "map-dot-459.png",
    },
    dot64: {
      icon: iconBase + "map-dot-64.png",
    },
    dot32: {
      icon: iconBase + "map-dot-32.png",
    },
    dot77: {
      icon: iconBase + "map-dot-77.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(61.2112583430291, 11.638508841476062),
      type: "dot1113",
    },
    {
      position: new google.maps.LatLng(59.13561449589335, 17.746907360065137),
      type: "dot890",
    },
    {
      position: new google.maps.LatLng(51.63506724072244, 8.601997064458426),
      type: "dot459",
    },
    {
      position: new google.maps.LatLng(58.620226128414615, 26.70681569271414),
      type: "dot64",
    },
    {
      position: new google.maps.LatLng(56.131396395147995, 28.281239082092885),
      type: "dot32",
    },
    {
      position: new google.maps.LatLng(54.4989310703937, 26.19895429559496),
      type: "dot77",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
