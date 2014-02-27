$(function(){
    var map,
        myLatLng = new google.maps.LatLng(37.7833, -122.4167),
        myLatLng1 = new google.maps.LatLng(37.7733, -122.4067),
        myLatLng2 = new google.maps.LatLng(37.7633, -122.4667),
        myLatLng3 = new google.maps.LatLng(37.7933, -122.3967),
        myLatLng4 = new google.maps.LatLng(37.7433, -122.4167);

    function initialize() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        center: myLatLng
      };
      map = new google.maps.Map(document.getElementById('map'),
          mapOptions);

      var marker = new google.maps.Marker({ position: myLatLng, map: map}),
          marker1 = new google.maps.Marker({ position: myLatLng1, map: map}),
          marker2 = new google.maps.Marker({ position: myLatLng2, map: map}),
          marker3 = new google.maps.Marker({ position: myLatLng3, map: map}),
          marker4 = new google.maps.Marker({ position: myLatLng4, map: map});

      var infowindow = new google.maps.InfoWindow({
          content: "<div id='map-info'><strong>507 Forest Hills Dr</strong>" +
                   "<br><img src='./images/house1.jpg' width=200>" +
                   "<ul class='list-inline'>" +
                   "<li>$150,000</li>" +
                   "<li>3 beds</li>" +
                   "<li>2 baths</li></ul>" +
                   "<a class='btn btn-sm btn-primary col-md-12' href='property.html'>Detail</a></div>"
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });
      google.maps.event.addListener(marker1, 'click', function() {
        infowindow.open(map, marker1);
      });
      google.maps.event.addListener(marker2, 'click', function() {
        infowindow.open(map, marker2);
      });
      google.maps.event.addListener(marker3, 'click', function() {
        infowindow.open(map, marker3);
      });
      google.maps.event.addListener(marker4, 'click', function() {
        infowindow.open(map, marker4);
      });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});