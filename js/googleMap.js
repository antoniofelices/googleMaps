// TODO EL MAP EN UNA FUNCION.

function initialize() {
  
  // Almacena ubicación
  var myLatlng = new google.maps.LatLng(41.405, 2.157);

  /* Controla los estilos del map. Para convertirlo en B/N. Si necesito ocultar todos los nombres de los negocios del map, descomentar. */
  var styles = [
    {
      stylers: [
        { saturation: -100 }
      ]
    }
    // ,{
    //   featureType: "poi.business",
    //   elementType: "labels",
    //   stylers: [
    //     { visibility: "off" }
    //   ]
    // }
  ];

  /* Opciones del map, zoom, controladores a mostrar, cargo variables declaradas anteriormente, etc. */
  var mapOptions = {
    zoom: 18,
    center: myLatlng,
    styles: styles,
    mapTypeControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeControlOptions: {
      mapTypeIds: google.maps.MapTypeId.ROADMAP
    }
  };

  /* Objeto Map es creado, se le asignan propiedades definidas en objeto mapOptions y se almacena en variable */
  var myMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  /* Icono = para mostrar icono de ubicación propio y txt cuando :hover. Si quiero mostrar icono por defecto eliminar icon. Esta variable tiene que ir después de haber declarado Objeto Map */
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: myMap,
      title: 'Txt a mostrar cuando :hover',
      icon: 'http://studiocombi.info/wp-content/themes/studiocombi/images/leon-studio-combi.png'
  });

  /* Opcion para mostrar burbuja con información cuando se click en icono. Tiene que ir después de haber declarado Objeto Map y var marker. */
  
  // Primero declaro el contenido de la burbuja
  var contentString = '<div id="contenidoMap">'+'<h2 id="" class="">Heme Aquí</h2>'+'</div>';

  // Segundo creo el … y lo almaceno en una variable
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  // Tercero llamo a evento para cuando click en icono
  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(myMap,marker);
  });
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
