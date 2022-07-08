

$(".imagen").click(function(e){
    var enlaceimagen=e.target.src;
    var lightbox = `<div class="lightbox">`+
     `<div align="center"><img src="img/imagediezmos.png" ></div>`+
     `<div class="btn-close">X</div>`+
     `</div>`;
    
    $("body").append(lightbox)
    $(".btn-close").click(function(){
    $(".lightbox").remove();
    })


});










