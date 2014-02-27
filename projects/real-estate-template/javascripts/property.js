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
});