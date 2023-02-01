
$(function() {
    console.log("Jquery esta funcionando");

    const lastScroll = $(window).scrollTop();
    // console.log(lastScroll);
    
    $(window).scroll(function(){
      const currentScroll = $(window).scrollTop();
      // console.log(currentScroll)

      let navbar = document.getElementById('navbarScroll');
      if((currentScroll === 0)){
        // console.log(currentScroll + " Inicio")
        $(navbar).removeClass('navbarScroll');
        // console.log("Inicio")
      }else if(currentScroll < lastScroll){
        // console.log(currentScroll + " Subiendo")
        $(navbar).addClass('navbarScroll');
        // console.log("Subiendo")
      }else if(currentScroll > lastScroll){
        // console.log(currentScroll + " Bajando")
        $(navbar).removeClass('navbarScroll');
        // console.log("Bajando...")
      }
            
    })

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

    // Enlaces del menu
    $("#quienesSomosR").on('click', function(event){
      // let enlace = this.hash
      window.location = 'index.html#quieneSomos';
    });
    $("#fechasLimitesI").on('click', function(event){
      // let enlace = this.hash
      window.location = 'admisiones/requisitos.html#fechasLimites';
      
    });
    $("#requerimientosP").on('click', function(event){
      // let enlace = this.hash
      window.location = 'admisiones/requisitos.html';
      
    });
    //Fin enlaces del menu

    // Emblemas
    $("#hinno").on('click', function(event){
      // let enlace = this.hash
      window.location = 'emblemas.html';
      
    });
    $("#escudo").on('click', function(event){
      // let enlace = this.hash
      window.location = 'emblemas.html#escudoEmblemas';
      
    });
    $("#bandera").on('click', function(event){
      // let enlace = this.hash
      window.location = 'emblemas.html#banderaEmblemas';
      
    });
    
    //Enfocador de información
    $("#verMasQuienesSomos").on('click', function (envet){
      // console.log("Click")
      let desenfocar = document.getElementById('desenfocar');
      desenfocar.classList.toggle('ocultar');

      let seccionAboutMe = document.getElementById('enfoca-aboutme');
      seccionAboutMe.classList.toggle('enfocar');

       let textHistoria = document.getElementById('historia');
       textHistoria.classList.toggle('ocultar');

      window.location = 'index.html#quieneSomos';

    })
    $("#verMasMV").on('click', function (envet){
      // console.log("Click")
      let desenfocar = document.getElementById('desenfocar');
      desenfocar.classList.toggle('ocultar');

      let seccionMision = document.getElementById('enfoca-mision');
      seccionMision.classList.toggle('enfocar');

       let textVision = document.getElementById('vision');
       textVision.classList.toggle('ocultar');
       window.location = 'index.html#misionVision';
    })
    $("#verMasObjetivos").on('click', function (envet){
      // console.log("Click")
      let desenfocar = document.getElementById('desenfocar');
      desenfocar.classList.toggle('ocultar');

      let seccionObjetivos = document.getElementById('enfoca-obejetivos');
      seccionObjetivos.classList.toggle('enfocar');

       let textObjetivos = document.getElementById('text-objetivos');
       textObjetivos.classList.toggle('ocultar');
       window.location = 'index.html#objetivos';
    })
    
    //Fin Enfocador de información


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