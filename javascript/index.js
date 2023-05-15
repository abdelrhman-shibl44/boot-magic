$(document).ready(() => {
  $(window).scroll(() => {
    let scrollPosition = $(window).scrollTop();
    if(scrollPosition > 10) {
      $(".navbar").addClass("bg-light")
    }else{
      $(".navbar").removeClass("bg-light ")
    }

    // add active class when scroll
    $("section[id] ").each(function (){
      let elementOffset = $(this).offset().top;
      let elementHeight = $(this).innerHeight();
      var navLink = $(".navbar-nav .nav-link[data-section='" + $(this).attr("id") + "']");

      if(scrollPosition >= elementOffset - 180 &&
        scrollPosition <= elementOffset + elementHeight - 180){
        navLink.addClass("active")
      }else{
        navLink.removeClass("active")
      }
    })
  })
  // navLinks on click 
  $(".navbar-nav .nav-link").each(function(){
    $(this).click(function(){
      let sectionId = "#" + $(this).attr("data-section")
      var sectionOffset = $(sectionId).offset().top - 70;

      $("html, body").animate({
        scrollTop: sectionOffset
      },2);
    })
  })
  // collapse when blur 
  $(".navbar-toggler").on("blur", function() {
    setTimeout(() => {
      $(".navbar-collapse").collapse("hide");
    },100)
  });
});