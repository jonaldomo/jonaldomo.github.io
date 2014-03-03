$(document).ready(function(){
  var line1=[['2004-09-01 4:00PM', 134000], ['2005-09-01 4:00PM', 143000], ['2008-10-01 4:00PM', 152000], ['2014-11-01 4:00PM', 150000]];
  var plot1 = $.jqplot('price-history-chart', [line1], {
    axes:{
        xaxis:{
            renderer:$.jqplot.DateAxisRenderer,
            tickOptions: {
              formatString:"%Y"
            }
        }
    }
  });
  
  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
  });
  
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
    }

  google.maps.event.addDomListener(window, 'load', initialize);
});