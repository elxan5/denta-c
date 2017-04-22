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
  $(".team2").css({"right":"-220%"})
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


$(".pages").click(function(){
  $(".pages ul li").toggleClass("activePage");
  $(".pages ul li").show();
  $(".pages1 ul li").hide();
  $(".pages2 ul li").hide();
});
$(".pages1").click(function(){
  $(".pages1 ul li").toggleClass("activePage");
  $(".pages1 ul li").show();
  $(".pages ul li").hide();
  $(".pages2 ul li").hide();
});
$(".pages2").click(function(){
  $(".pages2 ul li").toggleClass("activePage");
  $(".pages2 ul li").show();
  $(".pages ul li").hide();
  $(".pages1 ul li").hide();
});


$(".opener").click(function(){
  $(".opener span span:first-child").hide();
  $(".opener span span:last-child").show();
})

$(".opener").click(function(){
  $(".openButton span span:first-child").show();
  $(".openButton span span:last-child").hide();
})

$(".opener").click(function(){
  $(this.i).css({
    "transform":"rotate(90deg)"
  });
  $(this).toggleClass("openButton");
  $(".sideMenu").toggleClass("openMenu");
})

$(".toTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
