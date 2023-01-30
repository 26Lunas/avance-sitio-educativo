
$(function() {
    console.log("Jquery esta funcionando");

    $(".hinno").hover(function () {
      let texto = document.getElementById('texto_enblemas1');
      $(texto).toggle('.ocultar');
    })
    $(".escudo").hover(function () {
      let texto = document.getElementById('texto_enblemas2');
      $(texto).toggle('.ocultar');
    })
    $(".bandera").hover(function () {
      let texto = document.getElementById('texto_enblemas3');
      $(texto).toggle('.ocultar');
    })
    $("#quienesSomosR").on('click', function(event){
      let enlace = this.hash
      window.location = '../index.html#quieneSomos';
    });
    $("#fechasLimitesI").on('click', function(event){
      let enlace = this.hash
      window.location = 'admisiones/requisitos.html#fechasLimites';
      
    });
    


});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });