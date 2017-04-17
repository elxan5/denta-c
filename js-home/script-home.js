$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
})

$(document).ready(function(){
  $(".fquote").click(
    function(){
      $(this).css({"background-color":"#18AFD3"});
      $(".squote, .tquote").css({"background-color":"lightgray"});
      $(".bir").show();
      $(".iki, uch").hide();
  })

  $(".squote").click(
    function(){
      $(this).css({"background-color":"#18AFD3"});
      $(".fquote, .tquote").css({"background-color":"lightgray"});
      $(".iki").show();
      $(".bir, .uch").hide();
  })

  $(".tquote").click(
    function(){
      $(this).css({"background-color":"#18AFD3"});
      $(".fquote, .squote").css({"background-color":"lightgray"});
      $(".uch").show();
      $(".bir, .iki").hide();
  })
})

$(".t1").click(function(){
  $(this).css({"background-color":"#18AFD3"});
  $(".t2, .t3").css({"background-color":"lightgray"});
  $(".team1").show();
  $(".team3").css({"right":"-500%"});
  $(".team2").css({"right":"-200%"})
})

$(".t2").click(function(){
  $(this).css({"background-color":"#18AFD3"});
  $(".t1, .t3").css({"background-color":"lightgray"});
  $(".team2").css({
    "right":"200%"
  });
  $(".team3").css({"right":"-300%"})
})

$(".t3").click(function(){
  $(this).css({"background-color":"#18AFD3"});
  $(".t1, .t2").css({"background-color":"lightgray"});
  $(".team3").css({
    "right":"300%"
  });
})

// $(".pages").click(function(){
//   $(".pages ul li").css({
//     "display":"block"
//   })
// })

$(".pages").click(function(){
  $(".pages ul li").toggleClass("activePage");
});
