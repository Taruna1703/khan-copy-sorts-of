// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar2").style.padding = "2px 0px 0px 0px";
    document.getElementById("navbar2").style.position = "fixed";
    document.getElementById("navbar2").style.top = "0px";
    document.getElementById("nav-heading").add(".nav-heading-visibility");
    document.getElementById("nav-heading1").remove(".nav-heading-visibility");
    
  } else {
    document.getElementById("navbar2").style.padding = "20px 0px 20px 0px";
    document.getElementById("navbar2").style.position = "relative";
    document.getElementById("nav-heading1").add(".nav-heading-visibility");
    document.getElementById("nav-heading").remove(".nav-heading-visibility");
     }
}
$( window ).scroll(function() {
  var scrollVal = $( window ).scrollTop();
  if(scrollVal>80){
    $("#nav-heading").addClass("nav-heading-visibility");
    $("#nav-heading1").removeClass("nav-heading-visibility");
  }
  else{
  	$("#nav-heading1").addClass("nav-heading-visibility");
    $("#nav-heading").removeClass("nav-heading-visibility");
  }
});