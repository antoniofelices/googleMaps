
// TODO EL MAP EN UNA FUNCION. 

function initialize() {
  
  // Almacena ubicación
  var myLatlng = new google.maps.LatLng(41.405, 2.157);

  /* Objeto Map Options == contiene las variables de inicialización. Almacena opciones del map, zoom, controladores, etc. Es un objeto literal. */
  var mapOptions = {
    zoom: 18,
    center: myLatlng,
    mapTypeControlOptions: {
      mapTypeIds: google.maps.MapTypeId.ROADMAP
    },
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    overviewMapControl: false
  };

  /* Objeto Map es creado, se le asignan propiedades definidas en objeto mapOptions y se alamcena en var map */
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}



// FUNCION PARA CARGAR SCRIPTS ASINCRONICAMENTE

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'http://maps.googleapis.com/maps/api/js?key=<AQUI-API>&sensor=false&region=ES&' +
      'callback=initialize';
  document.body.appendChild(script);
}



// EVENTO ONLOAD PARA INICIALIZAR OBJETO DE MAPA

window.onload = loadScript;
