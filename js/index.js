$(document).ready(function(){

	// 크롬 이미지 바꾸기
	$(".section1>.section1_2").hover(function(){
		$(".section1>.section1_2").find("a ul li img").attr("src","image/section1_2on.png");
	},function(){
		$(".section1>.section1_2").find("a ul li img").attr("src","image/section1_2.png");
	});

	//모바일용 메뉴버튼_________ 
	$(".mo_view").css({"right": "-60%"}); /*처음위치*/
	$(".close").hide();
	
	$(".mo_menu_btn").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "0%"});
		$(".close").show();
	});
	
	$(".close").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "-60%"});
		$(".close").hide();
	});

});