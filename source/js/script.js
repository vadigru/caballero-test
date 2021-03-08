// let map;

// // google.charts.load('current', {
// //   'packages':['geochart'],
// //   // Note: you will need to get a mapsApiKey for your project.
// //   // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
// //   'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
// // });
// // google.charts.setOnLoadCallback(drawRegionsMap);

// // function drawRegionsMap() {
// //   const data = google.visualization.arrayToDataTable([
// //     ['Country', ''],
// //     ['Norway', 1113],
// //     ['Sweden', 890],
// //     ['Estonia', 64],
// //     ['Latvia', 32],
// //     ['Lithuania', 77],
// //     ['Netherlands', 459],
// //   ]);

// //   const options = {
// //     region: '154', // Europe
// //     colorAxis: {colors: ['#eeeeee', '#eeeeee']},
// //     backgroundColor: '#ffffff',
// //     datalessRegionColor: '#ffffff',
// //     defaultColor: '#ffffff',
// //     legend: 'none',
// //     magnifyingGlass: {enable: true, zoomFactor: 7.5}
// //   };

// //   const chart = new google.visualization.GeoChart(document.getElementById('map'));

// //   chart.draw(data, options);
// // }

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(57.771860158219056, 14.177675255089918),
//     zoom: 4,

//   });

//   const opt = [
//     {
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#f5f5f5"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.icon",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#616161"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.text.stroke",
//       "stylers": [
//         {
//           "color": "#f5f5f5"
//         }
//       ]
//     },
//     {
//       "featureType": "administrative.country",
//       "elementType": "geometry.fill",
//       "stylers": [
//         {
//           "color": "#ffeb3b"
//         },
//         {
//           "visibility": "off"
//         },
//         {
//           "weight": 4
//         }
//       ]
//     },
//     {
//       "featureType": "administrative.land_parcel",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#bdbdbd"
//         }
//       ]
//     },
//     {
//       "featureType": "poi",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#eeeeee"
//         }
//       ]
//     },
//     {
//       "featureType": "poi",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#757575"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#e5e5e5"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#9e9e9e"
//         }
//       ]
//     },
//     {
//       "featureType": "road",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#ffffff"
//         }
//       ]
//     },
//     {
//       "featureType": "road.arterial",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#757575"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#dadada"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#616161"
//         }
//       ]
//     },
//     {
//       "featureType": "road.local",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#9e9e9e"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.line",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#e5e5e5"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.station",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#eeeeee"
//         }
//       ]
//     },
//     {
//       "featureType": "water",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#c9c9c9"
//         }
//       ]
//     },
//     {
//       "featureType": "water",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#9e9e9e"
//         }
//       ]
//     }
//   ]

//   const iconBase =
//     "../img/";
//   const icons = {
//     dot1113: {
//       icon: iconBase + "map-dot-1113.png",
//     },
//     dot890: {
//       icon: iconBase + "map-dot-890.png",
//     },
//     dot459: {
//       icon: iconBase + "map-dot-459.png",
//     },
//     dot64: {
//       icon: iconBase + "map-dot-64.png",
//     },
//     dot32: {
//       icon: iconBase + "map-dot-32.png",
//     },
//     dot77: {
//       icon: iconBase + "map-dot-77.png",
//     },
//   };
//   const features = [
//     {
//       position: new google.maps.LatLng(61.2112583430291, 11.638508841476062),
//       type: "dot1113",
//     },
//     {
//       position: new google.maps.LatLng(59.13561449589335, 17.746907360065137),
//       type: "dot890",
//     },
//     {
//       position: new google.maps.LatLng(51.63506724072244, 8.601997064458426),
//       type: "dot459",
//     },
//     {
//       position: new google.maps.LatLng(58.620226128414615, 26.70681569271414),
//       type: "dot64",
//     },
//     {
//       position: new google.maps.LatLng(56.131396395147995, 28.281239082092885),
//       type: "dot32",
//     },
//     {
//       position: new google.maps.LatLng(54.4989310703937, 26.19895429559496),
//       type: "dot77",
//     },
//   ];

//   // Create markers.
//   for (let i = 0; i < features.length; i++) {
//     const marker = new google.maps.Marker({
//       position: features[i].position,
//       icon: icons[features[i].type].icon,
//       map: map,
//     });
//   }
// }

const menuToggle = document.querySelector('.page-header__menu-toggle');
const navigation = document.querySelector('.page-header__navigation');
const ESC_KEYCODE = 27;

// menu toggle ----------------------------------------------------------------

menuToggle.classList.remove('page-header__menu-toggle--nojs');
navigation.classList.remove('navigation--nojs');

const menuClose = () => {
  menuToggle.classList.remove('page-header__menu-toggle--open');
  navigation.classList.remove('navigation--open');
  document.removeEventListener('keydown', onEscMenuClose);
};

const onEscMenuClose = (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    menuClose();
  }
};

const onClickToggle = () => {
  if (!menuToggle.classList.contains('page-header__menu-toggle--open')) {
    menuToggle.classList.add('page-header__menu-toggle--open');
    navigation.classList.add('navigation--open');
    document.addEventListener('keydown', onEscMenuClose);
    console.log(`test`);
  } else {
    menuToggle.classList.remove('page-header__menu-toggle--open');
    navigation.classList.remove('navigation--open');
  }
};



const addListener = () => {
  if (navigation) {
    menuToggle.addEventListener('click', onClickToggle);
  }

};

addListener();

// add map --------------------------------------------------------------------

const onClickHideOverlay = () => {
  const overlay = document.querySelector('.references__map-overlay');

  overlay.style.display = 'none';
  mapOverlay.removeEventListener('click', onClickHideOverlay);
};

const onMouseOutAddOverlay = () => {
  const overlay = document.querySelector('.references__map-overlay');

  overlay.style.display = 'flex';
  mapOverlay.addEventListener('click', onClickHideOverlay);
};

const references = document.querySelector(".references");

if(references) {
  const mapContainer = document.querySelector('.references__map-wrap');
  const mapStatic = mapContainer.querySelector('.references__map-static');

  const mapInteractive = document.createElement('iframe');
  const mapOverlay = document.createElement('div');

  mapOverlay.innerHTML = 'press click to enable map zoom';
  mapContainer.removeChild(mapStatic);
  mapContainer.appendChild(mapInteractive);
  mapContainer.appendChild(mapOverlay);
  mapOverlay.classList.add('references__map-overlay');
  mapInteractive.src = 'https://www.google.com/maps/d/embed?mid=1Pxd-xOFMxeS2hI1JsQISX4qceosw-QSr';
  mapInteractive.classList.add('references__map-interactive');

  mapOverlay.addEventListener('click', onClickHideOverlay);
  mapInteractive.addEventListener('mouseout', onMouseOutAddOverlay);
}

