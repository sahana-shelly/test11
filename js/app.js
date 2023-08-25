
$(document).ready(function(){ // compulsory first tag

   // slider is 
   $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#toTop").fadeIn();
    } else {
        $("#toTop").fadeOut();
    }
});


$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});
// slider end 
    

})(jQuery);// compulsory last tag 
