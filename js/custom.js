$(".toggleMenu").on("click", function(){
	$(this).toggleClass("active");
	$("#mobiNav").toggleClass("active");
	// $(this).siblings(".main-nav").toggleClass("active");	
});


$(window).scroll(function(){
	var scroll = $(this).scrollTop();
	if(scroll >=21.1562){
		$("header").addClass("active");
	}else{
		$("header").removeClass("active")
	}

	if(scroll >= 300){
		$("#scrollTop").fadeIn();
		$(".invest-now-mob").addClass("active");
		$(".fixed-btm").addClass("active");
	}else{
		$("#scrollTop").fadeOut();
		$(".invest-now-mob").removeClass("active");
		$(".fixed-btm").removeClass("active");
	}

})


$("#scrollTop").on("click", function(e){
	$('html, body').animate({
      scrollTop: $('html, body').offset().top,
   });
	e.preventDefault();
});



$('.main-nav li').hover(function () {
    $(this).find(".drop-down").stop(true, true ).delay(200).fadeIn();
}, function () {
    $(this).find(".drop-down").stop(true, true ).delay(200).fadeOut();
});


$(".st-open-modal").on("click", function () {
  var dataModal = $(this).attr("href").split('#')[1];
  $("body").addClass("over-hide");
  $("body").find('.st-modal[data-modal="' + dataModal + '"]').addClass("active");
});


$(".ds-close").on("click", function () {
  $(this).parents(".st-modal").removeClass("active");
  $("body").removeClass("over-hide");

});

function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".main-nav li a").on("click", function(){
        	$(this).parents(".main-nav").removeClass("active");
        	$(this).parents(".main-nav").siblings().removeClass("active");
        	$("#mobiNav").removeClass("active");
        })
    } else {
        //...
    }
}

checkPosition()

$(document).mouseup(function(e) 
{
    var container = $(".share-list");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.removeClass("active");
    }
});