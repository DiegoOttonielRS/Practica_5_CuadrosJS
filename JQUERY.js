$(document).ready(function () {
	
	$('.cuadrito').css({border:'2px solid dodgerblue'})
	$('.#btn1').click(function(){
    		$('.cuadrito:first').css({background:'red'})
    		$('.cuadrito:last').css({background:'red'})
    		$('.cuadrito:nth-of-type(7)').css({background:'red'})
    		$('.cuadrito:nth-of-type(20)').css({background:'red'})
    	})
    	
	$('.#btn2').click(function(){
    		$('.cuadrito:first').css({background:'red'})
    		$('.cuadrito:last').css({background:'red'})
    		$('.cuadrito:nth-of-type()').css({background:'red'})
    		$('.cuadrito:nth-of-type()').css({background:'red'})
    	})


    $('.#btn3').click(function(){
    		$('.cuadrito:last').css({background:'red'})
    		$('.cuadrito:').css({background:'red'})
    		$('.cuadrito:nth-of-type()').css({background:'red'})
    		$('.cuadrito:nth-of-type()').css({background:'red'})
    	})



})
