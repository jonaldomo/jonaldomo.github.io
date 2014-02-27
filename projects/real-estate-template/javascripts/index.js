$(document).ready(function(){
    $('select').selectpicker();

    var footer = new EJS({ url: './templates/footer.ejs' }).render();
    $('#footer').html(footer);
});