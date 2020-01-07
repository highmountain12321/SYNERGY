$(document).ready(function() {
	
	// var scrollink = $('.scroll');
	 // scrollink.click(function(e){

	 	// e.preventDefault();
	 	// $('body,html').animate({scrollTop: $(this.hash).offset().top},1010);
	 // });
	 $(".scroll").click(function(){
		 $("body,html").animate({scrollTop:$(this.hash).offset().top},1010);
	 });

});