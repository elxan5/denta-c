window.onscroll = function(){
	if(window.pageYOffset > 105){
		document.querySelector(".aqua").style.position = "fixed";
		document.querySelector(".aqua").style.top = "0px";
		document.querySelector(".aqua").style.width = "100%";
		document.querySelector(".aqua").style.borderRadius = "0px";

	}else{
		document.querySelector(".aqua").style.position = "";
		document.querySelector(".aqua").style.top = "";
		document.querySelector(".aqua").style.width = "";
		document.querySelector(".aqua").style.borderRadius = "";
	}
}

$(".leftPart ul li:first-child").click(function(){
	$(".hiding").hide();
	$(".general").show();
})
$(".leftPart ul li:nth-child(2)").click(function(){
	$(".hiding").hide();
	$(".cosmetic").show();
})
$(".leftPart ul li:nth-child(3)").click(function(){
	$(".hiding").hide();
	$(".dental").show();
})
$(".leftPart ul li:nth-child(4)").click(function(){
	$(".hiding").hide();
	$(".teeth").show();
})
$(".leftPart ul li:nth-child(5)").click(function(){
	$(".hiding").hide();
	$(".crowns").show();
})
$(".leftPart ul li:last-child").click(function(){
	$(".hiding").hide();
	$(".dentures").show();
})

$(".headerInput input").click(function(){
	$(".aqua h5").css({
		"font-size": "10px",
		"line-height": "10px"
	});
});

$(".aqua ul span i").click(function(){
	$(".aqua h5").css({
		"font-size": "",
		"line-height": ""
	});
	$(this).hide();
	$(".aqua h5 i").show();
	$(".aqua ul li").css({"display":"none"});
	$(".aqua .headerInput").show("slow");
});
$(".aqua h5 i").click(function(){
	$(this).hide();
	$(".aqua ul span i").show();
	$(".aqua ul li").show("slow");
	$(".aqua .headerInput").css({"display":"none"});
});

$(".pages p").click(function(){
	$(".pages ul li").css({
		"display":"block";
	})
})
