$(function(){
    $.ajax("http://www.goodreads.com/review/list/13098315.xml", {
        data: {
            key: "mZhrHzQdWxYy4jmBavBWg",
            v: 2
        },
        success: function(data){
            console.info(data);
        }
    })
});