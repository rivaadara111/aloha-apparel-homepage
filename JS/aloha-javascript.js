// BX SLIDEYDOOPERPOOP

$(function(){
	$('.bxslider').bxSlider({
		speed: 500,
		controls:false,
		auto:true,
		minSlides:1,
		maxSlides:4,
		moveSlides:1,
		slideMargin:0
	});
});

//POP UP function

 $('.subscribe > input:submit').click(function(event){
 event.preventDefault();
 alert('Thanks for subscribing!');
 });


//SMOOTH SCROLLZDAWG

$(function() {
      $('a[href*=#]:not([href=#])').on('click', function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
               $('html,body').animate({
                  scrollTop: target.offset().top
               }, 500);

               return false;
            }
         }
      });
   });

