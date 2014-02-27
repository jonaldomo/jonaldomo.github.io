$(document).ready(function(){
    var footer = new EJS({ url: './templates/footer.ejs' }).render(),
        header = new EJS({ url: './templates/header.ejs' }).render();
    $('#footer').html(footer);
    $('#header').html(header);
});