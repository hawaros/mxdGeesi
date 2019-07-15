// För att ha smidig scroll på hemsidan. 
//Detta gäller generellt för alla interna länkar.
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
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



/* RING OSS KNAPPEN */
function ring1(){
  $('.ring1').css('font-size', '31px');
  $('.ring1').css('font-weight', 'bold');
  $('.ring1').css('color', '#1ab394');

  if($('.ring1').is(':hidden')){
    $('.ring1').show('slow');
    $('.maila1').hide('slow');
  }
  else{
    $('.ring1').hide('slow');
  }
}

function ring2(){
  $('.ring2').css('font-size', '31px');
  $('.ring2').css('font-weight', 'bold');
  $('.ring2').css('color', '#1ab394');

  if($('.ring2').is(':hidden')){
    $('.ring2').show('slow');
    $('.maila2').hide('slow');
  }
  else{
    $('.ring2').hide('slow');
  }
}

function ring3(){
  $('.ring3').css('font-size', '31px');
  $('.ring3').css('font-weight', 'bold');
  $('.ring3').css('color', '#1ab394');

  if($('.ring3').is(':hidden')){
    $('.ring3').show('slow');
    $('.maila3').hide('slow');
  }
  else{
    $('.ring3').hide('slow');
  }
}



/* MAILA OSS KNAPPEN */
function maila1(){
  $('.maila1').css('font-size', '21px');
  $('.maila1').css('font-weight', 'bold');
  $('.maila1').css('color', '#1ab394');

  if($('.maila1').is(':hidden')){
    $('.maila1').show('slow');
    $('.ring1').hide('slow');
  }
  else{
    $('.maila1').hide('slow');
  }
}


function maila2(){
  $('.maila2').css('font-size', '21px');
  $('.maila2').css('font-weight', 'bold');
  $('.maila2').css('color', '#1ab394');

  if($('.maila2').is(':hidden')){
    $('.maila2').show('slow');
    $('.ring2').hide('slow');
  }
  else{
    $('.maila2').hide('slow');
  }
}


function maila3(){
  $('.maila3').css('font-size', '21px');
  $('.maila3').css('font-weight', 'bold');
  $('.maila3').css('color', '#1ab394');

  if($('.maila3').is(':hidden')){
    $('.maila3').show('slow');
    $('.ring3').hide('slow');
  }
  else{
    $('.maila3').hide('slow');
  }
}

