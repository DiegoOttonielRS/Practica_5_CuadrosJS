$(document).ready(function () {
	
	$('#boton1').click(function(){
		$('*').css({background:'white'})
			alert("boton precionado")
    		$('.cuadrito:lt(8)').css({background:'red'})
    	})

	$('#boton2').click(function(){
		$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:nth-of-type(8)').css({background:'red'})
			$('.cuadrito:nth-of-type(16)').css({background:'red'})
    		$('.cuadrito:nth-of-type(24)').css({background:'red'})
    		$('.cuadrito:last').css({background:'red'})
    	})


    $('#boton3').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:first').css({background:'red'})
    		$('.cuadrito:nth-of-type(9)').css({background:'red'})
    		$('.cuadrito:nth-of-type(17)').css({background:'red'})
    		$('.cuadrito:nth-of-type(25)').css({background:'red'})
    	})

    $('#boton4').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:gt(0):lt(6)').css({background:'red'})
    	})

    $('#boton5').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:nth-of-type(n+25)').css({background:'red'})
    	  })
    
    $('#boton6').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:lt(8)').css({background:'red'})
    		$('.cuadrito:nth-of-type(9)').css({background:'red'})
			$('.cuadrito:nth-of-type(16)').css({background:'red'})
			$('.cuadrito:nth-of-type(17)').css({background:'red'})
    		$('.cuadrito:nth-of-type(24)').css({background:'red'})
    		$('.cuadrito:nth-of-type(n+25)').css({background:'red'})
    	})
	
	$('#boton7').click(function(){
		$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:lt(8)').css({background:'red'})
    		$('.cuadrito:nth-of-type(9)').css({background:'red'})
    		$('.cuadrito:nth-of-type(17)').css({background:'red'})
    		$('.cuadrito:nth-of-type(25)').css({background:'red'})
    		$('.cuadrito:gt(11):lt(2)').css({background:'red'})
    		$('.cuadrito:gt(17):lt(2)').css({background:'red'})
    		$('.cuadrito:gt(23):lt(2)').css({background:'red'})

    	})
    
    $('#boton8').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:lt(2)').css({background:'red'})
    		$('.cuadrito:gt(5):lt(2)').css({background:'red'})
       		$('.cuadrito:gt(9):lt(4)').css({background:'red'})
    		$('.cuadrito:gt(17):lt(4)').css({background:'red'})
    		$('.cuadrito:gt(23):lt(2)').css({background:'red'})
    		$('.cuadrito:gt(29)').css({background:'red'})
    	})
    
    $('#boton9').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    	  	$('.cuadrito:gt(2):lt(2)').css({background:'red'})
    		$('.cuadrito:gt(7):lt(8)').css({background:'red'})
    		$('.cuadrito:gt(15):lt(8)').css({background:'red'})
    		$('.cuadrito:gt(26):lt(2)').css({background:'red'})
    	})
    
    $('#boton10').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:nth-of-type(n+25)').css({background:'red'})
    	    $('.cuadrito:lt(8)').css({background:'red'})
       		$('.cuadrito:gt(11):lt(2)').css({background:'red'})
    		$('.cuadrito:gt(17):lt(2)').css({background:'red'})

    	})
    
    $('#boton11').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    		$('.cuadrito:lt(8)').css({background:'red'})
    		$('.cuadrito:lt(2)').css({background:'red'})
    		$('.cuadrito:gt(5):lt(2)').css({background:'red'})
       		$('.cuadrito:gt(9):lt(4)').css({background:'red'})
    		$('.cuadrito:gt(17):lt(4)').css({background:'red'})
    		$('.cuadrito:gt(23):lt(2)').css({background:'red'})
    		$('.cuadrito:gt(29)').css({background:'red'})
    		$('.cuadrito:nth-of-type(9)').css({background:'red'})
			$('.cuadrito:nth-of-type(16)').css({background:'red'})
			$('.cuadrito:nth-of-type(17)').css({background:'red'})
    		$('.cuadrito:nth-of-type(24)').css({background:'red'})
    		$('.cuadrito:nth-of-type(n+25)').css({background:'red'})
    	})
    
    $('#boton12').click(function(){
    	$('*').css({background:'white'})
    		alert("boton precionado")
    	})


})
