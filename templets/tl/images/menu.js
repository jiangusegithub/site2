// JavaScript Document
$(function(){
	$("#menu > div > a").hover(function(){
		$(this).addClass("ac").children("span").addClass("sc");
	},function(){ 
		$(this).removeClass("ac").children("span").removeClass("sc");
	});
});